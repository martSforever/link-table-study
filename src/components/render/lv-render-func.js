export default {
  name: "lv-render-func",
  props: {
    renderFunc: {
      type: Function,
      required: true
    },
    data: {
      type: Object,
    },
  },
  render(h) {
    return (
      <div class="lv-render-func">
        {!!this.renderFunc && this.renderFunc.call(this.$parent._renderProxy, h, this.data)}
      </div>
    )
  },
}
