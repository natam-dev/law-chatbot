import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertMessageSchema } from "@shared/schema";
import { getLegalResponse } from "./lib/openai";

export async function registerRoutes(app: Express): Promise<Server> {
  app.get("/api/messages", async (_req, res) => {
    const messages = await storage.getMessages();
    res.json(messages);
  });

  app.post("/api/messages", async (req, res) => {
    try {
      const userMessage = insertMessageSchema.parse({
        content: req.body.content,
        isUser: true
      });
      
      await storage.createMessage(userMessage);
      
      const aiResponse = await getLegalResponse(req.body.content);
      const assistantMessage = insertMessageSchema.parse({
        content: aiResponse,
        isUser: false
      });
      
      const response = await storage.createMessage(assistantMessage);
      res.json(response);
    } catch (error) {
      res.status(400).json({ message: "Invalid request" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
