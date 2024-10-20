import { serve } from "https://deno.land/std/http/server.ts";

const handler = (req: Request): Response => {
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

  // Replace /api/alerts with /test
  if (req.url.endsWith("/test")) {
    return new Response(JSON.stringify({ message: "Test route is working!" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type"
      }
    });
  }

  return new Response("Not Found", {
    status: 404,
    headers: {
      "Access-Control-Allow-Origin": "*"
    }
  });
};

console.log("Deno server running on http://localhost:8000");
serve(handler, { port: 8000 });