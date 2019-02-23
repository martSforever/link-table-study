<template>
    <link-dialog v-model="show"
                 confirm-button
                 cancel-button
                 @confirm="p_confirm"
                 @cancel="p_cancel">
        <div>
            order:{{order.name}},product:{{product.name}}
        </div>
        <link-render-order @order="p_order"
                           @product="p_product"/>
    </link-dialog>
</template>

<script>
    import LinkRenderOrder from "./link-render-order";

    export default {
        name: "link-render-order-dialog",
        components: {LinkRenderOrder},
        data() {
            return {
                show: false,
                onConfirm: null,
                onCancel: null,
                order: {},
                product: {},
            }
        },
        methods: {
            p_confirm() {
                !!this.onConfirm && !!this.onConfirm({
                    order: this.order,
                    product: this.product
                })
                this.show = false
            },
            p_cancel() {
                !!this.onCancel && !!this.onCancel()
                this.show = false
            },
            p_order(val) {
                this.order = val
            },
            p_product(val) {
                this.product = val
            },
        }
    }
</script>

<style lang="scss">

</style>