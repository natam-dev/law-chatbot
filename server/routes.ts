import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { generateLegalResponse } from "./lib/legal-assistant";

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

      // Use our local legal assistant instead of OpenAI
      const response = generateLegalResponse(req.body.content);
      const assistantMessage = insertMessageSchema.parse({
        content: response,
        isUser: false
      });

      const savedAssistantMessage = await storage.createMessage(assistantMessage);
      res.json(savedAssistantMessage);
    } catch (error) {
      console.error("Route error:", error);
      res.status(400).json({ message: "Invalid request format" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}