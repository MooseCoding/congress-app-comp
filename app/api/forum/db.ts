import { DB } from "https://deno.land/x/sqlite/mod.ts";
import { hash as hashPromise, compare as comparePromise, genSaltSync } from "https://deno.land/x/bcrypt/mod.ts";
export const cDB = new DB('community_database.db');

export function init_db() {
    const createTables = `
    CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL,
    email TEXT,
    phone TEXT
);

CREATE TABLE IF NOT EXISTS posts (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id INTE2GER,
    title TEXT,
    content TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE IF NOT EXISTS comments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    post_id INTEGER,
    user_id INTEGER,
    content TEXT,
    create_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (post_id) REFERENCES posts(id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);`;

cDB.execute(createTables); 
}

export async function createPost(postData: { title: string, content: string, userId: number }): Promise<number> {
    const query = `
      INSERT INTO posts (title, content, user_id, created_at) 
      VALUES (?, ?, ?, CURRENT_TIMESTAMP)
    `;
    try {
      const result = await cDB.query(query, [postData.title, postData.content, postData.userId]);
      return result.lastInsertId as number; // Return the ID of the newly created post
    } catch (error) {
      console.error('Error creating post:', error);
      throw new Error('Failed to create post');
    }
  }
  
  // Get all posts
  export async function getPosts(): Promise<any[]> {
    const query = `
      SELECT posts.id, posts.title, posts.content, users.username, posts.created_at 
      FROM posts 
      JOIN users ON posts.user_id = users.id
      ORDER BY posts.created_at DESC
    `;
    try {
      const posts = await cDB.query(query);
      return posts;
    } catch (error) {
      console.error('Error fetching posts:', error);
      throw new Error('Failed to fetch posts');
    }
  }
  
  // Add a new comment to a post
  export async function addComment(commentData: { postId: number, content: string, userId: number }): Promise<number> {
    const query = `
      INSERT INTO comments (post_id, content, user_id, created_at) 
      VALUES (?, ?, ?, CURRENT_TIMESTAMP)
    `;
    try {
      const result = await cDB.query(query, [commentData.postId, commentData.content, commentData.userId]);
      return result.lastInsertId as number; // Return the ID of the newly created comment
    } catch (error) {
      console.error('Error adding comment:', error);
      throw new Error('Failed to add comment');
    }
  }
  
  // Get all comments for a specific post
  export async function getComments(postId: number): Promise<any[]> {
    const query = `
      SELECT comments.id, comments.content, users.username, comments.created_at 
      FROM comments 
      JOIN users ON comments.user_id = users.id 
      WHERE comments.post_id = ?
      ORDER BY comments.created_at ASC
    `;
    try {
      const comments = await cDB.query(query, [postId]);
      return comments;
    } catch (error) {
      console.error('Error fetching comments:', error);
      throw new Error('Failed to fetch comments');
    }
  }

  export async function isAuthenticated(req: Request): Promise<boolean> {
    const authHeader = req.headers.get('Authorization');
    if (!authHeader) return false;
    
    // Assume token-based authentication
    const token = authHeader.split(' ')[1];
    if (!token) return false;
    
    // Validate the token (you might need to integrate a real token validation mechanism)
    // For example, verify with JWT or session store
    return validateToken(token);  // Replace this with your actual token validation function
  }
  
  function validateToken(token: string): boolean {
    // Validate the token here, e.g., decode a JWT or check it in your session store
    return token === "valid_token";  // Placeholder validation logic
  }

  export async function signUp(userData: { username: string, password: string, email?: string, phone?: string }) {
    const salt = genSaltSync(10);  // Generate a salt for hashing
    const hashedPassword = await hashPromise(userData.password, salt); // Hash the password
  
    const query = `
      INSERT INTO users (username, password, email, phone)
      VALUES (?, ?, ?, ?)
    `;
  
    try {
      await cDB.query(query, [userData.username, hashedPassword, userData.email, userData.phone]);
      return { message: "User created successfully" };
    } catch (error) {
      console.error('Error creating user:', error);
      throw new Error('Failed to sign up');
    }
  }
  
  // SignIn function to authenticate a user
  export async function signIn(username: string, password: string): Promise<boolean> {
    const query = `
      SELECT password FROM users WHERE username = ?
    `;
  
    try {
      const [user] = await cDB.query(query, [username]);
      if (!user) {
        throw new Error('User not found');
      }
  
      const hashedPassword = user[0]; // Get the stored hashed password
  
      // Compare the provided password with the hashed password
      const isPasswordValid = await comparePromise(password, hashedPassword);
      
      if (isPasswordValid) {
        return true; // Password is correct, authentication successful
      } else {
        throw new Error('Invalid password');
      }
    } catch (error) {
      console.error('Error during sign-in:', error);
      throw new Error('Failed to sign in');
    }
  }
  
  // Utility function to create a token (using JWT)
  function createToken(payload: { userId: number }): string {
    // Replace with your actual JWT creation logic
    return "valid_token"; // This is just a placeholder. Use a real token library like `jsonwebtoken` in production.
  }