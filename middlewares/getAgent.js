// user-agent : req headers 
module.exports = (req, res, next)=> {
    req.myName = 'yazan';
    req.browser =  req.headers['user-agent'];
    next();
}