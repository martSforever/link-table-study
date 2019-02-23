<template>
    <div class="link-basic-column">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "link-base-column",
        props: {
            title: {type: String,},
            field: {type: String,},
            width: {type: Number,},
        },
    }
</script>

<style lang="scss">

</style>