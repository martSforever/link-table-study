<template>
    <div class="link-column-controller">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "link-column-controller",
        mounted() {
            this.collect()
        },
        methods: {
            collect() {
                const columns = this.$children.map(item => item.col)
                this.$emit('collect', columns)
            },
        },
    }
</script>

<style lang="scss">

</style>