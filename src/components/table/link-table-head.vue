<template>
    <div class="link-table-head" :style="{height:(headColumns.length*40)+'px'}">
        <link-scroll
                ref="scroll"
                :scroll-x="true"
                :scroll-y="false"
                hide-scrollbar
                @scroll="val=>$emit('scroll',val)">
            <table cellspacing="0" cellpadding="0" border="0">
                <thead>
                <tr v-for="(colRow,colRowIndex) in headColumns" :key="colRowIndex">
                    <link-table-head-cell
                            v-for="(colCol,colColIndex) in colRow"
                            :key="colColIndex"
                            :col="colCol"/>
                </tr>
                </thead>
            </table>
        </link-scroll>
    </div>
</template>

<script>
    import LinkTableHeadCell from "./link-table-head-cell";

    export default {
        name: "link-table-head",
        components: {LinkTableHeadCell},
        props: {
            headColumns: {},
        },
    }
</script>

<style lang="scss">
    .link-table-head {
        background-color: #f5f6fa;
        width: 100%;
        overflow-x: hidden;

        td {
            height: 40px;
            box-sizing: border-box;

            &:hover {
                background-color: #E4E7EF;
            }
        }
    }
</style>