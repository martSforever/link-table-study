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
            fixed: {type: String, default: 'center'}
        },
        data() {
            return {
                group: true,
                lv_fixed: this.fixed,
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
                    get fixed(){return that.lv_fixed},
                    set fixed(val){that.lv_fixed = val},

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