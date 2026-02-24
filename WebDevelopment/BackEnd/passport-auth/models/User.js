import mongoose from "mongoose";
import findOrCreate from "mongoose-findorcreate";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  googleId: String,
});

userSchema.plugin(findOrCreate);

export default mongoose.model("User", userSchema);
