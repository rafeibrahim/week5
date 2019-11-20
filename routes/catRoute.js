'use strict';

const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({dest: './uploads/'});
const catController = require('../controllers/catController');


router.get('/', catController.cat_list_get);
  
router.get('/:id', (req, res) => {
    res.send('you requested a cat whose is id ' + req.params.id + ' get request');
  });
  
  router.post('/imageUpload', upload.single('catImage'), catController.upload_cat);

  
 router.put('/', (req, res) => {
    res.send('put request reached');
  });
  
 router.delete('/', (req, res) => {
    res.send('delete request reached');
  });

  module.exports = router;

 