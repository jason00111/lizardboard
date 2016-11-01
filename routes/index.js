const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (request, response, next) => {
  response.render('index', { title: 'Lizardboard' });
});

module.exports = router;