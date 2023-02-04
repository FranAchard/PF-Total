const getProductDB = async(req,res)=>{
    const {query} = req.query
    try {
        const products = await product.findAll();
        if(query){
            const search = products.filter((p)=>p.model.toUpperCase().includes(query.toUpperCase()))
                
            res.status(200).send(search)
        }else{
            res.status(200).send(products)
        }       
    } catch (error) {
        res.status(400).send({error: error.message})
    }
}

module.exports = getProductDB;