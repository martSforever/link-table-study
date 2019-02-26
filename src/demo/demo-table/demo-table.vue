<template>
    <div class="demo-table">
        <div>
            <link-button-group>
                <link-button label="打印columns信息" @click="logColumns"/>
            </link-button-group>
            <link-input :value="idWidth" @input="val=>idWidth = val-0"/>
        </div>
        <link-basic-table :data="data" ref="baseTable">
            <link-table-column-group title="用户信息111">
                <link-base-column title="编号111" field="id" :width="idWidth"/>
                <link-base-column title="姓名111" field="name"/>
                <link-base-column title="工号111" field="code"/>

                <link-table-column-group title="用户信息222">
                    <link-base-column title="编号222" field="id" :width="idWidth"/>
                    <link-base-column title="姓名222" field="name"/>
                    <link-base-column title="工号222" field="code"/>
                </link-table-column-group>

            </link-table-column-group>
            <link-base-column title="编号333" field="id" :width="200"/>
            <link-base-column title="姓名333" field="name"/>

            <link-table-column-group title="用户信息444">
                <link-base-column title="编号444" field="id" :width="idWidth"/>
                <link-base-column title="姓名444" field="name"/>
                <link-base-column title="工号444" field="code"/>
            </link-table-column-group>
        </link-basic-table>
    </div>
</template>

<script>
    import LinkBasicTable from "../../components/table/link-basic-table";
    import LinkBaseColumn from "../../components/table/link-base-column";
    import LinkTableColumnGroup from "../../components/table/link-table-column-group";

    export default {
        name: "demo-table",
        components: {LinkTableColumnGroup, LinkBaseColumn, LinkBasicTable},
        data() {
            return {
                idWidth: 200,
                data: [
                    {id: 111, name: '张三', code: '0001', gender: 'man'},
                    {id: 222, name: '李四', code: '0002', gender: 'man'},
                    {id: 333, name: '王五', code: '0003', gender: 'woman'},
                    {id: 111, name: '张三', code: '0001', gender: 'man'},
                    {id: 222, name: '李四', code: '0002', gender: 'man'},
                    {id: 333, name: '王五', code: '0003', gender: 'woman'},
                    {id: 111, name: '张三', code: '0001', gender: 'man'},
                    {id: 222, name: '李四', code: '0002', gender: 'man'},
                    {id: 333, name: '王五', code: '0003', gender: 'woman'},
                    {id: 111, name: '张三', code: '0001', gender: 'man'},
                    {id: 222, name: '李四', code: '0002', gender: 'man'},
                    {id: 333, name: '王五', code: '0003', gender: 'woman'},
                    {id: 111, name: '张三', code: '0001', gender: 'man'},
                    {id: 222, name: '李四', code: '0002', gender: 'man'},
                    {id: 333, name: '王五', code: '0003', gender: 'woman'},
                    {id: 111, name: '张三', code: '0001', gender: 'man'},
                    {id: 222, name: '李四', code: '0002', gender: 'man'},
                    {id: 333, name: '王五', code: '0003', gender: 'woman'},
                    {id: 111, name: '张三', code: '0001', gender: 'man'},
                    {id: 222, name: '李四', code: '0002', gender: 'man'},
                    {id: 333, name: '王五', code: '0003', gender: 'woman'},
                ]
            }
        },
        methods: {
            logColumns() {
                console.log(this.$refs.baseTable.columns)
            },
        }
    }
</script>

<style lang="scss">
    .demo-table {
        width: 100%;
        height: 100%;
    }
</style>