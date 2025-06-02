import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  walletAddress: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  recyclingPoints: {
    type: Number,
    default: 0,
  },
  nfts: [{
    tokenId: Number,
    tokenURI: String,
    mintedAt: Date,
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model('User', userSchema); 