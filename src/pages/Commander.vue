<template>
  <main class="Commander_form">
    <h1>Page de Commande</h1>
    <section v-if="isUserLoggedIn">
      <div class="product-form" v-for="product in products" :key="product.id">
        <h2>{{ product.nom }}</h2>
        <p>Prix: {{ product.prix }} €</p>
        <form @submit.prevent="submitOrder(product)">
          <div class="formGroup">
            <label :for="'quantity_' + product.id">Quantité</label>
            <input type="number" :id="'quantity_' + product.id" v-model="product.quantity" min="1" required>
          </div>
          <button type="submit" class="button">Commander</button>
        </form>
      </div>
    </section>
    <p v-else>Veuillez vous connecter pour passer une commande.</p>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const isUserLoggedIn = ref(checkUserLoggedIn());
const products = ref([]);

onMounted(() => {
  fetchProducts();
});

function checkUserLoggedIn() {
  const sessionId = localStorage.getItem('sessionId');
  return sessionId !== null;
}

async function fetchProducts() {
  try {
    const response = await axios.get('http://localhost:3000/produits');
    products.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des produits:', error);
  }
}

async function submitOrder(product) {
  try {
    const sessionId = localStorage.getItem('sessionId');
    if (!sessionId) {
      console.error('Utilisateur non connecté.');
      return;
    }
    await axios.post('http://localhost:3000/addPanier', { sessionId, productId: product.id, quantity: product.quantity });
    product.quantity = '';
  } catch (error) {
    console.error('Erreur lors de la soumission de la commande:', error);
  }
}
</script>

<style scoped lang="scss">
.product-form {
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.product-form h2 {
  margin-bottom: 10px;
}

.formGroup {
  margin-bottom: 15px;
}

.formGroup label {
  display: block;
  margin-bottom: 5px;
}

.formGroup input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.button {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.button:hover {
  background-color: #0056b3;
}
</style>