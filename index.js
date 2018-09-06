const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const db = require('./db/dbConfig');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('API running....')
});

// --- Getting dishes ---

server.get('/dishes', (req, res) => {
    db('dishes')
      .then(dishes => res.status(200).json(dishes))
      .catch(err => res.status(500).json(err))
  });

// --- Getting a dish by ID ---
server.get('/dishes/:id', (req, res) => {
    const { id } = req.params
    db('dishes')
    .select()
    .where('id', id)
    .then(dishes => {
      res.status(200).json(dishes);
    })
    .catch(error => {
      res.status(500).json(error)
    })
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
      .then(recipes => res.status(200).json(recipes))
      .catch(err => res.status(500).json(err))
});

server.listen(9000);