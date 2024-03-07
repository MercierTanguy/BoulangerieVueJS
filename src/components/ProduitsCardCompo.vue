<template>
  <div>
    <h1>Liste de Produits</h1>
    <div v-for="product in products" :key="product.id" class="produit-card">
      <p>Nom du Produit: {{ product.nom }}</p>
      <p>Prix: {{ product.prix }} €</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const products = ref([]);

onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/produits');
    products.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des produits', error);
  }
});
</script>

<style scoped>
.produit-card {
  margin: 10px;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>
