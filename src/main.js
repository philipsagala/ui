import Vue from 'vue'

import VueAuthenticate from 'vue-authenticate'
import VeeValidate from 'vee-validate'
import lodash from 'lodash'
import VueLodash from 'vue-lodash'

Vue.use(Vuetify)
Vue.use(VueAuthenticate)
Vue.use(VeeValidate)
Vue.use(VueLodash, lodash)

Vue.use(VueAuthenticate, {
  baseUrl: 'http://localhost:3000', // Your API domain
  providers: {
    google: {
      client_id: '688861182330-6kf005u20kai8mrdmmk3fbv9t9sj67d4.apps.googleusercontent.com',
      redirect_uri: 'http://localhost:7001/auth/google/callback' // Your client app URL
    }
  }
})

import helper from './helper'
global.helper = helper
import config from './config'
import store from './store/'
global.store = store

import router from './router'
import i18n from './i18n/'
// import menu from './menu'
import Vuetify from 'vuetify'
Vue.use(Vuetify)
import './http'

import 'vuetify/src/stylus/main.styl'
import 'vuetify/src/stylus/settings/_colors.styl'
import '@/styles/main.styl'

import App from './App.vue'

import VueTimeago from 'vue-timeago'

Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  locale: config.locale,
  locales: {
    'en': require('vue-timeago/locales/en-US.json'),
    [config.locale]: require(`vue-timeago/locales/${config.locale}.json`)
  }
})

import Dropzone from 'vue2-dropzone'
import VueQuillEditor from 'vue-quill-editor'
Vue.use(VueQuillEditor)
Vue.component('dropzone', Dropzone)

// import validator from 'indicative'
import validator from 'Validator'
global.validator = validator

import VForm from './components/Form.vue'
import VField from './components/Field.vue'

// import Modal from './components/Modal' Vue.use(Modal)

Vue.component('v-form', VForm)
Vue.component('v-field', VField)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  store,
  router,
  render: h => h(App),
  mounted() {},
  methods: {
    back() {
      this.$router.go(-1)
    }
  },
  created() {
    // this.$http.get('/users/1').then(({data}) => console.log(data))
    global.$t = this.$t
    // fetch menu from server
    this
      .$http
      .get('/settings/menu')
      .then(({data}) => {
        this
          .$store
          .commit('setMenu', data)
      })
    this
      .$store
      .dispatch('checkPageTitle', this.$route.path)
    this
      .$store
      .dispatch('checkAuth')
  }
})
