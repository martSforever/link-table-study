<template>
    <div class="link-table-body-item" :style="styles" :class="[`link-table-body-item-${fixed}`]">
        <link-scroll
                ref="scroll"
                :scroll-x="fixed === 'center'"
                :hideScrollbar="fixed === 'left'"
                @scroll="val=>$emit('scroll',val)">
            <table cellspacing="0" cellpadding="0" border="0">
                <tbody>
                <tr v-for="(row,rowIndex) in data" :key="rowIndex">
                    <td v-for="(col,colIndex) in bodyColumns" :key="colIndex">
                        <div :style="{width:`${$plain.$utils.unit(col.width)}`}"
                        class="link-table-cell">
                            <div v-if="col.fixed === fixed">
                                {{row[col.field]}}
                            </div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </link-scroll>
    </div>
</template>

<script>
    export default {
        name: "link-table-body-item",
        props: {
            data: {},
            bodyColumns: {},
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
    .link-table-body-item {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        right: 0;
        background-color: white;

        &.link-table-body-item-right {
            right: 0;
            left: initial;

            .pl-scroll-content {
                float: right;
            }
        }

        td {
            height: 36px;
            border-bottom: solid 0.5px #ddd;
        }
    }
</style>