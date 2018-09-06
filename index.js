const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const dbConfig = require('./knexfile');


const db = knex(dbConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('API running....')
});

// --- Getting dishes ---

server.get('/dishes', (req, res) => {
    db('dishes')
      .select('name as dish')
      .then(dishes => res.status(200).json(dishes))
      .catch(err => res.status(500).json(err))
  });

// --- Getting a dish by ID ---
server.get('/dishes/:id', (req, res) => {
    const { id } = req.params
  db('dishes')
    .select('dishes.name as dish', 'recipes.name as recipe')
    .join('recipes', 'recipes.dishId', 'dishes.id')
    .where('dishes.id', id)
    .then(recipeList => res.status(200).json(recipeList))
    .catch(err => res.status(500).json(err))
});

// --- Posting new dish ---
server.post('/dishes', (req, res) => {
    const dish = req.body  
    db('dishes')
      .insert(dish)
      .then(([id]) => {
        db('dishes')
          .where({ id })
          .then(dish => res.status(200).json(dish))
          .catch(err => res.status(500).json(err))
      })
      .catch(err => res.status(500).json(err))
  });
  
// --- Getting recipes --- 
server.get('/recipes', (req, res) => {
    db('recipes')
      .select('recipes.name as recipe', 'dishes.name as dish')
      .join('dishes', 'dishes.id', 'recipes.dishId')
      .then(recipes => res.status(200).json(recipes))
      .catch(err => res.status(500).json(err))
});

server.listen(9000);