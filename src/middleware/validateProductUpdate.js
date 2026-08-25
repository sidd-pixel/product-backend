const validateProductUpdate=(req,res,next)=>{
    const {name,price}=req.body;

    if(name===undefined && price===undefined){
        return res.status(400).json({
            message:"At least one of name or price is required"
        })
    }
    if(name!==undefined && typeof name!=='string'){
        return res.status(400).json({message:"Product name must be a string"});
    }
    if(price!==undefined && typeof price!=='number' ){
        return res.status(400).json({message:"Product price must be a number"});
    }
    if(price!==undefined && price<=0){
        return res.status(400).json({message:"Product price must be greater than 0"});
    }
    next();
}

export default validateProductUpdate;