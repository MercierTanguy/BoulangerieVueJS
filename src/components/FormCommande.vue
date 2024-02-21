<template>
    <form>
      <article v-for="(el, index) in inputs" :key="index">
        <label :for="el.name">{{ el.name }}</label>
        <input :type="el.type" :placeholder="el.placeholder" :id="el.name">
      </article>
    </form>

  </template>
  
  <script setup>
  defineProps({
    inputs: {
      type: Array,
      default: () => []
    }
  });
  </script>
  