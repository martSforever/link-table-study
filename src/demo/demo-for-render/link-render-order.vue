<template>
    <div class="link-render-order">
        <div class="link-render-order-left">
            <div class="link-order-item"
                 v-for="(item,index) in leftData"
                 :key="index">
                <slot :row="item" :rowIndex="index" name="left">
                    {{item.name}}
                </slot>
            </div>
        </div>
        <div class="link-render-order-right">
            <div class="link-product-item"
                 v-for="(item,index) in rightData"
                 :key="index">
                <slot :row="item" :rowIndex="index" name="right">
                    {{item.name}}
                </slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "link-render-order",
        data() {
            return {
                leftData: [
                    {name: '订单一', code: 'one'},
                    {name: '订单二', code: 'two'},
                    {name: '订单三', code: 'three'},
                ],
                rightData: [
                    {name: '产品一', code: '_1'},
                    {name: '产品二', code: '_2'},
                    {name: '产品三', code: '_3'},
                ],
            }
        },
    }
</script>

<style lang="scss">
    .link-render-order {
        width: 200px;
        display: inline-flex;
        height: 300px;
        align-items: center;

        .link-render-order-left, .link-render-order-right {
            width: 50%;
            display: inline-block;
            height: 100%;
        }

        .link-render-order-left {
            background-color: blueviolet;
            color: white;
        }

        .link-render-order-right {
            background-color: cornflowerblue;
            color: white;
        }
    }
</style>