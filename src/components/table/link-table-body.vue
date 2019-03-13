<template>
    <div class="link-table-body">
        <link-table-body-item
                v-for="(item,index) in positions"
                :key="index"
                :ref="item"
                :fixed="item"
                :data="data"
                :bodyColumns="bodyColumns"
                @scroll="e=>lv_scroll(e,item)"/>
    </div>
</template>

<script>
    import LinkTableBodyItem from "./link-table-body-item";
    import {BasicTableMixin} from "./index";

    export default {
        name: "link-table-body",
        components: {LinkTableBodyItem},
        mixins: [BasicTableMixin],
        data() {
            return {
                lv_calculateTimer: null,
                positions: ['center', 'left', 'right'],
                p_baseTable: null,
            }
        },
        computed: {
            baseTable() {
                if (!this.p_baseTable) {
                    this.p_baseTable = this.$plain.$dom.findComponentUpward(this, 'link-basic-table')
                }
                return this.p_baseTable
            },
        },
        mounted() {
            this.lv_calculateScrollDuration()
        },
        methods: {
            lv_scroll(e, pos) {
                pos === 'center' && this.$emit('scroll', e)
                this.positions.forEach(position => position !== pos && this.$refs[position][0].$refs.scroll.setScroll({y: e.target.scrollTop}))
                pos === 'center' && this.lv_calculateScrollDuration()
            },

            lv_calculateScrollDuration() {
                if (!!this.lv_calculateTimer) {
                    clearTimeout(this.lv_calculateTimer)
                    this.lv_calculateTimer = null
                }
                this.lv_calculateTimer = setTimeout(() => {
                    /*
                    *   仔细研究这八个属性的含义
                    *   scrollTop,scrollLeft,scrollWidth,scrollHeight, offsetTop,offsetLeft,offsetWidth,offsetHeight
                    */
                    const wrapper = this.$refs.center[0].$refs.scroll.$refs.wrapper
                    this.baseTable.$emit('scrollLeft', wrapper.scrollLeft === 0)
                    this.baseTable.$emit('scrollRight', Math.abs(wrapper.scrollWidth - wrapper.scrollLeft - wrapper.offsetWidth + 17) < 1)
                }, 50)
            },
        },
    }
</script>

<style lang="scss">
    .link-table-body {
        position: relative;
    }
</style>