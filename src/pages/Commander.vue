<template>
    <main class="Commander_form">
      <h1>Page de Commande</h1>
      <section>
        <FormCommande :inputs="inputs" />
      </section>
    </main>
  </template>
  
  <script setup>
  import FormCommande from '../components/FormCommande.vue'
  
  const inputs = [
    {
      name: 'email',
      type: 'text',
      placeholder: 'Enter your email'
    },
    {
      name: 'name',
      type: 'text',
      placeholder: 'Enter your name' 
    }
   
  ];
  </script>
  
  <style lang="scss" scoped>
  .Commander_form{
    h1 {
      
    }
  }
  </style>