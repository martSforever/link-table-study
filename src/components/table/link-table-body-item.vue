<template>
    <div class="link-table-body-item" :style="styles">
        <link-scroll
                ref="scroll"
                :scroll-x="fixed === 'center'"
                :hideScrollbar="fixed === 'left'"
                @scroll="val=>$emit('scroll',val)">
            <table>
                <tbody>
                <tr v-for="(row,rowIndex) in data" :key="rowIndex">
                    <td v-for="(col,colIndex) in bodyColumns" :key="colIndex">
                        <div :style="{width:`${$plain.$utils.unit(col.width)}`}">
                            {{row[col.field]}}
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
    }
</style>