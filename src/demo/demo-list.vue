<template>
    <div class="demo-list">
        <link-list :external-data="externalData">
            <template slot-scope="data">
                {{data.row.name}}-icon
            </template>
        </link-list>
    </div>
</template>

<script>
    import LinkList from "./link-list";

    export default {
        name: "demo-list",
        components: {LinkList},
        data() {
            return {
                data: [
                    {name: '张三1222', code: 'zhangsan'},
                    {name: '李四132', code: 'lisi'},
                    {name: '王五1333', code: 'wangwu'},
                ],
                externalData: [
                    {name: 'kkkkb', code: 'zhangsan'},
                    {name: 'bbb', code: 'lisi'},
                    {name: 'ccc', code: 'wangwu'},
                ],
            }
        },
    }
</script>

<style lang="scss">

</style>