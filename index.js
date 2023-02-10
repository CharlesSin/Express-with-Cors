import express from "express";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(cors());

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
