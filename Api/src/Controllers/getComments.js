const Comment = require('../models/Comment');


const getComments = async(req, res) =>{
  const {product} = req.body
  try {
    const comments = await Comment.findAll({
      where :{
        product : product,
        visible : true
      }
    })
    res.status(200).send(comments)
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message)
  }
}

module.exports = getComments;