<template>
    <div class="link-column-controller">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "link-column-controller",
        mounted() {
            console.log(this.$children)
        }
    }
</script>

<style lang="scss">

</style>