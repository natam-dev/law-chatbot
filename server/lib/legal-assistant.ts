type LegalTopic = {
  keywords: string[];
  response: string;
};

// IPC Sections Database
const ipcSections = {
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
  "406": {
    title: "Criminal Breach of Trust",
    definition: "Whoever dishonestly misappropriates or converts to their own use any movable property entrusted to them.",
    punishment: "Imprisonment up to 3 years, or fine, or both",
    elements: [
      "Entrustment of property",
      "Dishonest misappropriation",
      "Conversion to own use",
      "Breach of trust"
    ]
  }
};

// Common problem patterns and their corresponding IPC sections
const problemPatterns = [
  {
    keywords: ["stolen", "theft", "steal", "took", "missing", "robbed", "snatched", "pickpocket"],
    section: "378"
  },
  {
    keywords: ["cheated", "fraud", "scam", "deceived", "fake", "duped", "forged"],
    section: "420"
  },
  {
    keywords: ["trust", "misappropriate", "entrusted", "custody", "kept"],
    section: "406"
  }
];

// Enhanced response generation with problem analysis
export function generateLegalResponse(query: string): string {
  const lowercaseQuery = query.toLowerCase();

  // Check for explicit IPC section numbers
  const sectionMatch = query.match(/\b(\d{3}[A-Z]?)\b/);

  // Check for problem patterns
  for (const pattern of problemPatterns) {
    if (pattern.keywords.some(keyword => lowercaseQuery.includes(keyword))) {
      const section = pattern.section;
      if (ipcSections[section]) {
        return `Based on your query, this appears to be a case under IPC Section ${section} (${ipcSections[section].title}).

Legal Definition: ${ipcSections[section].definition}

Key Elements Required:
${ipcSections[section].elements.map(e => "• " + e).join("\n")}

Punishment: ${ipcSections[section].punishment}

Recommended Steps:
1. File a police complaint with all details and evidence
2. Obtain a copy of the FIR for your records
3. Keep all relevant documents and proof safely
4. Consider seeking legal representation
5. Follow up with investigating officer regularly

For immediate assistance:
• Police Emergency: 100
• Legal Services: 1516
• Cyber Crime Helpline: 1930`;
      }
    }
  }

  // Check for explicit section numbers after pattern matching
  if (sectionMatch && ipcSections[sectionMatch[1]]) {
    const section = sectionMatch[1];
    return `Information about IPC Section ${section} (${ipcSections[section].title}):

Legal Definition: ${ipcSections[section].definition}

Key Elements Required:
${ipcSections[section].elements.map(e => "• " + e).join("\n")}

Punishment: ${ipcSections[section].punishment}

Legal Process:
1. File a detailed police complaint
2. Collect and preserve all evidence
3. Get witness statements if available
4. Consider legal representation
5. Follow proper legal procedures

For guidance:
• Police Emergency: 100
• Legal Services: 1516`;
  }

  // If no specific legal match is found
  return `I apologize, but I couldn't find specific legal information matching your query. Please try:
• Using specific IPC section numbers
• Describing the incident more clearly
• Mentioning key legal terms
• Asking about specific DoJ services`;
}