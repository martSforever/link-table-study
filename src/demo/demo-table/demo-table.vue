<template>
    <div class="demo-table">
        <link-basic-table :data="data">
            <link-base-column title="编号" field="id" :width="200"/>
            <link-base-column title="姓名" field="name"/>
            <link-base-column title="工号" field="code"/>
            <link-base-column title="性别" field="gender"/>
            <link-base-column title="编号" field="id" :width="200"/>
            <link-base-column title="姓名" field="name"/>
            <link-base-column title="工号" field="code"/>
            <link-base-column title="性别" field="gender"/>
            <link-base-column title="编号" field="id" :width="200"/>
            <link-base-column title="姓名" field="name"/>
            <link-base-column title="工号" field="code"/>
            <link-base-column title="性别" field="gender"/>
            <link-base-column title="编号" field="id" :width="200"/>
            <link-base-column title="姓名" field="name"/>
            <link-base-column title="工号" field="code"/>
            <link-base-column title="性别" field="gender"/>
        </link-basic-table>
    </div>
</template>

<script>
    import LinkBasicTable from "../../components/table/link-basic-table";
    import LinkBaseColumn from "../../components/table/link-base-column";

    export default {
        name: "demo-table",
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
    .demo-table {
        width: 100%;
        height: 100%;
    }
</style>