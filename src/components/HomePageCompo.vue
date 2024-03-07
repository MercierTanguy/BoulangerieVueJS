<template>
    <h1>Boulangerie du Musée</h1> 
    <section class="intro-section">
        <p>Bienvenue sur le site de la Boulangerie du Musée ! C'est un endroit accueillant et chaleureux. Si vous êtes intéressé par notre boutique, je vous invite à faire le tour de notre site.</p>
        <div class="images-container">
            <img src="../assets/devanture.jpg" alt="devanture">
            <img src="../assets/presentoire.jpg" alt="présentoir">
        </div>
    </section>
    
    <section class="menus-section">
        <h2>Nos Menus</h2>

        <article class="menu-item">
            <h3>Menu Petit Déjeuner</h3>
            <p>Commencez votre journée avec notre délicieux menu petit déjeuner. Il comprend une sélection de pains, viennoiseries, et boissons chaudes. Prix : 5€</p>
        </article>

        <article class="menu-item">
            <h3>Menu Déjeuner</h3>
            <p>Découvrez notre menu déjeuner composé de sandwichs frais, de salades savoureuses et d'une boisson au choix. Prix : 8€</p>
        </article>

        <article class="menu-item">
            <h3>Menu Goûter</h3>
            <p>Passez un agréable moment avec notre menu goûter. Des pâtisseries fraîches et des boissons pour satisfaire vos papilles. Prix : 6€</p>
        </article>
    </section>
    
    <section class="info-section">
        <h2>Informations</h2>
        <p>Adresse: 40 Rue de Bourgogne, 75007 Paris, France</p>
        <p>Téléphone: 01 45 51 24 29</p>
        <p>Horaires d'ouverture:</p>
        <img src="../assets/image_horaires_2916388.png" alt="horaires">
    </section>
</template>

<script setup>
import { onMounted, onUnmounted } from 'vue';
import { defineEmits } from 'vue';

defineProps({ msg: String, textContent: String })

const emit = defineEmits(['message'])

onMounted(() => {
    emit('message', 'salut');
})

onUnmounted(() => {
    console.log('HomePageCompo has been destroyed');
})
</script>

<style scoped lang="scss">
.intro-section {
    padding: 20px;
    background-color: #f8f8f8;
    border-radius: 10px;
    margin-bottom: 20px;
}

.images-container {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
}

.images-container img {
    width: 40%; 
    border-radius: 10px;
}

.menus-section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-bottom: 30px;
}

.menu-item {
    width: calc(30% - 20px);
    padding: 20px;
    margin-bottom: 20px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.menu-item h3 {
    color: #333;
}

.menu-item p {
    color: #666;
}

.info-section {
    text-align: center;
}

.info-section p {
    margin-bottom: 10px;
}

.info-section img {
    width: 80%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style>
