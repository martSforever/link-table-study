<template>
    <div class="demo-for-render">
        <link-render-order>
            <template slot-scope="{row}" slot="left">
                {{row.name}}--left
            </template>
            <template slot-scope="{row}" slot="right">
                {{row.name}}--right
            </template>
        </link-render-order>
    </div>
</template>

<script>
    import LinkRenderOrder from "./link-render-order";

    export default {
        name: "demo-for-render",
        components: {LinkRenderOrder}
    }
</script>

<style lang="scss">

</style>