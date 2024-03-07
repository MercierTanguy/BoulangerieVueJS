<template>
    <main>
      <CompoProduits/>
      <ProduitsCardCompo :products="products"/>
    </main>
</template>
  
<script setup>
import CompoProduits from '../components/CompoProduits.vue';
import ProduitsCardCompo from '../components/ProduitsCardCompo.vue';
  
import { ref } from 'vue';
  
const products = ref([]);
</script>
  
<style scoped lang="scss">

</style>