<template>
    <demo-for-render/>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import DemoList from "./demo/demo-list";
    import DemoForRender from "./demo/demo-for-render/demo-for-render";

    export default {
        name: 'app',
        components: {
            DemoForRender,
            DemoList,
            HelloWorld
        }
    }
</script>

<style>
    html, body {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;
    }
</style>
