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
            type: {type: String, default: 'fill'},      //按钮类型
        },
        computed: {
            classes() {
                return [
                    `link-button-color-${this.color}`,
                    `link-button-type-${this.type}`,
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
        cursor: pointer;
        user-select: none;

        &.link-button-type-fill {
            @each $key, $color in $color-list {
                &.link-button-color-#{$key} {
                    background-color: $color;
                    color: white;

                    &:active {
                        background-color: rgba($color, 0.5);
                    }
                }
            }
        }

        &.link-button-type-line {
            @each $key, $color in $color-list {
                &.link-button-color-#{$key} {
                    border: solid 1px $color;
                    color: $color;

                    &:active {
                        background-color: rgba($color, 0.5);
                    }
                }
            }
        }
        &.link-button-type-none {
            @each $key, $color in $color-list {
                &.link-button-color-#{$key} {
                    color: $color;
                    &:active {
                        background-color: rgba($color, 0.5);
                    }
                }
            }
        }


    }
</style>