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
                const prop = ['title', 'field', 'width', 'fixed']
                const columns = this.$children.map((item => {
                    return prop.reduce((ret, key) => {
                        ret[key] = item[key]
                        return ret
                    }, {})
                }))
                this.$emit('collect', columns)
            },
        },
    }
</script>

<style lang="scss">

</style>