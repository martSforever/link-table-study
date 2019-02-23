<template>
    <div class="demo-for-render">
        <link-render-order>
            <template slot-scope="{row}" slot="left">
                {{row.name}}--left
            </template>
            <template slot-scope="{row}" slot="right">
                {{row.name}}--right
            </template>
        </link-render-order>
        <div>
            <link-button label="打开选择订单产品对话框" @click="showDialog"/>
            <link-render-order-dialog ref="dialog"/>
        </div>
    </div>
</template>

<script>
    import LinkRenderOrder from "./link-render-order";
    import LinkRenderOrderDialog from "./link-render-order-dialog";

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
        }
    }
</script>

<style lang="scss">

</style>