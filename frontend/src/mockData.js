//  src/mockData.js
// 1. Import your local images at the top of the file
import postImage1 from './assets/images/post1.jpg';
import postImage2 from './assets/images/post2.jpg';
import reelImage1 from './assets/images/reel1.jpg';
import profilePicture from './assets/images/profile-pic.jpg';

export const influencerData = {
  profile: {
    name: "Ralph Edwards", // [cite: 62]
    username: "@ralph_edwards", // [cite: 14]
    profilePictureUrl: profilePicture, // [cite: 15] A sample image
    followers: 1250000, // [cite: 16]
    following: 500, // [cite: 17]
    postsCount: 350, // [cite: 18]
  },
  analytics: {
    engagementRate: 2.75, // [cite: 22]
    averageLikes: 25000, // [cite: 20]
    averageComments: 450, // [cite: 21]
  },
  posts: [
    {
      id: "post1",
      imageUrl: postImage1, // [cite: 25]
      caption: "Having a great time on my vacation! #travel #adventure", // [cite: 26]
      likes: 28000, // [cite: 27]
      comments: 520, // [cite: 28]
      analysis: {
        tags: ["travel", "adventure", "beach"], // [cite: 30]
        vibe: "energetic", // [cite: 31]
      },
    },
    {
      id: "post2",
      imageUrl: postImage2,
      caption: "Trying out this new aesthetic cafe downtown.",
      likes: 35000,
      comments: 680,
      analysis: {
        tags: ["food", "cafe", "aesthetic"],
        vibe: "aesthetic",
      },
    },
    // Add 8 more post objects to meet the "at least 10" requirement [cite: 24]
  ],
  reels: [
    {
      id: "reel1",
      thumbnailUrl: reelImage1, // [cite: 35]
      caption: "Quick recap of my weekend!", // [cite: 36]
      views: 1500000, // [cite: 37]
      likes: 85000, // [cite: 37]
      comments: 1200, // [cite: 37]
      analysis: {
        events: ["person dancing", "party", "city nightlife"], // [cite: 39]
        vibe: "party", // [cite: 40]
      },
    },
    // Add 4 more reel objects to meet the "at least 5" requirement [cite: 34]
  ],
};