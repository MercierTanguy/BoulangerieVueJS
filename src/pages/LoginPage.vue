<template>
    <div class="login-container">
        <h1>Connexion</h1>

        <form class="login-form" @submit.prevent="login">
            <div class="formGroup">
                <label for="user_login">Nom utilisateur</label>
                <input type="text" id="user_login" v-model="user.login" class="input-field"/>
            </div>
            <div class="formGroup">
                <label for="user_password">Mot de passe</label>
                <input type="password" id="user_password" v-model="user.password" class="input-field"/>
            </div>
            <div class="formGroup">
                <button type="submit" class="button">Connexion</button>
            </div>
        </form>

        <h1>Inscription</h1>

        <form class="register-form" @submit.prevent="register">
            <div class="formGroup">
                <label for="new_user_login">Nom utilisateur</label>
                <input type="text" id="new_user_login" v-model="newUser.login" class="input-field"/>
            </div>
            <div class="formGroup">
                <label for="new_user_password">Mot de passe</label>
                <input type="password" id="new_user_password" v-model="newUser.password" class="input-field"/>
            </div>
            <div class="formGroup">
                <button type="submit" class="button">Inscription</button>
            </div>
        </form>
        <div v-if="errorMessage" class="error-message">{{ errorMessage }}</div>
        <div v-if="successMessage" class="success-message">{{ successMessage }}</div>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'Login',
    data() {
        return {
            user: {
                login: '',
                password: ''
            },
            newUser: {
                login: '',
                password: ''
            },
            errorMessage: '',
            successMessage: ''
        };
    },
    methods: {
        async login() {
            try {
                const response = await axios.post('http://localhost:3000/login', this.user);
                console.log(response.data);
                localStorage.setItem('sessionId', response.data.sessionId);
                this.successMessage = 'Connexion réussie !'; // Afficher le message de succès
            } catch (error) {
                console.error('Erreur durant le login', error);
                this.errorMessage = 'Nom utilisateur ou mot de passe incorrect.';
            }
        },
        async register() {
            try {
                const response = await axios.post('http://localhost:3000/register', this.newUser);
                console.log(response.data);
                this.successMessage = 'Inscription réussie !'; // Afficher le message de succès
            } catch (error) {
                console.error('Erreur durant l inscription', error);
                this.errorMessage = 'Nom d\'utilisateur déjà utilisé';
            }
        }
    }
};
</script>

<style scoped lang="scss">
.login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.login-form,
.register-form {
    margin-top: 20px;
    width: 300px; 
}
.input-field {
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
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

.error-message {
    color: red;
    margin-top: 10px;
}

.success-message {
    color: green;
    margin-top: 10px;
}
</style>
