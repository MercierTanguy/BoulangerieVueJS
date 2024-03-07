import express from 'express';
import bodyParser from 'body-parser';
import Session from './session.js';
import pg from 'pg';

const app = express();
const port = process.env.PORT || 3000;

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Boulangerie',
    password: 'root',
    port: 5432,
});

const sessionManager = new Session();
function isUserLoggedIn(sessionId) {
    return sessionManager.getSessionData().has(sessionId); 
  }

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/login', async (req, res) => {
    try {
        const { login, password } = req.body;
        const result = await pool.query('SELECT * FROM users WHERE nom = $1 AND password = $2', [login, password]);

        if (result.rows.length === 1) {
            const sessionId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
            sessionManager.getSessionData().set(sessionId, { login });
            res.status(200).json({ sessionId });
        } else {
            res.status(401).json({ error: 'Identifiants incorrects' });
        }
    } catch (error) {
        console.error('Erreur lors de la connexion de l utilisateur', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});

app.post('/register', async (req, res) => {
    try {
        const { login, password } = req.body;

        const existingUser = await pool.query('SELECT * FROM users WHERE nom = $1', [login]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ error: 'Utilisateur déjà existant' });
        }
        await pool.query('INSERT INTO users (nom, password) VALUES ($1, $2)', [login, password]);
        res.status(201).json({ message: 'Utilisateur enregistré avec succès' });
    } catch (error) {
        console.error('Erreur lors de l enregistrement de l utilisateur', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});

app.get('/produits', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM produits');
        res.json(result.rows);
    } catch (error) {
        console.error('Erreur dans la récupération des produits', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});

app.get('/panier', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM Panier');
        res.json(result.rows);
    } catch (error) {
        console.error('Erreur dans la récupération du Panier', error);
        res.status(500).json({ error: 'Erreur interne du serveur' });
    }
});

app.post('/addPanier', async (req, res) => {
    try {
        const { sessionId, productId, quantity } = req.body;
        if (!isUserLoggedIn(sessionId)) {
            return res.status(401).json({ error: 'Utilisateur non connecté.' });
        }
        
        await pool.query('INSERT INTO Panier (id_user, id_produit, nombre) VALUES ($1, $2, $3)', [sessionId, productId, quantity]);
        res.status(200).json({ message: 'Produit ajouté au panier avec succès.' });
    } catch (error) {
        console.error('Erreur lors de l\'ajout du produit au panier:', error);
        res.status(500).json({ error: 'Erreur interne du serveur.' });
    }
});

app.listen(port, () => {
    console.log(`Le serveur est sur le port : ${port}`);
});
