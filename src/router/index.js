/*
 * @Author: dlwan1
 * @Date: 2023-05-11 15:21:05
 * @LastEditTime: 2023-06-06 15:24:39
 * @LastEditors: dlwan1
 * @Description: 
 * @FilePath: \travel_vue\src\router\index.js
 */
import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      redirect: "/home"
    },
    {
      path: "/home",
      component: () => import("@/views/home/home.vue")
    },
    {
      path: "/favor",
      component: () => import("@/views/favor/favor.vue")
    },
    {
      path: "/order",
      component: () => import("@/views/order/order.vue")
    },
    {
      path: "/message",
      component: () => import("@/views/message/message.vue")
    },
    {
      path: "/city",
      component: () => import("@/views/city/city.vue"),
    }
  ]
})

export default router