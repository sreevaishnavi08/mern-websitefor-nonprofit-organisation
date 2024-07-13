const jwt=require('jsonwebtoken')

function verifyToken(req,res,next){
    
    const bearerToken=req.headers.authorization 
    if(!bearerToken){
        return res.send({message:'Unauthorized access... Please login to continue'})
    }
    const token=bearerToken.split(' ')[1]
    try{
        jwt.verify(token,'abcdefgh')
        next()
    }
    catch(err){
        next(err)
    }
}

module.exports=verifyToken