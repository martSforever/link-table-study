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
        mixins:[BasicTableMixin],
        data() {
            return {
                positions: ['center', 'left', 'right']
            }
        },
        methods: {
            lv_scroll(e, pos) {
                pos === 'center' && this.$emit('scroll', e)
                this.positions.forEach(position => position !== pos && this.$refs[position][0].$refs.scroll.setScroll({y: e.target.scrollTop}))
            },
        },
    }
</script>

<style lang="scss">
    .link-table-body {
        position: relative;
    }
</style>