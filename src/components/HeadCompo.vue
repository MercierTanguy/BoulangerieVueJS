<template>
    <header class="app-header">
        <nav>
            <ul>
                <li><router-link to="/">Accueil</router-link></li>
                <li><router-link to="/produits">Produits</router-link></li>
                <li><router-link to="/commander">Commander</router-link></li>
                <li><a href="https://www.google.com/maps/dir//Boulangerie+du+Mus%C3%A9e/@48.8571879,2.2348803,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47e66fd5f13dfc6d:0xe7228b06b97ed0ad!2m2!1d2.3173149!2d48.8572112?entry=ttu">Intinéraire</a></li>
                <li><router-link to="/login">Login</router-link></li>
                <li><button @click="logout" class="logout-button">Logout</button></li>

            </ul>
        </nav>
    </header>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const emit = defineEmits(['logout']);

defineProps({
    isUserLoggedIn: Boolean 
});

const logout = () => {
    localStorage.removeItem('sessionId'); 
    emit('logout'); 
};
</script>

<style scoped lang="scss">
.logout-button {
    padding: 10px 20px;
    background-color: #ff4d4f;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.logout-button:hover {
    background-color: #ff7875;
}
</style>