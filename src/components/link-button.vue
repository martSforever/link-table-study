<template>
    <div class="link-button" :class="classes">
        <slot>
            <span>{{label}}</span>
        </slot>
    </div>
</template>

<script>
    export default {
        name: "link-button",
        props: {
            label: {type: String, default: '按钮'},     //按钮的文本
            color: {type: String, default: 'primary'},  //按钮默认颜色
        },
        computed: {
            classes() {
                return [
                    `link-button-${this.color}`,
                ]
            },
        },
    }
</script>

<style lang="scss">
    .link-button {
        @include public-styles;
        display: inline-block;
        height: 28px;
        line-height: 28px;
        text-align: center;
        min-width: 68px;
        padding: 0 12px;
        background-color: grey;
        cursor: pointer;
        user-select: none;

        @each $key, $color in $color-list {
            &.link-button-#{$key} {
                background-color: $color;
                color: white;

                &:active {
                    background-color: rgba($color, 0.5);
                }
            }
        }
    }
</style>