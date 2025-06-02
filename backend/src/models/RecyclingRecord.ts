import mongoose from 'mongoose';

const recyclingRecordSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  materialType: {
    type: String,
    required: true,
    enum: ['plastic', 'paper', 'glass', 'metal', 'electronic'],
  },
  weight: {
    type: Number,
    required: true,
  },
  points: {
    type: Number,
    required: true,
  },
  nftMinted: {
    type: Boolean,
    default: false,
  },
  nftTokenId: {
    type: Number,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const RecyclingRecord = mongoose.model('RecyclingRecord', recyclingRecordSchema); 