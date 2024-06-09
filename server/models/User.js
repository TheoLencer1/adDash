import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
	{
        Names: {
        firstName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
        middleName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },

        lastName: {
            type: String,
            required: true,
            min: 2,
            max: 50,
        },
    },
        Age: {
            type: String,
            required: true,
        },
        PhoneNumber: String,
        Email: {
            type:String,
            required: true,
            max: 50,
            unique: true
        },
        Occupation: String,
        Location: {
            country: String,
            Region: String,
            Town: String,
            Area: String,
        },
        Church: {
            Country: String,
            Region: String,
            City: String,
            ChurchName: String,
            Role: String,
            Ministry: Array,
        },
        Job: {
            JobName: String,
            Role: String
        },

	},
	{ timestamps: true }
);

const User = mongoose.model("User", UserSchema);
export default User;