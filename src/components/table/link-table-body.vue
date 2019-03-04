<template>
    <div class="link-table-body">
        <link-table-body-item :data="data" :bodyColumns="bodyColumns" ref="center" fixed="center"/>
        <link-table-body-item :data="data" :bodyColumns="bodyColumns" ref="left" fixed="left"/>
        <!--<link-table-body-item :data="data" :bodyColumns="bodyColumns" ref="right"/>-->
    </div>
</template>

<script>
    import LinkTableBodyItem from "./link-table-body-item";

    export default {
        name: "link-table-body",
        components: {LinkTableBodyItem},
        props: {
            data: {},
            bodyColumns: {},
        },
    }
</script>

<style lang="scss">
    .link-table-body {
        position: relative;
    }
</style>