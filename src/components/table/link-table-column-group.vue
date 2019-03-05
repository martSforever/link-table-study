<template>
    <div class="link-table-column-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "link-table-column-group",
        props: {
            title: {type: String,},
            order: {type: Number, default: 0},
            fixed: {type: String, default: 'center'}
        },
        data() {
            return {
                group: true,
                lv_fixed: this.fixed,
                lv_order: this.order,
            }
        },
        methods: {
            getCols() {
                const children = this.$children.map((item => {
                    const ret = !item.group ? item.col : item.getCols()
                    ret.fixed = this.fixed
                    return ret
                }))
                const that = this
                return {
                    /*@formatter:off*/
                    get title(){return that.title},
                    get order(){return that.lv_order + (that.lv_fixed === 'left'?9999:that.lv_fixed === 'right'?-9999:0)},
                    get fixed(){return that.lv_fixed},
                    set fixed(val){that.lv_fixed = val},
                    set order(val){that.lv_order = val},
                    group: true,
                    children,
                    /*@formatter:on*/
                }
            },
        }
    }
</script>

<style lang="scss">

</style>