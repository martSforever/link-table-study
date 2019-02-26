<template>
    <div class="link-table-head">
        <link-scroll
                ref="scroll"
                :scroll-x="true"
                :scroll-y="false"
                hide-scrollbar
                @scroll="val=>$emit('scroll',val)">
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
        </link-scroll>
    </div>
</template>

<script>
    export default {
        name: "link-table-head",
        props: {
            columns: {},
        },
    }
</script>

<style lang="scss">

</style>