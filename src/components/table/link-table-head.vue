<template>
    <div class="link-table-head" :style="{height:(headColumns.length*40)+'px'}">
        <link-scroll
                ref="scroll"
                :scroll-x="true"
                :scroll-y="false"
                hide-scrollbar
                @scroll="val=>$emit('scroll',val)">
            <link-table-head-item :headColumns="headColumns" :body-columns="bodyColumns" fixed="center"/>
        </link-scroll>
        <link-table-head-item :headColumns="headColumns" :body-columns="bodyColumns" fixed="left"/>
        <link-table-head-item :headColumns="headColumns" :body-columns="bodyColumns" fixed="right"/>
    </div>
</template>

<script>
    import LinkTableHeadCell from "./link-table-head-cell";
    import LinkTableHeadItem from "./link-table-head-item";

    export default {
        name: "link-table-head",
        components: {LinkTableHeadItem, LinkTableHeadCell},
        props: {
            headColumns: {},
            bodyColumns: {},
        },
    }
</script>

<style lang="scss">
    .link-table-head {
        width: 100%;
        overflow-x: hidden;
        position: relative;
    }
</style>