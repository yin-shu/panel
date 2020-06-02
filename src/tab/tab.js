import Vue from 'vue'
import App from './App'
import { get, post } from './lib/http'

const install = function(Vue, config = {}) {
    Vue.prototype.$_get = get
    Vue.prototype.$_post = post
}
Vue.use(install)

new Vue({
  el: '#app',
  render: h => h(App),
})
