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
        },
        watch: {
            width(val) {
                this.lv_width = val
            },
        },
        data() {
            return {
                lv_width: this.width,
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