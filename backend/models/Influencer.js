const mongoose = require('mongoose');

// Define the schema for the nested analysis objects
const AnalysisSchema = new mongoose.Schema({
  tags: [String],
  vibe: String,
  quality: {
    lighting: Number,
    visualAppeal: Number,
  },
  events: [String],
});

// Define the schema for posts and reels
const PostSchema = new mongoose.Schema({
  id: String,
  imageUrl: String,
  caption: String,
  likes: Number,
  comments: Number,
  analysis: AnalysisSchema,
});

const ReelSchema = new mongoose.Schema({
  id: String,
  thumbnailUrl: String,
  videoUrl: String,
  caption: String,
  views: Number,
  likes: Number,
  comments: Number,
  analysis: AnalysisSchema,
});

// Define the main influencer schema
const InfluencerSchema = new mongoose.Schema({
  profile: {
    name: String,
    username: {
      type: String,
      required: true,
      unique: true,
    },
    profilePictureUrl: String,
    followers: Number,
    following: Number,
    postsCount: Number,
    // --- THIS IS THE CORRECTLY ADDED SECTION ---
    bioDetails: {
      country: String,
      age: Number,
      maritalStatus: String,
      occupation: String,
      team: String,
      bio: String,
    }
  },
  analytics: {
    audienceDemographics: {
      genderSplit: { male: Number, female: Number },
      ageGroups: {
        '13-17': Number,
        '18-24': Number,
        '25-34': Number,
        '35+': Number,
      },
      geography: Map,
    },
  },
  posts: [PostSchema],
  reels: [ReelSchema],
}, { timestamps: true });

const Influencer = mongoose.model('Influencer', InfluencerSchema);

module.exports = Influencer;


