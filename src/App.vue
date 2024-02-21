<template>
  <HeadCompo></HeadCompo>
  <router-view></router-view>
  <FooterCompo></FooterCompo>
</template>
<script setup>
import { onMounted } from "vue"

import HeadCompo from "./components/HeadCompo.vue";
import FooterCompo from "./components/FooterCompo.vue";

 onMounted(() => {
   console.log('🔵 App.vue has mounted')
 })


</script>

<style lang="scss" scoped>

</style>
