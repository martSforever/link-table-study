<template>
    <div class="link-table-column-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "link-table-column-group",
        props: {
            title: {type: String,},
        },
        data() {
            return {
                group: true,
            }
        },
        methods: {
            getCols() {
                const children = this.$children.map((item => {
                    if (!item.group) return item.col
                    return item.getCols()
                }))
                return {
                    title: this.title,
                    children,
                }
            },
        }
    }
</script>

<style lang="scss">

</style>