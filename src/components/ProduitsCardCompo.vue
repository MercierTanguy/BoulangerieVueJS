<template>
    
      <h1>Liste de Produits</h1>
      <div v-for="image in images" :key="image.id" class="produit-card">
      <!-- <img :src=""> -->
      <p>Nom du Produit: {{ image.name }}</p>
      <p>Description: {{ image.description }}</p>
    </div>
    
  </template>

<script>
import imagesData from '../assets/produits/produits.json'; 

export default {
  data() {
    return {
      images: imagesData.images
    };
  },
};
</script>

<style scoped>
.produit-card {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>