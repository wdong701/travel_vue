/*
 * @Author: dlwan1
 * @Date: 2023-05-11 14:21:49
 * @LastEditTime: 2023-05-11 15:22:04
 * @LastEditors: dlwan1
 * @Description: 
 * @FilePath: \travel_vue\src\main.js
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "normalize.css"

createApp(App).use(router).mount('#app')
