<template>
    <td class="link-table-head-cell"
        :colspan="col.colspan"
        :rowspan="col.rowspan">
        <div :style="{
            width:`${$plain.$utils.unit(col.width)}`,
            height:'40px',
        }"
             class="link-table-head-cell-content">
            <div class="link-table-head-cell-title">
                {{col.title}}
            </div>
            <div class="link-table-head-cell-drag" @mousedown="mousedown"></div>
        </div>
    </td>
</template>

<script>
    export default {
        name: "link-table-head-cell",
        props: {
            col: {},
        },
        data() {
            return {
                indicator: null,
                _baseTable: null,
            }
        },
        computed: {
            baseTable() {
                if (!this._baseTable) {
                    this._baseTable = this.$plain.$dom.findComponentUpward(this, 'link-basic-table')
                }
                return this._baseTable
            },
        },
        methods: {
            mousedown(e) {
                console.log('mousedown')
                document.body.addEventListener('mousemove', this.mousemove)
                document.body.addEventListener('mouseup', this.mouseup)
                this.$plain.$dom.enableSelectNone();

                this.indicator = document.createElement('div')
                this.indicator.style.width = `${e.target.offsetWidth}px`
                this.indicator.style.backgroundColor = '#ddd'
                this.indicator.style.zIndex = 1
                this.indicator.style.height = `${this.baseTable.$el.offsetHeight}px`
                this.indicator.style.display = 'inline-block'
                this.indicator.style.position = 'absolute'
                this.indicator.style.top = `${this.baseTable.$el.getBoundingClientRect().top}px`
                this.indicator.style.left = `${e.clientX - e.target.offsetWidth / 2}px`
                document.body.appendChild(this.indicator)

            },
            mousemove(e) {
                console.log('mousemove')
            },
            mouseup(e) {
                console.log('mouseup')
                document.body.removeEventListener('mousemove', this.mousemove)
                document.body.removeEventListener('mouseup', this.mouseup)
                this.$plain.$dom.disabledSelectNone();
            },
        }
    }
</script>

<style lang="scss">
    .link-table-head-cell {
        .link-table-head-cell-content {
            display: flex;
            justify-content: space-between;

            .link-table-head-cell-drag {
                width: 8px;
                height: 100%;
                background-color: black;
                cursor: pointer;
            }
        }
    }
</style>