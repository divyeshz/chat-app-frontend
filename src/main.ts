import App from './App.vue'
import router from './router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { createHead } from '@unhead/vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import Vue3Toasity, { type ToastContainerOptions } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import VueCryptojs from 'vue-cryptojs'

const app = createApp(App)


const vuetify = createVuetify({
    components,
    directives,
})

const i18n = createI18n({})
const head = createHead()

app.use(Vue3Toasity,{
    autoClose: 3000,
} as ToastContainerOptions,)
app.use(head)
app.use(i18n)
app.use(vuetify)
app.use(VueCryptojs)
app.use(createPinia())
app.use(router)

app.mount('#app')
