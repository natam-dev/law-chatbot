import { messages, type Message, type InsertMessage, 
         legalSections, type LegalSection, type InsertLegalSection,
         courtInfo, type CourtInformation, type InsertCourtInfo } from "@shared/schema";

export interface IStorage {
  // Message methods
  getMessages(): Promise<Message[]>;
  createMessage(message: InsertMessage): Promise<Message>;

  // Legal section methods
  getLegalSections(): Promise<LegalSection[]>;
  getLegalSectionByNumber(sectionNumber: string): Promise<LegalSection | null>;
  createLegalSection(section: InsertLegalSection): Promise<LegalSection>;
  searchLegalSections(keywords: string[]): Promise<LegalSection[]>;

  // Court information methods
  getCourtInfo(): Promise<CourtInformation[]>;
  getCourtInfoByCategory(category: string): Promise<CourtInformation[]>;
  createCourtInfo(info: InsertCourtInfo): Promise<CourtInformation>;
}

export class MemStorage implements IStorage {
  private messages: Map<number, Message>;
  private legalSections: Map<number, LegalSection>;
  private courtInformation: Map<number, CourtInformation>;
  private currentIds: {
    messages: number;
    legalSections: number;
    courtInfo: number;
  };

  constructor() {
    this.messages = new Map();
    this.legalSections = new Map();
    this.courtInformation = new Map();
    this.currentIds = {
      messages: 1,
      legalSections: 1,
      courtInfo: 1
    };
  }

  // Message methods
  async getMessages(): Promise<Message[]> {
    return Array.from(this.messages.values()).sort((a, b) => 
      a.timestamp.getTime() - b.timestamp.getTime()
    );
  }

  async createMessage(insertMessage: InsertMessage): Promise<Message> {
    const id = this.currentIds.messages++;
    const message: Message = {
      ...insertMessage,
      id,
      timestamp: new Date(),
    };
    this.messages.set(id, message);
    return message;
  }

  // Legal section methods
  async getLegalSections(): Promise<LegalSection[]> {
    return Array.from(this.legalSections.values());
  }

  async getLegalSectionByNumber(sectionNumber: string): Promise<LegalSection | null> {
    const sections = Array.from(this.legalSections.values());
    return sections.find(section => section.sectionNumber === sectionNumber) || null;
  }

  async createLegalSection(section: InsertLegalSection): Promise<LegalSection> {
    const id = this.currentIds.legalSections++;
    const legalSection: LegalSection = {
      ...section,
      id,
      timestamp: new Date(),
    };
    this.legalSections.set(id, legalSection);
    return legalSection;
  }

  async searchLegalSections(keywords: string[]): Promise<LegalSection[]> {
    const sections = Array.from(this.legalSections.values());
    return sections.filter(section => 
      keywords.some(keyword => 
        section.keywords.includes(keyword.toLowerCase()) ||
        section.title.toLowerCase().includes(keyword.toLowerCase()) ||
        section.description.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  }

  // Court information methods
  async getCourtInfo(): Promise<CourtInformation[]> {
    return Array.from(this.courtInformation.values());
  }

  async getCourtInfoByCategory(category: string): Promise<CourtInformation[]> {
    const info = Array.from(this.courtInformation.values());
    return info.filter(item => item.category === category);
  }

  async createCourtInfo(info: InsertCourtInfo): Promise<CourtInformation> {
    const id = this.currentIds.courtInfo++;
    const courtInfo: CourtInformation = {
      ...info,
      id,
      lastUpdated: new Date(),
    };
    this.courtInformation.set(id, courtInfo);
    return courtInfo;
  }
}

export const storage = new MemStorage();