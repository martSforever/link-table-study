<template>
    <div class="link-list">
        <div class="link-list-item"
             v-for="(item,index) in p_data"
             :key="index">
            <template v-if="!!renderFunc">
                <lv-render-func :render-func="renderFunc" :data="item"/>
            </template>
            <template v-else>
                <!--<slot :row="item">
                    {{item.name}}&#45;&#45;{{item.code}}
                </slot>-->
                <lv-scope-slot v-if="$scopedSlots.default"
                               :scope-slot-func="$scopedSlots.default"
                               :data="item"/>
            </template>
        </div>
    </div>
</template>

<script>
    import LvRenderFunc from "../components/render/lv-render-func";
    import LvScopeSlot from "../components/render/lv-scope-slot";

    export default {
        name: "link-list",
        components: {LvScopeSlot, LvRenderFunc},
        props: {
            customData: {type: Array},
            externalData: {type: Array, default: () => []},
            renderFunc: {type: Function},
        },
        created() {
            if (!this.customData) {
                this.initData()
            }
            console.log(this)
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