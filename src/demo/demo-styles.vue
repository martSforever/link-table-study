<template>
    <div class="demo-styles">
        <div>
            <link-button v-for="(item,index) in colors"
                         :key="index"
                         :label="item"
                         :color="item"/>
        </div>
    </div>
</template>

<script>
    import LinkButton from "../components/link-button";

    export default {
        name: "demo-styles",
        components: {LinkButton},
        data() {
            return {
                colors: ['primary', 'success', 'warn', 'error', 'info'],
            }
        },
    }
</script>

<style lang="scss">

</style>