import { type LegalSection } from "@shared/schema";

// Define strongly typed interfaces
interface IPCSection {
  title: string;
  definition: string;
  punishment: string;
  elements: string[];
}

interface ProblemPattern {
  keywords: string[];
  section: keyof typeof ipcSections;
}

// Type-safe IPC Sections Database
const ipcSections: Record<string, IPCSection> = {
  "302": {
    title: "Murder",
    definition: "Whoever causes death with the intention of causing death, or causes such bodily injury that is likely to cause death.",
    punishment: "Death or imprisonment for life, and shall also be liable to fine",
    elements: [
      "Intention to cause death",
      "Act of causing death",
      "Causation between act and death",
      "Death of the person"
    ]
  },
  "378": {
    title: "Theft",
    definition: "Whoever, intending to take dishonestly any movable property out of the possession of any person without that person's consent, moves that property.",
    punishment: "Imprisonment up to 3 years, or fine, or both",
    elements: [
      "Dishonest intention",
      "Taking movable property",
      "Without consent",
      "Moving the property"
    ]
  },
  "420": {
    title: "Cheating and dishonestly inducing delivery of property",
    definition: "Whoever cheats and thereby dishonestly induces the person deceived to deliver any property to any person, or to make, alter or destroy the whole or any part of a valuable security.",
    punishment: "Imprisonment up to 7 years and fine",
    elements: [
      "Deception or fraudulent behavior",
      "Dishonest intention",
      "Inducement to deliver property",
      "Actual delivery or alteration of property"
    ]
  },
  "376": {
    title: "Punishment for rape",
    definition: "Sexual assault without consent or with consent obtained under duress or false pretenses.",
    punishment: "Rigorous imprisonment not less than 10 years, may extend to life imprisonment, and fine",
    elements: [
      "Non-consensual sexual acts",
      "Use of force or threat",
      "Abuse of power or authority",
      "Victim's inability to consent"
    ]
  }
};

// Type-safe problem patterns
const problemPatterns: ProblemPattern[] = [
  {
    keywords: ["murder", "killed", "death", "died", "killing"],
    section: "302"
  },
  {
    keywords: ["stolen", "theft", "steal", "took", "missing", "robbed", "snatched"],
    section: "378"
  },
  {
    keywords: ["cheated", "fraud", "scam", "deceived", "fake", "duped"],
    section: "420"
  },
  {
    keywords: ["rape", "sexual assault", "forced", "molested"],
    section: "376"
  }
];

function formatLegalResponse(section: IPCSection, sectionNumber: string): string {
  return `Section ${sectionNumber}: ${section.title}

Description: ${section.definition}

Key Elements:
${section.elements.map(e => `• ${e}`).join('\n')}

Punishment: ${section.punishment}

Victim Guidance:
1. File a First Information Report (FIR) at the nearest police station immediately
2. Document all evidence and maintain records of the incident
3. Seek medical attention if needed and preserve medical reports
4. Consider getting legal representation
5. Keep track of all police and legal proceedings

Emergency Contacts:
• Police Emergency: 100
• Women Helpline: 1091
• Legal Services Authority: 1516
• Ambulance: 108`;
}

function formatCourtInfoResponse(query: string): string {
  if (query.toLowerCase().includes("timing") || query.toLowerCase().includes("hours")) {
    return `Court Operating Hours:

• Regular Court Hours: Monday to Friday, 10:00 AM to 5:00 PM
• Filing Counter: 10:30 AM to 4:30 PM
• Lunch Break: 1:00 PM to 2:00 PM
• Saturday/Sunday: Closed (except special hearings)

Note: Timings may vary during summer/winter or due to special circumstances. Please verify with the specific court.`;
  }

  return `General Court Information:

Operating Hours: Monday to Friday, 10:00 AM to 5:00 PM
Location: Visit district court websites for specific locations
Filing: Documents can be filed between 10:30 AM to 4:30 PM
Contact: Visit https://districts.ecourts.gov.in/ for specific court contact information

For more specific information, please mention the particular court or query type (timing/location/contact/filing).`;
}

export function generateLegalResponse(query: string): string {
  const lowercaseQuery = query.toLowerCase();

  // Check for explicit section numbers
  const sectionMatch = query.match(/\b(\d{3}[A-Z]?)\b/);
  if (sectionMatch && sectionMatch[1] in ipcSections) {
    const section = sectionMatch[1];
    return formatLegalResponse(ipcSections[section], section);
  }

  // Check for court information queries
  if (lowercaseQuery.includes("court") && 
      (lowercaseQuery.includes("time") || 
       lowercaseQuery.includes("hour") || 
       lowercaseQuery.includes("timing") ||
       lowercaseQuery.includes("working"))) {
    return formatCourtInfoResponse(query);
  }

  // Analyze problem patterns
  for (const pattern of problemPatterns) {
    if (pattern.keywords.some(keyword => lowercaseQuery.includes(keyword))) {
      const section = pattern.section;
      return `Based on your description, this appears to be related to ${ipcSections[section].title} (Section ${section}).

${formatLegalResponse(ipcSections[section], section)}

Additional Recommendations:
• File a police complaint as soon as possible
• Gather any evidence (photos, documents, witnesses)
• Keep a written record of the incident
• Consider getting legal representation
• Stay in touch with investigating officers`;
    }
  }

  // If no specific match found
  return `I apologize, but I couldn't identify a specific legal section matching your query. To better assist you, please:

1. Provide more details about the incident
2. Mention specific IPC sections if known
3. Use key terms describing the nature of the crime
4. Specify if you're looking for court information

For immediate assistance:
• Police Emergency: 100
• Legal Services: 1516
• Women's Helpline: 1091`;
}