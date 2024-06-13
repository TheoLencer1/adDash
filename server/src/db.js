import mongoose from "mongoose";

const dbConnection = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		});
		console.log("MongoDB is connected successfully");
	} catch (error) {
		console.log({ message: error.message });
	}
};


export default dbConnection;
