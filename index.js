const express = require('express');
const helmet = require('helmet');

const db = require('./db/helpers/helper');

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('API running....')
});

// --- Getting dishes ---

server.get('/dishes', (req, res) => {
    db.getDishes()
      .then(dishes => res.status(200).json(dishes))
      .catch(err => res.status(500).json(err))
  });

// --- Getting a dish by ID ---
server.get('/dishes/:id', (req, res) => {
    const { id } = req.params
    db.getDish(id)
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
    db.addDish(dish)
      .then(id => {
           res.status(200).json(id)
      })
          .catch(err => res.status(500).json(err))
  });


// --- Getting recipes ---
server.get('/recipes', (req, res) => {
    db.getRecipes()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            res.status(500).json(error)
        })
})

  
// --- Posting recipe --- 
server.post('/recipes', (req, res) => {
    const recipe = req.body;
    db.addRecipe(recipe)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
            res.status(500).json(error)
        })
});

server.listen(9000);