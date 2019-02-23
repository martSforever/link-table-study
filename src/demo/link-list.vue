<template>
    <div class="link-list">
        <div class="link-list-item"
             v-for="(item,index) in p_data"
             :key="index">
            <slot :row="item">
                {{item.name}}--{{item.code}}
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "link-list",
        props: {
            customData: {type: Array},
            externalData: {type: Object, default: () => []},
        },
        created() {
            if (!this.customData) {
                this.initData()
            }
        },
        computed: {
            p_data() {
                return this.externalData.concat(this.list)
            },
        },
        data() {
            return {
                list: this.customData,
            }
        },
        methods: {
            initData() {
                this.list = [
                    {name: '张三', code: 'zhangsan'},
                    {name: '李四', code: 'lisi'},
                    {name: '王五', code: 'wangwu'},
                ]
            },
        }
    }
</script>

<style lang="scss">

</style>