<template>
    <div class="link-table-body">
        <link-scroll
                ref="scroll"
                scroll-x
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
        name: "link-table-body",
        props: {
            data: {},
            bodyColumns: {},
        },
    }
</script>

<style lang="scss">
    .link-table-body {

    }
</style>