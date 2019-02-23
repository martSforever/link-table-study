export default {
    name: 'lv-slot',
    props: {
        slots: {
            type: Array,
            required: true
        },
    },
    render(h) {
        return h('div', {
            class: 'lv-slot',
        }, [
            ...this.slots
        ])
    },
}
