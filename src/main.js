import Vue from 'vue'
import App from './App'
import router from './router'
import _ from 'lodash';
import VueLazyload from 'vue-lazyload'

import 'common/css/font-awesome.min.css'

Vue.config.productionTip = false

Vue.prototype.$_ = _;
Vue.use(VueLazyload, {
  loading: require('common/images/default.png')
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
