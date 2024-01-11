import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import router from "./routes/routes.js";
import cors from "cors";

const app = express();

dotenv.config();
app.use(cors());

app.use(express.json());

/* app.use(express.urlencoded({ extended: true })); */

app.use('/api/products', router);

app.get("/", (req, res) => {
    res.send("Hola Mundo");
});

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

// app.listen(PORT, () => {
//     connectDB(MONGO_URI);
//     console.log("¡MongoDB Connected!");
//     console.log(`Server running on http://localhost:${PORT}`);
// });

const start = async () => {
    try{
        await connectDB(MONGO_URI);
        console.log("¡MongoDB Connected!");
        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch(error){
        console.log(error);
    }
}

start();