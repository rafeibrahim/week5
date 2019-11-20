'use strict';
// catController


const catModel = require('../models/catModel');

const cats = catModel.cats;

const cat_list_get = (req, res) => {
  res.json(cats);
};

const upload_cat = (req, res) =>{
    console.log('upload_cat function is running');
    console.log(req.file);
    //console.log(req.body);
};
   
module.exports = {
  cat_list_get,
  upload_cat
};