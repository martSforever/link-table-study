<template>
    <div class="demo-list">
        <link-list>
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
        methods: {
            renderFunc(h, row) {
                return (
                    <div>
                        [{row.name}]
                    </div>
                )
            },
        }
    }
</script>

<style lang="scss">

</style>