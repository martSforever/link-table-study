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
                           @product="p_product"
                           :externalLeftData="externalLeftData">
            <template slot-scope="{row}" v-if="!!leftRender" slot="left">
                <lv-render-func :render-func="leftRender" :data="row"/>
            </template>
            <template slot-scope="{row}" v-if="!!rightRender" slot="right">
                <lv-render-func :render-func="rightRender" :data="row"/>
            </template>
        </link-render-order>
    </link-dialog>
</template>

<script>
    import LinkRenderOrder from "./link-render-order";
    import LvRenderFunc from "../../components/render/lv-render-func";

    export default {
        name: "link-render-order-dialog",
        components: {LvRenderFunc, LinkRenderOrder},
        data() {
            return {
                show: false,
                onConfirm: null,
                onCancel: null,
                order: {},
                product: {},

                leftRender: null,
                rightRender: null,
                externalLeftData: null,
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