import Vue from 'vue'
import LinkRenderOrderDialog from './link-render-order-dialog'

export default {

    get instance() {
        if (!this._instance) {
            this._instance = this.newInstance()
        }
        return this._instance
    },

    _instance: null,

    newInstance() {
        const instance = new Vue(LinkRenderOrderDialog).$mount()
        document.body.append(instance.$el)
        return instance
    },

    pick({leftRender, rightRender, externalLeftData} = {}) {
        return new Promise((rs, rj) => {
            this.instance.show = true
            this.instance.onConfirm = rs

            this.instance.leftRender = leftRender
            this.instance.rightRender = rightRender
            this.instance.externalLeftData = externalLeftData
        })
    },
}