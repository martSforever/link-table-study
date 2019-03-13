<template>
    <div class="link-table-cell" :style="styles">
        <lv-scope-slot v-if="!!scopedSlots"
                       :scope-slot-func="scopedSlots"
                       :data="data"/>
        <span v-else>{{label}}</span>
        <slot></slot>
    </div>
</template>

<script>
    import LvScopeSlot from "../render/lv-scope-slot";

    export default {
        name: "link-table-cell",
        components: {LvScopeSlot},
        props: {
            width: {},
            height: {},
            label: {},
            col: {},
            scopedSlots: {type: Function},
            data: {},
        },
        computed: {
            styles() {
                const styles = {}
                !!this.width && (styles.width = `${this.width}px`)
                !!this.height && (styles.height = `${this.height}px`)
                return styles
            },
        },
    }
</script>

<style lang="scss">

</style>