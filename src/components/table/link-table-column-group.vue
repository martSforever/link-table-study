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
            fixed: {type: String, default: 'center'}
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
                    group: true,
                    children,
                }
            },
        }
    }
</script>

<style lang="scss">

</style>