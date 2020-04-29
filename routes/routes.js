module.exports = function (app) {
    app.get("/get-song/:title", (req, res) => {        
        // console.log(req.name)
        res.status(200).send(req.params.title);
    })
}