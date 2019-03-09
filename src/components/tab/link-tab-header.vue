<template>
    <div class="link-tab-header">
        <div
                ref="items"
                class="link-tab-header-item"
                :class="{'link-tab-header-item-active':p_value === index}"
                @click="p_click(item,index)"
                @mouseenter="p_enter(item,index)"
                @mouseleave="p_leave"
                v-for="(item,index) in data" :key="index">
            <span ref="texts">
                {{item}}
            </span>
        </div>
        <div class="link-tab-header-indicator" :style="indicatorStyles"></div>
    </div>
</template>

<script>
    export default {
        name: "link-tab-header",
        props: {
            value: {},
            data: {type: Array, default: () => []},
        },
        data() {
            return {
                p_value: this.value,
                p_hoverIndex: null,

                p_width: null,
                p_left: null,
            }
        },
        computed: {
            indicatorStyles() {
                return {
                    width: this.p_width + 'px',
                    left: this.p_left + 'px',
                }
            },
        },
        mounted() {
            this.reset()
        },
        methods: {
            p_click(item, index) {
                this.p_value = index
                this.reset()
            },
            p_enter(item, index) {
                this.p_hoverIndex = index
                this.reset()
            },
            p_leave() {
                this.p_hoverIndex = null
                this.reset()
            },
            reset() {
                let index = this.p_hoverIndex != null ? this.p_hoverIndex : this.p_value
                const textDom = this.$refs.texts[index]
                this.p_left = textDom.offsetLeft
                this.p_width = textDom.offsetWidth
            },
        }
    }
</script>

<style lang="scss">
    .link-tab-header {
        display: flex;
        align-items: center;
        border-bottom: solid 10px #ddd;
        position: relative;

        .link-tab-header-item {
            padding: 6px 12px;
            cursor: pointer;
            min-width: 60px;
            text-align: center;

            &:hover {
                background-color: $color-primary-light;
            }

            &.link-tab-header-item-active {
                /*background-color: $color-primary-light;*/
            }
        }

        .link-tab-header-indicator {
            position: absolute;
            left: 0;
            bottom: -10px;
            width: 100px;
            height: 10px;
            background-color: $color-primary;
            transition: all 0.15s linear;
        }
    }
</style>