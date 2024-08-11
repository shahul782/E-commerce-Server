
//  const productModel = require('../Modal/ProductModal')
const ProductModel = require('../Modal/ProductModal')

exports.getProducts= async (req,res,next)=>{

 const query = req.query.keyword ? {name:{
    $regex:req.query.keyword,
    $options:"i"
  }}:{}

     const product = await ProductModel.find(query)

    res.json({
        success:true,
        product
    })

}

exports.getSingleProducts= async (req,res,next)=>{
          console.log(req.params.id +"id")

          try {
            const product = await ProductModel.findById(req.params.id)
            res.json({
                success:true,
                product
            })
            
          } catch (error) {
            res.status(404), json({
                success:true,
                message:error.message
            })
            
          }


     
     

}