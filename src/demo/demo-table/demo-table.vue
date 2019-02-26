<template>
    <div class="demo-table">
        <link-basic-table :data="data">
            <!--<link-table-column-group title="用户信息">-->
            <link-base-column title="编号" field="id" :width="200"/>
            <link-base-column title="姓名" field="name"/>
            <link-base-column title="工号" field="code"/>
            <!--</link-table-column-group>-->
            <link-base-column title="编号111" field="id" :width="200"/>
            <link-base-column title="姓名222" field="name"/>
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
    }
</script>

<style lang="scss">
    .demo-table {
        width: 100%;
        height: 100%;
    }
</style>