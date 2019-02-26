<template>
    <div class="link-basic-table">
        <link-column-controller @collect="p_collect">
            <slot></slot>
        </link-column-controller>
        <!--<div>
            hover:{{hover}}
        </div>-->
        <link-table-head ref="head"
                         :columns="columns"
                         @mouseenter.native="hover = 'head'"
                         @scroll="handleHeadScroll"/>

       <!-- <link-table-body ref="body"
                         :data="data"

                         :columns="columns"
                         @mouseenter.native="hover = 'body'"
                         @scroll="handleBodyScroll"/>-->
    </div>
</template>

<script>
    import LinkColumnController from "./link-column-controller";
    import LinkTableHead from "./link-table-head";
    import LinkTableBody from "./link-table-body";

    export default {
        name: "link-basic-table",
        components: {LinkTableBody, LinkTableHead, LinkColumnController},
        props: {
            data: {type: Array, default: () => []},
        },
        data() {
            return {
                columns: [],
                hover: null,
            }
        },
        methods: {
            p_collect(columns) {
                this.columns = columns
            },
            handleBodyScroll(e) {
                this.hover === 'body' && this.$refs.head.$refs.scroll.setScroll({x: e.target.scrollLeft})
            },
            handleHeadScroll(e) {
                this.hover === 'head' && this.$refs.body.$refs.scroll.setScroll({x: e.target.scrollLeft})
            },
        },
    }
</script>

<style lang="scss">
    .link-basic-table {
        width: 100%;
        height: 300px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;

        .link-table-head {
            color: black;
            background-color: #cacaca;
            width: 100%;
            overflow-x: auto;
        }

        .link-table-body {
            flex: 1;
            overflow-y: auto;
            width: 100%;
            overflow-x: auto;
        }
    }
</style>