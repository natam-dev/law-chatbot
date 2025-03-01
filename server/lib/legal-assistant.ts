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
  "304A": {
    title: "Causing death by negligence",
    definition: "Causing death of any person by doing any rash or negligent act not amounting to culpable homicide.",
    punishment: "Imprisonment up to 2 years, or fine, or both",
    elements: [
      "Death caused by negligent or rash act",
      "Absence of intention to cause death",
      "Causal connection between negligence and death",
      "Duty of care existed"
    ]
  },
  "354": {
    title: "Assault or criminal force to woman with intent to outrage her modesty",
    definition: "Assault or use of criminal force on any woman, intending to outrage or knowing it to be likely that modesty would be outraged.",
    punishment: "Imprisonment of 1 to 5 years, and fine",
    elements: [
      "Use of criminal force or assault",
      "Against a woman",
      "Intent to outrage modesty",
      "Actual or attempted physical contact"
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
  "379": {
    title: "Punishment for theft",
    definition: "Committing theft of any movable property.",
    punishment: "Imprisonment up to 3 years, or fine, or both",
    elements: [
      "Commission of theft",
      "Property was movable",
      "Dishonest intention",
      "Actual taking of property"
    ]
  },
  "392": {
    title: "Punishment for robbery",
    definition: "Theft with the use of force or attempt to cause death, hurt, or wrongful restraint.",
    punishment: "Rigorous imprisonment up to 10 years and fine",
    elements: [
      "Commission of theft",
      "Use of force or threat",
      "Intent to carry away property",
      "Causing fear of harm"
    ]
  },
  "406": {
    title: "Criminal Breach of Trust",
    definition: "Dishonest misappropriation or conversion of property entrusted to a person.",
    punishment: "Imprisonment up to 3 years, or fine, or both",
    elements: [
      "Entrustment of property",
      "Dishonest misappropriation",
      "Breach of trust",
      "Conversion to own use"
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
  "499": {
    title: "Defamation",
    definition: "Making or publishing any imputation concerning any person, intending to harm their reputation.",
    punishment: "Simple imprisonment up to 2 years, or fine, or both",
    elements: [
      "Publication of statement",
      "Harm to reputation",
      "Intent to defame",
      "False statement of fact"
    ]
  },
  "503": {
    title: "Criminal Intimidation",
    definition: "Threatening another with injury to person, reputation or property to cause alarm or force illegal action.",
    punishment: "Imprisonment up to 2 years, or fine, or both",
    elements: [
      "Threat of injury",
      "Intent to cause alarm",
      "Compel illegal act",
      "Clear communication of threat"
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
    keywords: ["accident", "negligence", "careless", "rash driving"],
    section: "304A"
  },
  {
    keywords: ["molestation", "touch", "harassment", "eve teasing"],
    section: "354"
  },
  {
    keywords: ["rape", "sexual assault", "forced", "molested"],
    section: "376"
  },
  {
    keywords: ["stolen", "theft", "steal", "took", "missing"],
    section: "378"
  },
  {
    keywords: ["snatched", "pickpocket", "stole"],
    section: "379"
  },
  {
    keywords: ["robbery", "robbed", "looted", "dacoity"],
    section: "392"
  },
  {
    keywords: ["trust", "misappropriate", "entrusted"],
    section: "406"
  },
  {
    keywords: ["cheated", "fraud", "scam", "deceived", "fake"],
    section: "420"
  },
  {
    keywords: ["defame", "reputation", "character", "slander"],
    section: "499"
  },
  {
    keywords: ["threat", "intimidate", "threaten", "blackmail"],
    section: "503"
  }
];

function formatLegalResponse(section: IPCSection, sectionNumber: string): string {
  return `**Section ${sectionNumber}: ${section.title}**

**Description:**
${section.definition}

**Key Elements Required:**
${section.elements.map(e => `• ${e}`).join('\n')}

**Punishment:**
${section.punishment}

**Victim Guidance:**
1. File a First Information Report (FIR) at the nearest police station immediately
2. Document all evidence and maintain records of the incident
3. Seek medical attention if needed and preserve medical reports
4. Consider getting legal representation
5. Keep track of all police and legal proceedings

**Important Documents Required:**
• Valid ID proof (Aadhar/PAN/Voter ID)
• Detailed written complaint
• Medical reports (if applicable)
• Photographs/videos of evidence
• List of witnesses (if any)

**Emergency Contacts:**
• Police Emergency: 100
• Women Helpline: 1091
• Legal Services Authority: 1516
• Ambulance: 108
• Child Helpline: 1098
• Senior Citizen Helpline: 14567`;
}

function formatCourtInfoResponse(query: string): string {
  // Check for specific court information queries
  if (query.toLowerCase().includes("timing") || query.toLowerCase().includes("hours")) {
    return `**Court Operating Hours:**

**Regular Working Hours:**
• Monday to Friday: 10:00 AM to 5:00 PM
• Filing Counter: 10:30 AM to 4:30 PM
• Lunch Break: 1:00 PM to 2:00 PM
• Saturday/Sunday: Closed (except special hearings)

**Special Timings:**
• Vacation Court: 10:30 AM to 1:30 PM
• Urgent Matters: As per court directions
• Virtual Hearings: As scheduled by court

Note: Timings may vary during summer/winter or due to special circumstances.`;
  }

  if (query.toLowerCase().includes("file") || query.toLowerCase().includes("filing")) {
    return `**Court Filing Information:**

**Documents Required:**
• Properly formatted legal documents
• Requisite court fees
• Supporting evidence and annexures
• Valid ID proof
• Authorization letter (if filed through advocate)

**Filing Process:**
1. Document verification at filing counter
2. Payment of court fees
3. Assignment of case number
4. Initial hearing date allocation
5. Copy for party records

**Important Notes:**
• Maintain proper indexing and pagination
• Keep multiple copies as required
• Check court website for specific requirements
• Consider seeking legal assistance for proper filing`;
  }

  if (query.toLowerCase().includes("holiday") || query.toLowerCase().includes("vacation")) {
    return `**Court Holiday Information:**

**Regular Holidays:**
• All National Holidays
• Second and Fourth Saturdays
• Sundays
• State-specific holidays

**Vacation Periods:**
• Summer Vacation: Usually May-June
• Winter Vacation: Usually December-January
• Dussehra Break: Usually October
• Christmas Break: December 24-31

**Note:** Vacation benches are available for urgent matters during court vacations.`;
  }

  // Default court information
  return `**General Court Information:**

**Operating Hours:**
• Regular Hours: Monday to Friday, 10:00 AM to 5:00 PM
• Filing Counter: 10:30 AM to 4:30 PM

**Locations & Jurisdiction:**
• Supreme Court: New Delhi
• High Courts: State capitals
• District Courts: District headquarters
• Lower Courts: Taluka/Tehsil level

**Services Available:**
• Case filing and registration
• Document verification
• Certified copies
• Legal aid services
• Mediation centers

**Important Links:**
• e-Courts: https://ecourts.gov.in
• Supreme Court: https://main.sci.gov.in
• Legal Services: https://nalsa.gov.in

For specific information, please mention:
• Timing/working hours
• Filing procedures
• Holiday schedule
• Location details`;
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
  if (lowercaseQuery.includes("court")) {
    if (lowercaseQuery.includes("time") || 
        lowercaseQuery.includes("hour") || 
        lowercaseQuery.includes("timing") ||
        lowercaseQuery.includes("working")) {
      return formatCourtInfoResponse(query);
    }
    if (lowercaseQuery.includes("file") || 
        lowercaseQuery.includes("holiday") ||
        lowercaseQuery.includes("vacation")) {
      return formatCourtInfoResponse(query);
    }
  }

  // Analyze problem patterns
  for (const pattern of problemPatterns) {
    if (pattern.keywords.some(keyword => lowercaseQuery.includes(keyword))) {
      const section = pattern.section;
      return `**Legal Analysis of Your Situation:**

Based on your description, this appears to be related to ${ipcSections[section].title} (Section ${section}).

${formatLegalResponse(ipcSections[section], section)}

**Additional Recommendations:**
• Document the entire incident in writing
• Take photographs/videos if applicable
• Gather contact information of witnesses
• Keep all communication records
• Consider filing a police complaint immediately

**Legal Timeline:**
1. File police complaint (FIR/NCR)
2. Follow up with investigating officer
3. Maintain evidence documentation
4. Consider legal representation
5. Prepare for legal proceedings

Remember: Time is crucial in legal matters. Act promptly to protect your rights.`;
    }
  }

  // If no specific match found
  return `**Need More Information:**

I need more details to provide specific legal guidance. Please provide:

**Required Details:**
1. What exactly happened?
2. When did it occur?
3. Who was involved?
4. Where did it take place?
5. Any specific IPC section you're inquiring about?

**Helpful Tips:**
• Use specific legal terms if known
• Mention any police complaints filed
• Include timeline of events
• Specify the type of legal help needed

**Emergency Contacts:**
• Police Emergency: 100
• Legal Services: 1516
• Women's Helpline: 1091
• Cyber Crime: 1930`;
}