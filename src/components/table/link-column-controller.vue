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
                const columns = this.$children.map((item) => {
                    if (!item.group) return item.col
                    return item.getCols()
                })
                this.$emit('collect', columns)
            },
        },
    }
</script>

<style lang="scss">
    .link-column-controller {
        width: 0;
        height: 0;
        overflow: hidden;
    }
</style>