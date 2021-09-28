// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyDMlJq1nouZoMbCymUK8acE0uOBRyVJPCU",
  authDomain: "uriagekun-2021-dev.firebaseapp.com",
  databaseURL: "https://uriagekun-2021-dev-default-rtdb.firebaseio.com",
  projectId: "uriagekun-2021-dev",
  storageBucket: "uriagekun-2021-dev.appspot.com",
  messagingSenderId: "362178472369",
  appId: "1:362178472369:web:b846c4aec149a155367590"
};

// Initialize Firebase
initializeApp(firebaseConfig);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
