/*
 * @Author: dlwan1
 * @Date: 2023-05-11 14:21:49
 * @LastEditTime: 2023-06-06 11:10:50
 * @LastEditors: dlwan1
 * @Description: 
 * @FilePath: \travel_vue\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './stores';

import "normalize.css"
import "./assets/css/index.css"

createApp(App).use(router).use(pinia).mount('#app')
