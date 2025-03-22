const miniExpress = require("./miniExpress");

const app = miniExpress();
const port = 3000

app.get("/", (req, res) => {
    res.status(200).send("Hello from MiniExpress!")
})

app.post("/data", (req, res) => {
    res.status(201).json({
        message: "Resource created successfully"
    })
});


app.sunoJI(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})




