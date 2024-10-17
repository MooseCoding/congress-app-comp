import { serve } from "https://deno.land/std/http/server.ts";
import { allAlerts } from './db/grab_data.ts'; // Adjust to point to correct file

const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);
  const { pathname } = url;

  if (pathname === "/api/alerts") {
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

    try {
      const data = await allAlerts();
      return new Response(JSON.stringify(data), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type"
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
