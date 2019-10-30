import express from "express";

let app = express();

app.all('/', handleIndex);

function handleIndex(req: express.Request, res: express.Response, next: express.NextFunction) {
    let { query } = req,
        queryStr = JSON.stringify(query);

    res.send(`<p>hello!</p><p>your ip: ${req.ip}</p><p>query: ${queryStr}</p>`);
}

app.listen(80, '0.0.0.0', () => {
    console.log(
        "App running at http://%s:%d in %s mode",
        app.get('ip'),
        app.get("port"),
    );
    console.log("  Press CTRL-C to stop\n");
});