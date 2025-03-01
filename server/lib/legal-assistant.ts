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

  if (query.toLowerCase().includes("judge") || query.toLowerCase().includes("vacancy")) {
    return `**Current Judicial Appointments and Vacancies:**

**Supreme Court:**
• Sanctioned Strength: 34 judges
• Current Working Strength: 28 judges
• Vacancies: 6 positions

**High Courts:**
• Total Sanctioned Strength: 1108 judges
• Current Working Strength: 776 judges
• Vacancies: 332 positions

**District & Subordinate Courts:**
• Total Sanctioned Strength: 24,631 judges
• Current Working Strength: 19,292 judges
• Vacancies: 5,339 positions

**Note:** Numbers are approximate and subject to change. Visit https://main.sci.gov.in for current data.`;
  }

  if (query.toLowerCase().includes("traffic") || query.toLowerCase().includes("fine")) {
    return `**Traffic Fine Payment Process:**

**Online Payment Methods:**
• Visit the e-Challan website: https://echallan.parivahan.gov.in
• Use payment gateways on state police websites
• Use mobile apps like mParivahan

**Steps for Payment:**
1. Enter challan/vehicle number
2. Verify violation details
3. Select payment mode
4. Complete payment
5. Save payment receipt

**Alternative Methods:**
• Visit nearest traffic police station
• Pay at authorized banks
• Use citizen service centers

**Important Notes:**
• Keep payment receipt safe
• Check for any pending challans
• Update vehicle documents`;
  }

  if (query.toLowerCase().includes("live") || query.toLowerCase().includes("streaming")) {
    return `**Live Streaming of Court Cases:**

**Access Methods:**
• Supreme Court website: https://webcast.gov.in/scindia/
• YouTube Channel: Supreme Court of India
• NIC Webcast Portal

**Available Proceedings:**
• Constitutional Bench matters
• Cases of national importance
• Select PIL hearings
• Special reference cases

**Viewing Guidelines:**
• Check daily cause list for streamed cases
• Follow court etiquette while viewing
• Do not record/share streams
• Check technical requirements beforehand`;
  }

  if (query.toLowerCase().includes("efile") || query.toLowerCase().includes("epay")) {
    return `**eFiling and ePay Information:**

**eFiling Steps:**
1. Register on https://efiling.ecourts.gov.in
2. Upload case documents
3. Pay court fees online
4. Submit for scrutiny
5. Track filing status

**Required Documents:**
• Digital signature (Class 2/3)
• Scanned documents (PDF)
• Properly indexed annexures
• Party details

**ePay Facilities:**
• Court fees
• Fine payment
• Judicial deposits
• Process fees

**Help Resources:**
• eFiling tutorial videos
• 24x7 helpdesk: 1800-XXXXXX
• Email support: support@ecourts.gov.in`;
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

function formatDoJDivisionsResponse(): string {
  return `**Various Divisions of Department of Justice (DoJ):**

**1. Legal Affairs Division:**
• Legislative drafting and legal advice
• International legal cooperation
• Legal education and research
• Constitutional and administrative law matters

**2. Judicial Division:**
• Appointment of judges
• Court administration
• Judicial reforms
• Infrastructure development

**3. Access to Justice Division:**
• Legal aid programs
• Fast track courts
• Gram Nyayalayas
• Alternative dispute resolution

**4. e-Courts Mission Mode Project:**
• Court computerization
• Digital infrastructure
• Case management systems
• Online services development

**5. National Mission for Justice Delivery:**
• Reducing case pendency
• Improving justice delivery
• Policy reforms
• Capacity building`;
}

function formatPendencyCasesResponse(): string {
  return `**Current Case Pendency (NJDG Data):**

**Supreme Court:**
• Total Pending Cases: 69,598
• Cases Pending > 5 years: 14,092
• Cases Filed Last Month: 6,844
• Cases Disposed Last Month: 5,584

**High Courts:**
• Total Pending Cases: 59.5 lakh
• Cases Pending > 5 years: 24.2 lakh
• Cases Filed Last Month: 3.8 lakh
• Cases Disposed Last Month: 3.2 lakh

**District Courts:**
• Total Pending Cases: 4.2 crore
• Cases Pending > 5 years: 1.1 crore
• Cases Filed Last Month: 15.2 lakh
• Cases Disposed Last Month: 12.8 lakh

**Note:** Data as of March 2025. Visit https://njdg.ecourts.gov.in for real-time statistics.`;
}

function formatFastTrackCourtsResponse(): string {
  return `**Working of Fast Track Courts:**

**Purpose & Jurisdiction:**
• Speedy disposal of pending cases
• Focus on specific case categories
• Special emphasis on POCSO cases
• Women-centric crime cases

**Current Status:**
• Total Operational FTCs: 1,023
• Cases Disposed: 9.2 lakh
• Average Disposal Time: 8-12 months
• Success Rate: 73%

**Priority Cases:**
• Sexual offenses against women/children
• Cases involving senior citizens
• Cases pending for >5 years
• Economic offenses

**Operational Framework:**
• Dedicated judicial officers
• Streamlined procedures
• Daily hearings
• Limited adjournments

**Benefits:**
• Faster justice delivery
• Reduced pendency
• Increased conviction rate
• Better victim support`;
}

function formatECourtsAppResponse(): string {
  return `**eCourts Services Mobile App Guide:**

**Download Instructions:**
• Android: Play Store - Search "e-Courts Services"
• iOS: App Store - Search "e-Courts Services"
• Direct Links:
  - Android: https://play.google.com/store/apps/details?id=ecourts.gov.in.ecourts_services
  - iOS: https://apps.apple.com/in/app/e-courts-services/id1324701714

**Features Available:**
• Case Status tracking
• Cause List viewing
• Court Orders/Judgments
• Calendar of cases
• QR Code scanner for cases

**Setup Process:**
1. Download and install the app
2. Accept permissions
3. Select preferred language
4. Register/Login if needed

**Usage Tips:**
• Save important cases
• Enable notifications
• Download judgments offline
• Share case details`;
}

function formatTeleLawResponse(): string {
  return `**Availing Tele Law Services:**

**Access Methods:**
• Visit Common Service Centers (CSCs)
• Call Toll-Free: 1516
• Online Portal: www.tele-law.in
• Mobile App: Tele-Law

**Available Services:**
• Free legal advice
• Document review
• Rights awareness
• Procedure guidance

**Process Steps:**
1. Register at nearest CSC/Portal
2. Schedule consultation
3. Connect with legal expert
4. Receive advice/guidance
5. Follow-up if needed

**Service Coverage:**
• Civil matters
• Criminal cases
• Family disputes
• Property issues
• Consumer rights

**Benefits:**
• Free service for eligible citizens
• Expert legal guidance
• Reduced travel needs
• Quick resolution
• Multiple language support`;
}

function formatCaseStatusResponse(): string {
  return `**Checking Current Case Status:**

**Online Methods:**
• Visit: https://ecourts.gov.in
• Use eCourts mobile app
• NJDG portal access

**Search Options:**
• CNR number
• Case number
• Party name
• Advocate name
• FIR number

**Steps to Check:**
1. Select court complex
2. Enter case details
3. Verify captcha
4. View status

**Available Information:**
• Next hearing date
• Case stage
• Orders/Judgments
• Case history
• Daily proceedings

**Important Tips:**
• Keep CNR number handy
• Check regularly
• Enable notifications
• Save important updates`;
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

  // Check for specific legal system queries
  if (lowercaseQuery.includes("judge") ||
    lowercaseQuery.includes("vacancy") ||
    lowercaseQuery.includes("traffic") ||
    lowercaseQuery.includes("fine") ||
    lowercaseQuery.includes("live") ||
    lowercaseQuery.includes("streaming") ||
    lowercaseQuery.includes("efile") ||
    lowercaseQuery.includes("epay")) {
    return formatCourtInfoResponse(query);
  }

  // Check for DoJ and court services related queries
  if (lowercaseQuery.includes("division") || lowercaseQuery.includes("doj")) {
    return formatDoJDivisionsResponse();
  }

  if (lowercaseQuery.includes("pendency") || lowercaseQuery.includes("njdg")) {
    return formatPendencyCasesResponse();
  }

  if (lowercaseQuery.includes("fast track")) {
    return formatFastTrackCourtsResponse();
  }

  if (lowercaseQuery.includes("app") || lowercaseQuery.includes("download")) {
    return formatECourtsAppResponse();
  }

  if (lowercaseQuery.includes("tele") || lowercaseQuery.includes("telelaw")) {
    return formatTeleLawResponse();
  }

  if (lowercaseQuery.includes("status") || lowercaseQuery.includes("track")) {
    return formatCaseStatusResponse();
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