import jwt from 'jsonwebtoken';

export default function (req,res,next){
  const token = req.header("Authorization");
  if(!token){
    res.status(400).json({message:"Access denied"})
  }
  try {
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
  req.user = {
    _id : decoded.userId
  }
  next()
  } catch (error) {
    res.status(401).json({message:"Not Authorized"})
    
  }
}