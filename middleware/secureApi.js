let secureApi = (req, res, next) => {

    if (req.headers.authorization == "nizXYkXAi2nYvW2") {
        next()
    }
    else{
        res.send("Authorization failed ")
    }
    // console.log("it is middleware");
    // next();
};

module.exports = secureApi;