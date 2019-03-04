<template>
    <div class="demo-table-fixed">
        <link-basic-table :data="data" ref="baseTable">
            <link-base-column title="编号222" field="id" fixed="left"/>
            <link-base-column title="姓名222" field="name" fixed="left"/>
            <link-base-column title="工号111" field="code"/>
            <link-base-column title="编号111" field="id"/>
            <link-base-column title="姓名111" field="name"/>
            <link-base-column title="工号111" field="code"/>
            <link-base-column title="编号111" field="id"/>
            <link-base-column title="姓名111" field="name"/>
            <link-base-column title="工号111" field="code"/>
            <link-base-column title="编号111" field="id"/>
            <link-base-column title="姓名111" field="name"/>
            <link-base-column title="工号111" field="code"/>
            <link-base-column title="编号111" field="id"/>
            <link-base-column title="姓名111" field="name"/>
            <link-base-column title="工号111" field="code"/>
        </link-basic-table>
    </div>
</template>

<script>
    import LinkBasicTable from "../../components/table/link-basic-table";
    import LinkBaseColumn from "../../components/table/link-base-column";

    export default {
        name: "demo-table-fixed",
        components: {LinkBaseColumn, LinkBasicTable},
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

</style>