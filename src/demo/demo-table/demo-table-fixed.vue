<template>
    <div class="demo-table-fixed">
        <link-basic-table :data="data" ref="baseTable">

            <!--<link-base-column title="工号333" field="code" fixed="right" v-for/>
            <link-base-column title="编号333" field="id" fixed="right"/>
            <link-base-column title="姓名333" field="name" fixed="right"/>
            <link-base-column title="编号222" field="id" fixed="left"/>
            <link-base-column title="姓名222" field="name" fixed="left"/>
            <link-base-column title="工号444" field="code" :order="-1"/>
            <link-base-column title="编号555" field="id"/>
            <link-base-column title="姓名666" field="name" :order="1"/>
            <link-base-column title="工号777" field="code" :order="3"/>
            <link-base-column title="编号888" field="id" :order="2"/>
            <link-base-column title="姓名999" field="name" :order="1"/>-->
            <link-base-column title="工号*111" field="code"/>
            <link-base-column title="编号*222" field="id"/>
            <link-base-column title="姓名*333" field="name"/>
            <link-base-column title="工号*444" field="code"/>
            <link-base-column title="简介" field="desc"/>
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
        mounted() {
            const array = [
                {label: 1, order: 0},
                {label: 2, order: 0},
                {label: 3, order: 1},
                {label: 4, order: 0},
                {label: 5, order: 2},
                {label: 6, order: 0},
                {label: 7, order: 0},
            ]
            // console.log(array.sort((a, b) => a.order - b.order))
        }
    }
</script>

<style lang="scss">

</style>