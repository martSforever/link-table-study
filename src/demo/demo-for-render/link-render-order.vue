<template>
    <div class="link-render-order">
        <div class="link-render-order-left">
            <div class="link-order-item"
                 v-for="(item,index) in leftData"
                 :key="index"
                 @click="$emit('order',item)">
                <slot :row="item" :rowIndex="index" name="left">
                    {{item.name}}
                </slot>
            </div>
        </div>
        <div class="link-render-order-option-button">
            <link-icon icon="pl-arrow-circle-left"/>
            <link-icon icon="pl-arrow-circle-right"/>
        </div>
        <div class="link-render-order-right">
            <div class="link-product-item"
                 v-for="(item,index) in rightData"
                 :key="index"
                 @click="$emit('product',item)">
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
        width: 400px;
        display: inline-flex;
        height: 300px;
        align-items: center;

        .link-render-order-left, .link-render-order-right {
            width: 50%;
            display: inline-block;
            height: 100%;
            border: solid #ddd 1px;
        }

        .link-render-order-left {
            border: solid #ddd 1px;
        }

        .link-render-order-right {
        }

        .link-render-order-option-button {
            width: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;

            & > *:not(:last-child) {
                margin-bottom: 12px;
            }
        }

        .link-product-item, .link-order-item {
            padding: 6px 12px;
            box-sizing: border-box;
            font-size: 14px;
        }
    }
</style>