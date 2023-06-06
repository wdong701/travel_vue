<!--
 * @Author: dlwan1
 * @Date: 2023-05-11 14:21:49
 * @LastEditTime: 2023-06-06 16:09:25
 * @LastEditors: dlwan1
 * @Description: 
 * @FilePath: \travel_vue\src\App.vue
-->
<template>
  <div class="app">
    <router-view/>
    <tab-bar/>
  </div>

</template>
<script setup>
import TabBar from '@/components/tab-bar/tab-bar.vue';
import { useRoute } from "vue-router";

const route = useRoute()
</script>

<style scoped>
</style>
