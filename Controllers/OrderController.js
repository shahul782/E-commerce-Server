

const orderModal = require('../Modal/OrderMOdel')
exports.CreateOrder = async (req,res,next)=>{
    console.log(req.body,'Data')
 const cartItems = req.body;

 const amount =  Number(cartItems.reduce((acc,item)=>(acc + item.product.price*item.qty),0)).toFixed(2)
 console.log(amount)
 const status='pending'
  const order =  await  orderModal.create({cartItems,amount,status})
         
    res.json({
        success:true,
        order
    })
}