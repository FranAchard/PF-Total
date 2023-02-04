const Product = require("../models/product")


const getProductById = async (req, res) => {
    const id = req.params.id
    try {
        const product = await Product.findOne({
            where: {
                id: id
            }
        });
        
        res.status(200).send(product)
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}
module.exports =  getProductById;