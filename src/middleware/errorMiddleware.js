const errorMiddleware=(err,req,res,next)=>{
    console.log(err);
    res.status(500).json({message:"Internal server error"});
};
export default errorMiddleware;