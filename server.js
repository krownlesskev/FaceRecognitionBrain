const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const cors = require('cors');
const knex = require('knex');

const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');

const db = knex({
  client: 'pg',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: '85054',
    database: 'smart-brain'
  }
});

console.log(process.env.DATABASE_URL);

const app = express();

app.use(cors({
  origin: ['http://localhost:3001', 'https://quiet-anchorage-75334.herokuapp.com/'],
}))
app.use(express.json());

app.post('/signin', signin.handleSignin(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db) })
app.put('/image', (req, res) => { image.handleImage(req, res, db) })
app.post('/imageurl', (req, res) => { image.handleApiCall(req, res) })

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`app is running on port ${PORT}`);
})