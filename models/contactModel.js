import mongoose, {models } from "mongoose";

const contactSchema = mongoose.Schema(
{
      name: {
        type: String,
        required: [true, "Name is required."],
        trim: true,
        minLength: [3, "Name must be larger than 3 characters"],
        maxLength: [50, "Name must be lesser than 50 characters"],
      },
    
      email: {
        type: String,
        required: [true, "Email is required."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
      },
    
      message: {
        type: String,
        required: [true, "Message is required."],
      },
    
      date: {
        type: Date,
        default: Date.now,
      }
}
);

const Contact = models.Contact || mongoose.model("Contact", contactSchema);
export default Contact;