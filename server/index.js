import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import helmet from "helmet";
import morgan from "morgan";
import User from "./models/User.js";
import dbConnection from "./src/db.js";

/* CONFIGURATION */
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

/* MONGOOSE SETUP */

const PORT = process.env.PORT;

const PostSchema = mongoose.Schema({
	title: String,
	body: String,
});

const PostModel = mongoose.model("posts", PostSchema);


dbConnection();

//* ROUTES

app.get("/", (req, res) => {
	res.send(`We're live Bro!`);
});


app.get("/posts", (req, res, next) => {
	PostModel.find({})
		.then((post) => {
			res.status(200).json({ post });
		})
		.catch((error) => {
			res.status(404).json({ error: error });
		});
});

app.get("/users", async (req, res) => {
	try {
		const users = await User.find({});
		res.status(200).json({ users });
	} catch (error) {
		res.status(404).json({ error: error });
	}
});


app.listen(PORT, () => {
	console.log(`Server is started on PORT: ${PORT}`);
});
