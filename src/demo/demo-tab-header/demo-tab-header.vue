<template>
    <div class="demo-tab-header">
        <link-tab-header :data="[
        '苹果',
        '西红柿',
        '柿子',
        '玉米',
        '上海市青浦',
        ]" :value="1"/>
    </div>
</template>

<script>
    import LinkTabHeader from "../../components/tab/link-tab-header";

    export default {
        name: "demo-tab-header",
        components: {LinkTabHeader}
    }
</script>

<style lang="scss">

</style>