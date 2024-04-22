const app = require("express")();

app.get("/", (req, res)=>{
    res.send("Teste")
})

app.listen(3000);
