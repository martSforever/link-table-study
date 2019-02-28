<template>
    <div class="link-table-head" :style="{height:(headColumns.length*40)+'px'}">
        <link-scroll
                ref="scroll"
                :scroll-x="true"
                :scroll-y="false"
                hide-scrollbar
                @scroll="val=>$emit('scroll',val)">
            <table cellspacing="0" cellpadding="0" border="0">
                <thead>
                <!--<tr>
                    <td colspan="6" rowspan="1">用户信息</td>
                    <td colspan="1" rowspan="3">编号333</td>
                    <td colspan="1" rowspan="3">姓名333</td>
                    <td colspan="3" rowspan="1">用户信息444</td>
                </tr>
                <tr>
                    <td colspan="1" rowspan="2">编号111</td>
                    <td colspan="1" rowspan="2">姓名111</td>
                    <td colspan="1" rowspan="2">工号111</td>
                    <td colspan="3" rowspan="1">用户信息222</td>

                    <td colspan="1" rowspan="2">编号444</td>
                    <td colspan="1" rowspan="2">编号444</td>
                    <td colspan="1" rowspan="2">编号444</td>
                </tr>
                <tr>
                    <td colspan="1" rowspan="1">编号222</td>
                    <td colspan="1" rowspan="1">姓名222</td>
                    <td colspan="1" rowspan="1">工号222</td>
                </tr>-->
                <tr v-for="(colRow,colRowIndex) in headColumns" :key="colRowIndex">
                    <td v-for="(colCol,colColIndex) in colRow"
                        :key="colColIndex"
                        :colspan="colCol.colspan"
                        :rowspan="colCol.rowspan">
                        <div :style="{width:`${$plain.$utils.unit(colCol.width)}`}">
                            {{colCol.title}}
                        </div>
                    </td>
                </tr>
                </thead>
            </table>
        </link-scroll>
    </div>
</template>

<script>
    export default {
        name: "link-table-head",
        props: {
            headColumns: {},
        },
    }
</script>

<style lang="scss">
    .link-table-head {
        background-color: #f5f6fa;
        width: 100%;
        overflow-x: hidden;
        td {
            height: 40px;
            box-sizing: border-box;
        }
    }
</style>