<template>
    <div class="link-basic-table">
        <link-column-controller>
            <slot></slot>
        </link-column-controller>
        <table>
            <thead>
            <th>
                <tr>编号</tr>
            </th>
            <th>
                <tr>姓名</tr>
            </th>
            <th>
                <tr>工号</tr>
            </th>
            </thead>
        </table>
    </div>
</template>

<script>
    import LinkColumnController from "./link-column-controller";

    export default {
        name: "link-basic-table",
        components: {LinkColumnController},
        props: {
            data: {type: Array, default: () => []},
        },
    }
</script>

<style lang="scss">
    .link-basic-table {
        width: 100%;
        height: 300px;
        background-color: #f2f2f2;
    }
</style>