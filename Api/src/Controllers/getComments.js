const Comment = require('../models/Comment');


const getComments = async(req, res) =>{

  try {
    const comments = await Comment.findAll()

    res.status(200).json(comments)
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message)
  }
}

module.exports = getComments;