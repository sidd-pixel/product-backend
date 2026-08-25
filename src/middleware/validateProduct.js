const validateProduct=(req,res,next)=>{
    const {name,price}=req.body;

    if(typeof price!=='number'){
        return res.status(400).json({message:"Product price must be a number"});
    }

    if(typeof name!=='string'){
        return res.status(400).json({message:"Product name must be a string"});
    }

    if(!name.trim()){
        return res.status(400).json({message:"Product name is required"});
    }


    if(price<=0){
        return res.status(400).json({message:"Product price cannot be negative"});
    }

    next();
}
export default validateProduct;