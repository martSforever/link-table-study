<template>
    <div class="demo-table">
        <div>
            this is demo table page
        </div>
        <link-basic-table>
            <link-base-column title="编号" field="id"/>
            <link-base-column title="姓名" field="name"/>
            <link-base-column title="工号" field="code"/>
        </link-basic-table>
    </div>
</template>

<script>
    import LinkBasicTable from "../../components/table/link-basic-table";
    import LinkBaseColumn from "../../components/table/link-base-column";

    export default {
        name: "demo-table",
        components: {LinkBaseColumn, LinkBasicTable}
    }
</script>

<style lang="scss">

</style>