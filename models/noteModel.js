import mongoose, { models } from "mongoose";

const noteSchema = mongoose.Schema(
{
        title: {
            type: String,
            required: [true, 'please provide your title'],
          },
        description: {
            type: String,
            required: [true, 'please provide your description'],
          },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "userModel",
            required: [true, 'user must be required'],
        }
},{ 
    timestamps: true 
}
);

const Note = models.Note || mongoose.model("Note", noteSchema);
export default Note;