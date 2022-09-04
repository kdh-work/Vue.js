// import Vue from 'vue'
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

// new Vue({
//   router,
//   render: h => h(App)
// }).$mount('#app')
const app = createApp(App)
app.use(router).mount('#app')
