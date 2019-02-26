<template>
    <div class="link-table-head">
        <link-scroll
                ref="scroll"
                :scroll-x="true"
                :scroll-y="false"
                hide-scrollbar
                @scroll="val=>$emit('scroll',val)">
            <table>
                <thead>
                <!--<tr>
                    <td v-for="(col,colIndex) in columns" :key="colIndex">
                        <div :style="{width:`${$plain.$utils.unit(col.width)}`}">
                            {{col.title}}
                        </div>
                    </td>
                </tr>-->
                <tr>
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
            columns: {},
            headColumns: {},
        },
    }
</script>

<style lang="scss">
    .link-table-head {
        td {
            height: 40px;
            border: solid 1px black;
        }
    }
</style>