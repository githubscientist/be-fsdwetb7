# Social Media Application - Socify

## Description

Socify is a social media application that allows users to share their thoughts, photos, and videos with their friends and family. Users can create an account, add friends, and post updates to their profile. They can also like and comment on their friends' posts, and send private messages to each other. Socify is a great way to stay connected with the people you care about, no matter where they are in the world.

## Features

- User authentication: Users can create an account, log in, and log out.
- Profile creation: Users can create a profile with their name, profile picture, and bio.
- Friend requests: Users can send and accept friend requests.
- Posts: Users can create posts with text, photos, and videos.
- Likes and comments: Users can like and comment on their friends' posts.
- Direct messages: Users can send private messages to each other.
- Notifications: Users receive notifications when they have new friend requests, messages, or likes on their posts.

## Collections

- Users
- Profiles
- Posts
- Comments
- Likes
- Friend Requests
- Messages
- Notifications

## Routes

Posts:

- GET /posts: Get all posts
- GET /posts/:id: Get a post by ID
- POST /posts: Create a new post
- PUT /posts/:id: Update a post by ID
- DELETE /posts/:id: Delete a post by ID

### What is mongoose?

Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.

### Post Schema

```
Post:
    - Title: String
    - Content: String
    - Author: User
    - Comments: [Comment]
    - Likes: [User]
    - CreatedAt: Date
    - UpdatedAt: Date
```

Example:

```
{
    title: "Hello, World!",
    content: "This is my first post on Socify.",
}
```

```
{
    title: "The Best Day Ever!",
    content: "I had so much fun today with my friends.",    
}
```
