export default {
    name: 'lv-scope-slot',
    props: {
        scopeSlotFunc: {
            type: Function,
            required: true
        },
        data: {},
    },
    render(h) {
        return (
            <div class="lv-scope-slot">
                {!!this.scopeSlotFunc && this.scopeSlotFunc(this.data)}
            </div>
        )
    },
}
