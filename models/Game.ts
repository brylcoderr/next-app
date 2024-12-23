import mongoose from "mongoose"

const GameSchema = new mongoose.Schema({
  gameUrl: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: false,
  },
  gameName: {
    type: String,
    required: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
})

export default mongoose.models.Game || mongoose.model("Game", GameSchema)
