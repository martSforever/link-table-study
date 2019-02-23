<template>
    <demo-list/>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import DemoList from "./demo/demo-list";

    export default {
        name: 'app',
        components: {
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
