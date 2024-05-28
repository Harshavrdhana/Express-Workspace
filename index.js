import express from "express";
import router from "./routes/route.js";
const app = express();

app.set('view engine' , "ejs")//This will allows us to tell to expressjs that we are using our ejs engine
app.use('/', router)

app.listen(8000, () => console.log("Server Up!"));
