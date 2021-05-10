import ex from "express";
const app = ex();

const port = 8080
const __dirname = (await import("path")).resolve()

app.use("/public", ex.static('public'));

app.get('/', (req: ex.Request, res: ex.Response) => {
    res.sendFile(`${__dirname}/public/index.html`);
})

app.listen(port, ()=>{
    console.log(port)
})