import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue3 from 'bootstrap-vue-3'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash, faPlus, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import store from './store/index';

library.add(faTrash)
library.add(faPlus)
library.add(faEdit)
//設定起始位置為App.vue
const app = createApp(App)

//註冊font-awesome套件
app.component("font-awesome-icon", FontAwesomeIcon)
//註冊boostrap vue3套件
app.use(BootstrapVue3)
//註冊儲存庫
app.use(store)
//註冊路由
app.use(router)
//綁定index.html id 為 app 之物件
app.mount('#app')
