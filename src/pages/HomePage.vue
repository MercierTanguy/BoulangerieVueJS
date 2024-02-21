<template>
    <main>
        <HomePageCompo msg="Bienvenu chez nous ! " text-content="Boulangerie du Musée" @message="getMessage"></HomePageCompo> 
    </main>
</template>
<script setup>
    import { onMounted } from 'vue';
    import HomePageCompo from '../components/HomePageCompo.vue';

    const getMessage=(message)=>{
        console.log("papa écoute le message suivant",message);
    }
</script>
<style scoped lang="scss">
</style>