import express from 'express';
import { json } from 'body-parser';

const app = express();
app.use(json());
// yo

app.get("/", (req, res) => {
    res.send("this shit works");
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
});