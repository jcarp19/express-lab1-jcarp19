// require the Express module
import express from "express";
import routes from "../routes/routing"

// creates an instance of an Express server
const app = express();

// defines the port
const port = 3000;

// run the server
app.listen(port, () => {
    console.log(`listening on port ${port}.`)
})



app.use(express.json());
app.use(routes);
