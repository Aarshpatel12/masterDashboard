import jwt from "jsonwebtoken"

exports.verifyToken = (req,res,next) => {
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({message:"Access denied"});
    }
    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();

    }catch(err){
        res.status(400).json({message:"Invalid token"});
    }
};

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Unauthorized role" });
    }
    next();
  };
}