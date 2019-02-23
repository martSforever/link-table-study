<template>
    <div class="demo-for-render">
        <!--<link-render-order>
            <template slot-scope="{row}" slot="left">
                {{row.name}}&#45;&#45;left
            </template>
            <template slot-scope="{row}" slot="right">
                {{row.name}}&#45;&#45;right
            </template>
        </link-render-order>
        <div>
            <link-button label="打开选择订单产品对话框" @click="showDialog"/>
            <link-render-order-dialog ref="dialog"/>
        </div>-->
        <div>
            <link-button label="使用服务获取订单产品" @click="pick"/>
        </div>
    </div>
</template>

<script>
    import LinkRenderOrder from "./link-render-order";
    import LinkRenderOrderDialog from "./link-render-order-dialog";

    import OrderService from './index'

    export default {
        name: "demo-for-render",
        components: {LinkRenderOrderDialog, LinkRenderOrder},
        data() {
            return {}
        },
        methods: {
            showDialog() {
                this.$refs.dialog.onConfirm = ({order, product}) => {
                    this.$message.show(`订单：${order.name},产品：${product.name}`)
                }
                this.$refs.dialog.show = true
            },
            async pick() {
                const {order, product} = (await OrderService.pick())
                this.$message.show(`订单：${order.name},产品：${product.name}`)
            },
        }
    }
</script>

<style lang="scss">

</style>