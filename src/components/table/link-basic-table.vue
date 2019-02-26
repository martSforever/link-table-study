<template>
    <div class="link-basic-table">
        <link-column-controller @collect="p_collect">
            <slot></slot>
        </link-column-controller>

        <div class="link-table-head" ref="head" @scroll="handleHeadScroll">
            <table>
                <thead>
                <tr>
                    <td v-for="(col,colIndex) in columns" :key="colIndex">
                        <div :style="{width:`${$plain.$utils.unit(col.width)}`}">
                            {{col.title}}
                        </div>
                    </td>
                </tr>
                </thead>
            </table>
        </div>

        <div class="link-table-body" ref="body" @scroll="handleBodyScroll">
            <table>
                <tbody>
                <tr v-for="(row,rowIndex) in data" :key="rowIndex">
                    <td v-for="(col,colIndex) in columns" :key="colIndex">
                        <div :style="{width:`${$plain.$utils.unit(col.width)}`}">
                            {{row[col.field]}}
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
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
            handleBodyScroll(e) {
                this.$refs.head.scrollLeft = e.target.scrollLeft
            },
            handleHeadScroll(e) {
                this.$refs.body.scrollLeft = e.target.scrollLeft
            },
        },
    }
</script>

<style lang="scss">
    .link-basic-table {
        width: 100%;
        height: 300px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;

        .link-table-head {
            height: 40px;
            color: black;
            background-color: #cacaca;
            width: 100%;
            overflow-x: auto;
        }

        .link-table-body {
            flex: 1;
            overflow-y: auto;
            width: 100%;
            overflow-x: auto;
        }
    }
</style>