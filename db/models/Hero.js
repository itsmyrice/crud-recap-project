import mongoose from "mongoose";
const { Schema } = mongoose;

const heroSchema = new Schema(
  {
    rank: { type: String, required: true },
    heroName: { type: String, required: true },
    alias: { type: String, required: true },
    realName: { type: String, required: true },
    powers: { type: Array, required: true },
    imgURL: { type: String, required: true },
  },
  {
    collection: "heroes",
  }
);

const Hero = mongoose.models.Hero || mongoose.model("Hero", heroSchema);

export default Hero;
