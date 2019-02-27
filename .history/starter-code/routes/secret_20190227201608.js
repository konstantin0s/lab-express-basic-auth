const express = require('express');
const router  = express.Router();
let Recipes = require('../models/recipes');


/* GET recipes page */

router.get('/secret', (req, res) => {
      res.render('secret');
    
});



module.exports = router;
