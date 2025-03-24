const myExpress = require(`./myExpress`);

const app = myExpress();

app.get("/morning", function (req, res) {
    res.send({name: `Jay`})
})



app.listen(3000, () => {
    console.log(`Server is listening at http://localhost:3000`);
})