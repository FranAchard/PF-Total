const Comment = require('../models/Comment');


const getComments = async(req, res) =>{
  const id = req.params.id
  console.log(id, "esto llega por body")
  try {
    const comments = await Comment.findAll({
      where :{
        product : id,
        visible : true
      }
    })
    console.log(comments)
    res.status(200).send(comments)
  } catch (error) {
    console.log(error)
    res.status(400).send(error.message)
  }
}

module.exports = getComments;