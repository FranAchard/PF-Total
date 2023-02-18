const {Router} = require('express');
const router = Router();
const Comment = require('../models/Comment');

const addComment = async(req, res) =>{
  const {text, moderated, postedBy, productId} = req.body;

  if (!productId) {
    return res.status(400).send("Product ID is required");
  }

  try {
    let commentToAdd = await Comment.create({
      text,
      moderated,
      postedBy,
      product: productId,
      visible : true
    })
    res.status(200).send("Comment submitted successfully!");
  } catch (error) {
    console.log(error);
    res.status(400).send("Error creating the product.");
  }
}
module.exports = addComment