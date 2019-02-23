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
                this.$emit('collect', this.$children.map(({title, field, width}) => ({title, field, width})))
            },
        },
    }
</script>

<style lang="scss">

</style>