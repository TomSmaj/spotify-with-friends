module.exports = function (app) {
    app.get("/get-song", (req, res) => {
        console.log("get request reached");
        // console.log(req.name)
        res.status(200);
    })
}