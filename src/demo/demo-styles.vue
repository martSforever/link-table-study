<template>
    <div class="demo-styles">
        <div>
            <link-button v-for="(item,index) in colors"
                         :key="index"
                         :label="item"
                         :color="item"/>
        </div>
        <div>
            <link-button v-for="(item,index) in colors"
                         :key="index"
                         :label="item"
                         :color="item"
                         type="line"/>
        </div>
        <div>
            <link-button v-for="(item,index) in colors"
                         :key="index"
                         :label="item"
                         :color="item"
                         type="none"/>
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
                colors: ['primary', 'success', 'warn', 'error', 'info', 'crm'],
            }
        },
    }
</script>

<style lang="scss">
    .demo-styles {
        & > div {
            margin-bottom: 12px;
        }

        .link-button {
            &:not(:last-child) {
                margin-right: 12px;
            }
        }
    }
</style>