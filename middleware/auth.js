module.exports = (req, res, next) => {
    if(req.body.username === "test" && req.body.password === "test1") {
        next();
    }
    else {
        res.send("Wrong username and password") 
    }
}