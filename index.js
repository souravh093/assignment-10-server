const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());

const port = process.env.PORT || 5000;

const chefInfo = require("./data/chef-info.json")

app.get("/", (req, res) => {
    res.send("This is my chef server home page")
})

app.get("/chefinfo", (req, res) => {
    res.send(chefInfo)
})

app.get("/chefinfo/:id", (req, res) => {
    const id = req.params.id;
    const selectedId = chefInfo.find(chef => chef.id === parseFloat(id))
    res.send(selectedId)
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})