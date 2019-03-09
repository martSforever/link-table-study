import Vue from 'vue'
import App from './App.vue'
import './styles/index.scss'

import PlainUI from 'plain-ui/dist/plain-ui.umd'
import 'plain-ui/dist/plain-ui.css'

Vue.use(PlainUI, {
    prefix: 'link',
    pageRegistry(path) {
        return new Promise((rs, rj) => {
            import('src/demo' + path + '.vue')
                .then(module => rs(module.default))
                .catch(e => rj(e))
        })
    },
})

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')
