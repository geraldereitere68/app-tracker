/* 
    File: sophisticated_code.js
    Description: This code demonstrates a sophisticated implementation of a social media dashboard.
*/

// Class for creating posts
class Post {
  constructor(author, content, timestamp) {
    this.author = author;
    this.content = content;
    this.timestamp = timestamp;
  }

  displayPost() {
    console.log(`${this.author} posted on ${this.timestamp}: ${this.content}`);
  }
}

// Class for creating social media profiles
class UserProfile {
  constructor(username, fullName, joinDate) {
    this.username = username;
    this.fullName = fullName;
    this.joinDate = joinDate;
    this.posts = [];
  }

  createPost(content) {
    const timestamp = new Date().toLocaleString();
    const post = new Post(this.username, content, timestamp);
    this.posts.push(post);
    console.log(`${this.username} posted on ${timestamp}: ${content}`);
  }

  displayPosts() {
    console.log(`Posts by ${this.username}:`);
    this.posts.forEach((post) => post.displayPost());
  }
}

// Class for creating a social media dashboard
class SocialMediaDashboard {
  constructor() {
    this.users = [];
  }

  addUserProfile(username, fullName) {
    const joinDate = new Date().toLocaleDateString();
    const userProfile = new UserProfile(username, fullName, joinDate);
    this.users.push(userProfile);
    console.log(`${username} (${fullName}) joined on ${joinDate}`);
  }

  displayUserProfiles() {
    console.log("User Profiles:");
    this.users.forEach((user) =>
      console.log(user.username, '-', user.fullName)
    );
  }
}

// Usage example
const dashboard = new SocialMediaDashboard();
dashboard.addUserProfile("john_doe", "John Doe");
dashboard.addUserProfile("jane_smith", "Jane Smith");

const johnPosts = [
  "Hello world!",
  "Just had a great day at the beach.",
  "Excited for the new movie release!",
];
const janePosts = [
   "Testing out the new social media dashboard.",
   "Had an amazing dinner with friends.",
   "Looking forward to the weekend.",
];

johnPosts.forEach((post) => dashboard.users[0].createPost(post));
janePosts.forEach((post) => dashboard.users[1].createPost(post));

dashboard.displayUserProfiles();
dashboard.users[0].displayPosts();
dashboard.users[1].displayPosts();