<template>
    <div class="link-basic-table">
        <link-column-controller @collect="p_collect">
            <slot></slot>
        </link-column-controller>
        <table>
            <thead>
            <th>
                <tr>
                    <td v-for="(col,colIndex) in columns" :key="colIndex">
                        {{col.title}}
                    </td>
                </tr>
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
        data() {
            return {
                columns: [],
            }
        },
        methods: {
            p_collect(columns) {
                this.columns = columns
            },
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