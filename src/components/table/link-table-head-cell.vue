<template>
    <td class="link-table-head-cell"
        :colspan="col.colspan"
        :rowspan="col.rowspan">
        <link-table-cell
                v-if="col.fixed === fixed"
                :width="col.realWidth"
                :height="bodyRowHeight"
                :label="col.title"
                :col="col"
                :scoped-slots="col.titleScopedSlots">
            <div class="link-table-head-cell-drag" @mousedown="mousedown"></div>
        </link-table-cell>
    </td>
</template>

<script>
    import LinkTableCell from "./link-table-cell";
    import {BasicTableMixin} from "./index";

    export default {
        name: "link-table-head-cell",
        components: {LinkTableCell},
        mixins: [BasicTableMixin],
        props: {
            col: {},
            fixed: {},
        },
        data() {
            return {
                indicator: null,
                _baseTable: null,
                startX: null,
            }
        },
        computed: {
            baseTable() {
                if (!this._baseTable) {
                    this._baseTable = this.$plain.$dom.findComponentUpward(this, 'link-basic-table')
                }
                return this._baseTable
            },
            dragColumn() {
                const itar = (col) => {
                    if (col.group) {
                        return itar(col.children[col.children.length - 1])
                    }
                    return col
                }
                return itar(this.col)
            },
        },
        methods: {
            mousedown(e) {
                this.startX = e.clientX
                document.body.addEventListener('mousemove', this.mousemove)
                document.body.addEventListener('mouseup', this.mouseup)
                this.$plain.$dom.enableSelectNone();

                this.indicator = document.createElement('div')
                this.indicator.style.width = `${e.target.offsetWidth}px`
                this.indicator.style.backgroundColor = '#ddd'
                this.indicator.style.zIndex = 999
                this.indicator.style.height = `${this.baseTable.$el.offsetHeight}px`
                this.indicator.style.display = 'inline-block'
                this.indicator.style.position = 'absolute'
                this.indicator.style.top = `${this.baseTable.$el.getBoundingClientRect().top}px`
                this.indicator.style.left = `${e.clientX - e.target.offsetWidth / 2}px`
                document.body.appendChild(this.indicator)

            },
            mousemove(e) {
                this.indicator.style.left = `${e.clientX}px`
            },
            mouseup(e) {
                document.body.removeEventListener('mousemove', this.mousemove)
                document.body.removeEventListener('mouseup', this.mouseup)
                this.$plain.$dom.disabledSelectNone();
                document.body.removeChild(this.indicator)

                const durX = e.clientX - this.startX
                this.dragColumn.width = this.dragColumn.width + durX
            },
        }
    }
</script>

<style lang="scss">
    .link-table-head-cell {
        .link-table-head-cell-content {
            display: flex;
            justify-content: space-between;

            .link-table-head-cell-drag {
                width: 8px;
                height: 100%;
                background-color: transparent;
                cursor: w-resize;
            }
        }
    }
</style>