import mongoose, { models } from "mongoose";

const userSchema = mongoose.Schema(
{
        email: {
            type: String,
            required: [true, 'please provide your email'],
            unique: [true, 'email Must be unique'],
            trim: true,
            lowercase: true,
          },
        name: {
            type: String,
            required: [true, 'please provide your name']
          },
        password: {
            type: String,
        },
        image:{
            type: String,
        }
},{ 
    timestamps: true 
}
);

const User = models.User || mongoose.model("User", userSchema);
export default User;