import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { getLegalResponse } from "./lib/openai";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/messages", async (_req, res) => {
    try {
      const messages = await storage.getMessages();
      res.json(messages);
    } catch (error) {
      console.error("Error fetching messages:", error);
      res.status(500).json({ message: "Failed to fetch messages" });
    }
  });

  app.post("/api/messages", async (req, res) => {
    try {
      const userMessage = insertMessageSchema.parse({
        content: req.body.content,
        isUser: true
      });

      const savedUserMessage = await storage.createMessage(userMessage);

      try {
        const aiResponse = await getLegalResponse(req.body.content);
        const assistantMessage = insertMessageSchema.parse({
          content: aiResponse,
          isUser: false
        });

        const savedAssistantMessage = await storage.createMessage(assistantMessage);
        res.json(savedAssistantMessage);
      } catch (aiError: any) {
        // If OpenAI fails, send a user-friendly error but still save the user's message
        console.error("OpenAI API error:", aiError);
        const errorMessage = aiError.status === 429 
          ? "The AI assistant is currently unavailable due to high demand. Please try again later."
          : "The AI assistant encountered an error. Please try again.";

        res.status(503).json({ 
          message: errorMessage,
          userMessageSaved: savedUserMessage 
        });
      }
    } catch (error) {
      console.error("Route error:", error);
      res.status(400).json({ message: "Invalid request format" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}