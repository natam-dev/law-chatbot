import { pgTable, text, serial, timestamp, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// Messages table for chat history
export const messages = pgTable("messages", {
  id: serial("id").primaryKey(),
  content: text("content").notNull(),
  isUser: boolean("is_user").notNull(),
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});

// Legal sections table
export const legalSections = pgTable("legal_sections", {
  id: serial("id").primaryKey(),
  sectionNumber: text("section_number").notNull(),
  title: text("title").notNull(),
  description: text("description").notNull(),
  punishment: text("punishment").notNull(),
  victimGuidance: text("victim_guidance").notNull(),
  keywords: text("keywords").array().notNull(),
  category: text("category").notNull(), // criminal, civil, etc.
  timestamp: timestamp("timestamp").notNull().defaultNow(),
});

// Court information table
export const courtInfo = pgTable("court_info", {
  id: serial("id").primaryKey(),
  courtName: text("court_name").notNull(),
  category: text("category").notNull(), // operating_hours, contact_info, etc.
  information: jsonb("information").notNull(),
  lastUpdated: timestamp("last_updated").notNull().defaultNow(),
});

// Schema for inserting messages
export const insertMessageSchema = createInsertSchema(messages).pick({
  content: true,
  isUser: true,
});

// Schema for inserting legal sections
export const insertLegalSectionSchema = createInsertSchema(legalSections).omit({
  id: true,
  timestamp: true,
});

// Schema for inserting court information
export const insertCourtInfoSchema = createInsertSchema(courtInfo).omit({
  id: true,
  lastUpdated: true,
});

// Types for frontend usage
export type InsertMessage = z.infer<typeof insertMessageSchema>;
export type Message = typeof messages.$inferSelect;
export type LegalSection = typeof legalSections.$inferSelect;
export type CourtInformation = typeof courtInfo.$inferSelect;

// Zod schema for validating legal queries
export const legalQuerySchema = z.object({
  queryType: z.enum(['SECTION_QUERY', 'SITUATION_QUERY', 'COURT_INFO_QUERY']),
  content: z.string(),
  keywords: z.array(z.string()).optional(),
});

export type LegalQuery = z.infer<typeof legalQuerySchema>;