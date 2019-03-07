<template>
    <div class="link-basic-table">
        <link-column-controller @collect="p_collect">
            <slot></slot>
        </link-column-controller>
        <!--<div>
            hover:{{hover}}
        </div>-->
        <link-table-head ref="head"
                         :head-columns="headColumns"
                         :body-columns="bodyColumns"
                         @mouseenter.native="hover = 'head'"
                         @scroll="handleHeadScroll"/>

        <link-table-body ref="body"
                         :data="data"

                         :bodyColumns="bodyColumns"
                         @mouseenter.native="hover = 'body'"
                         @scroll="handleBodyScroll"/>
    </div>
</template>

<script>
    import LinkColumnController from "./link-column-controller";
    import LinkTableHead from "./link-table-head";
    import LinkTableBody from "./link-table-body";

    export default {
        name: "link-basic-table",
        components: {LinkTableBody, LinkTableHead, LinkColumnController},
        props: {
            data: {type: Array, default: () => []},
        },
        data() {
            return {
                columns: [],
                hover: null,
                isMounted: false,
            }
        },
        computed: {
            headColumns() {
                if (!this.isMounted) return []
                /*计算最大层数*/
                let maxLevel = 1;
                const calculateMaxLevel = (columns, level) => {
                    if (!!columns && columns.length > 0) {
                        if (level > maxLevel) {
                            maxLevel = level
                        }
                        for (let i = 0; i < columns.length; i++) {
                            const column = columns[i];
                            column.level = level - 1
                            if (column.group) {
                                calculateMaxLevel(column.children, level + 1)
                            }
                        }
                    }
                }
                calculateMaxLevel(this.columns, 1)
                /*如果不是组，该表头所占的行数就是： 最大层数-他所在的层数+1*/

                const calculateSpan = (columns) => {
                    columns.forEach(col => {
                        if (col.group) {
                            calculateSpan(col.children)
                            col.rowspan = 1
                            col.colspan = col.children.reduce((ret, item) => ret + item.colspan, 0)
                        } else {
                            col.rowspan = maxLevel - col.level
                            col.colspan = 1
                        }
                    })
                }
                calculateSpan(this.columns)
                const headColumns = []
                for (let i = 0; i < maxLevel; i++) headColumns.push([])
                const iterateCol = (columns) => {
                    columns.forEach((col) => {
                        headColumns[col.level].push(col)
                        if (col.group) iterateCol(col.children)
                    })
                }
                iterateCol(this.columns)
                return headColumns;
            },
            bodyColumns() {
                const itar = (columns, ret) => {
                    columns.forEach(item => {
                        if (!!item.group) {
                            itar(item.children, ret)
                        } else {
                            ret.push(item)
                        }
                    })
                }
                const cols = []
                itar(this.columns, cols)
                // console.log(cols.map(i => i.title))
                console.log('bodyColumns', cols)
                return cols
            },
        },
        mounted() {
            this.isMounted = true
        },
        methods: {
            handleBodyScroll(e) {
                this.hover === 'body' && this.$refs.head.$refs.scroll.setScroll({x: e.target.scrollLeft})
            },
            handleHeadScroll(e) {
                this.hover === 'head' && this.$refs.body.$refs.center[0].$refs.scroll.setScroll({x: e.target.scrollLeft})
            },
            p_collect(columns) {
                this.columns = columns
                this.p_iterate(this.columns, (col) => {
                    if (col.group)
                        col.children.sort((a, b) => b.order - a.order)
                })
                this.columns.sort((a, b) => b.order - a.order)
            },
            p_iterate(columns, fn) {
                columns.forEach(col => {
                    fn(col)
                    if (col.group) this.p_iterate(col.children, fn)
                })
            },
        },
    }
</script>

<style lang="scss">
    .link-basic-table {
        width: 100%;
        height: 300px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;

        .link-table-body {
            flex: 1;
            overflow-y: auto;
            width: 100%;
            overflow-x: auto;
        }
    }
</style>