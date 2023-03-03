<!--
 * @Author: CJY
 * @Date: 2023-03-03 16:33:58
 * @LastEditors: CJY
 * @LastEditTime: 2023-03-03 17:41:30
 * @Description: 
 * @FilePath: \vant4-shop-main-h5\src\App.vue
-->
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
    <router-link to="/">Go to Home</router-link>
    <router-link to="/About">Go to About</router-link>
    <router-view />

</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
