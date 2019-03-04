<template>
    <div class="link-basic-column">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "link-base-column",
        props: {
            title: {type: String,},
            field: {type: String,},
            width: {type: Number, default: 100},
            fixed: {type: String, default: 'center'},
            order: {type: Number, default: 0},
        },
        watch: {
            width(val) {
                this.lv_width = val
            },
            fixed(val) {
                this.lv_fixed = val
            },
            order(val) {
                this.lv_order = val
            },
        },
        data() {
            return {
                lv_width: this.width,
                lv_fixed: this.fixed,
                lv_order: this.order,
            }
        },
        computed: {
            col() {
                const that = this
                /*@formatter:off*/
                const ret = {
                    get title(){return that.title},
                    get field(){return that.field},
                    get width(){return that.lv_width},
                    get fixed(){return that.lv_fixed},
                    get order(){return that.lv_order + (that.lv_fixed === 'left'?9999:that.lv_fixed === 'right'?-9999:0)},
                    set width(val){that.lv_width=val},
                }
                /*@formatter:on*/
                return ret
            },
        },
    }
</script>

<style lang="scss">

</style>