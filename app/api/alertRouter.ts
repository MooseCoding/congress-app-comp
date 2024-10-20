import { serve } from "https://deno.land/std/http/server.ts";
import { allAlerts, clearExpiredAlerts } from './db/grab_data.ts'; // Adjust to point to correct file
import { fetchAndSaveAlerts } from './db/alerts.ts';
import { createPost, getPosts, addComment, getComments, isAuthenticated, signUp, signIn } from './forum/db.ts'; 

const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);
  const { pathname } = url;

  console.log('current log requested: ', pathname); 

  // Handle CORS for preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  }

  // Alerts API
  if (pathname === "/api/alerts") {
    try {
      const data = await allAlerts();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      });
    }
  }

  // Posts API
  if (pathname === "/api/posts" && req.method === "GET") {
    try {
      const posts = await getPosts();
      return new Response(JSON.stringify(posts), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }

  // Create a new post (Restricted Access)
  if (pathname === "/api/posts" && req.method === "POST") {
    if (!await isAuthenticated(req)) {
      return new Response(JSON.stringify({ error: "Authentication required" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }

    try {
      const postData = await req.json();
      const postId = await createPost(postData);
      return new Response(JSON.stringify({ postId }), {
        status: 201,
        headers: { "Content-Type": "application/json" }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }

  // Get comments for a post (Public Access)
  if (pathname.startsWith("/api/posts/") && pathname.endsWith("/comments") && req.method === "GET") {
    const postId = parseInt(pathname.split("/")[3], 10);
    try {
      const comments = await getComments(postId);
      return new Response(JSON.stringify(comments), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }

  // Add a comment (Restricted Access)
  if (pathname.startsWith("/api/posts/") && pathname.endsWith("/comments") && req.method === "POST") {
    if (!await isAuthenticated(req)) {
      return new Response(JSON.stringify({ error: "Authentication required" }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }

    try {
      const commentData = await req.json();
      const commentId = await addComment(commentData);
      return new Response(JSON.stringify({ commentId }), {
        status: 201,
        headers: { "Content-Type": "application/json" }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }

  // User sign-in (login)
  if (pathname === "/api/login" && req.method === "POST") {
    try {
      const { username, password } = await req.json();
      const { token } = await signIn(username, password); // Pass correct args for sign-in
      return new Response(JSON.stringify({ token }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 401,
        headers: { "Content-Type": "application/json" }
      });
    }
  }

  // User sign-up (register)
  if (pathname === "/api/signup" && req.method === "POST") {
    try {
      console.log('signup called'); 
      const { username, password } = await req.json();
      const { token } = await signUp(username, password); // Pass correct args for sign-up
      return new Response(JSON.stringify({ token }), {
        status: 201,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*"
        }
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
  }

  // Default 404 response
  return new Response("Not Found", {
    status: 404,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });
};

// Use the handler directly with serve
console.log("Deno server running on http://localhost:8000");
serve(handler, { port: 8000 });