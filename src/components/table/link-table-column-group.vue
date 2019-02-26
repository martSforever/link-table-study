<template>
    <div class="link-table-column-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "link-table-column-group",
        props:{
            title: {type: String,},
        },
    }
</script>

<style lang="scss">

</style>