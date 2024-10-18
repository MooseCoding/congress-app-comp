import { serve } from "https://deno.land/std/http/server.ts";
import { allAlerts, clearExpiredAlerts } from './db/grab_data.ts'; // Adjust to point to correct file
import { fetchAndSaveAlerts } from './db/alerts.ts';
import { signup } from './management/signin/signin_handlers.ts';

setInterval(fetchAndSaveAlerts, 600000);
setInterval(clearExpiredAlerts, 600000)

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

  if (pathname==='/api/users') {
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
      const uD = req.json(); 
      const data = await signup(uD.username, uD.password, uD.email, uD.phone);
      if (data === 0) {
        return new Response(data, {
          status: 200,
          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type"
          }
        });
      }
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
