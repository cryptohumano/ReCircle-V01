const mongoose = require('mongoose');

const recycledProductSchema = new mongoose.Schema({
  productType: {
    type: String,
    enum: ['electronic', 'textile'],
    required: true
  },
  productDetails: {
    name: String,
    description: String,
    brand: String,
    condition: String,
    imageUrl: String
  },
  userAddress: {
    type: String,
    required: true
  },
  nftId: {
    type: String,
    unique: true
  },
  rewardTokens: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('RecycledProduct', recycledProductSchema); 