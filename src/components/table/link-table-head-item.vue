<template>
    <div class="link-table-head-item" :style="styles" :class="[`link-table-head-item-${fixed}`]">
        <table cellspacing="0" cellpadding="0" border="0">
            <thead>
            <tr v-for="(colRow,colRowIndex) in headColumns" :key="colRowIndex">
                <link-table-head-cell
                        v-for="(colCol,colColIndex) in colRow"
                        :key="colColIndex"
                        :col="colCol"
                        :fixed="fixed"/>
            </tr>
            </thead>
        </table>
    </div>
</template>

<script>
    import LinkTableHeadCell from "./link-table-head-cell";
    import {BasicTableMixin} from "./index";

    export default {
        name: "link-table-head-item",
        components: {LinkTableHeadCell},
        mixins:[BasicTableMixin],
        props: {
            fixed: {},
        },
        computed: {
            styles() {
                if (this.fixed === 'center') return null
                const width = this.bodyColumns.reduce((ret, item) => ret + (item.fixed === this.fixed ? item.width : 0), 0) + "px"
                return {width}
            },
        },
    }
</script>

<style lang="scss">

    .link-table-head-item {
        &:not(.link-table-head-item-center) {
            position: absolute;
            top: 0;
        }
    }

    .link-table-head-item {
        overflow: hidden;
        background-color: #f5f6fa;

        td {
            height: 40px;
            box-sizing: border-box;

            &:hover {
                background-color: #E4E7EF;
            }
        }

        &.link-table-head-item-right {
            right: 0;

            table {
                float: right;
            }
        }

        &.link-table-head-item-left {
            left: 0;
        }
    }
</style>