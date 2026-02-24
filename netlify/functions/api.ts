import serverless from "serverless-http";
import { createServer } from "../../server";

const app = createServer();

const serverlessHandler = serverless(app, {
  request(req: any, event: any) {
    // Ensure the full original path is used (not the function-stripped path)
    if (event.path) {
      req.url = event.path + (event.rawQuery ? `?${event.rawQuery}` : "");
    }
  },
});

export const handler = async (event: any, context: any) => {
  // Handle CORS preflight
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type, Authorization",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      },
      body: "",
    };
  }

  return serverlessHandler(event, context);
};
