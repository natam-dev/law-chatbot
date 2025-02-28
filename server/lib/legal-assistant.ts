type LegalTopic = {
  keywords: string[];
  response: string;
};

// IPC Sections Database
const ipcSections = {
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
  },
  "498A": {
    title: "Matrimonial Cruelty",
    definition: "Husband or relative of husband subjecting wife to cruelty.",
    punishment: "Imprisonment up to 3 years and fine",
    elements: [
      "Mental or physical cruelty",
      "Harassment for dowry",
      "Conduct likely to drive to suicide",
      "Grave injury or danger to life/limb"
    ]
  }
};

const legalTopics: LegalTopic[] = [
  {
    keywords: ["420", "cheating", "fraud", "dishonest", "property", "money", "scam"],
    response: `IPC Section 420 - Cheating and Fraud:

1. Legal Definition:
${ipcSections["420"].definition}

2. Essential Elements:
${ipcSections["420"].elements.map(e => "- " + e).join("\n")}

3. Punishment:
${ipcSections["420"].punishment}

4. Steps You Can Take:
- File a written complaint at local police station
- Gather all documentary evidence (transactions, communications)
- File FIR under Section 420 IPC
- Consider filing case in consumer forum if applicable
- Seek legal counsel for civil recovery

5. Important Tips:
- Maintain record of all transactions
- Save all communication with accused
- Get witness statements if available
- Document financial losses
- Consider mediation before legal action

For immediate assistance:
- Police Control Room: 100
- Cyber Crime Helpline: 1930
- Legal Services Authority: 1516`
  },
  {
    keywords: ["division", "department", "doj", "ministry", "organization", "structure"],
    response: `Department of Justice (DoJ) - Organization and Functions:

1. Organizational Structure:
- Headed by Secretary of Justice
- Part of Ministry of Law & Justice
- Reports to Union Law Minister

2. Key Divisions:
a) Legal Affairs Division
   - Policy formulation
   - Legal reforms
   - Legislative drafting

b) Judicial Appointments Division
   - Supreme Court appointments
   - High Court appointments
   - Service conditions

c) Infrastructure Development Division
   - Court building projects
   - Modernization schemes
   - Facility management

d) eCourts Project Division
   - Court computerization
   - Digital initiatives
   - Online services

e) Access to Justice Division
   - Legal aid programs
   - Public awareness
   - Special court projects

3. Main Functions:
- Development of Judiciary Infrastructure
- Implementation of eCourts Project
- Fast Track Special Courts management
- Legal aid and justice access
- Judicial appointments
- Training programs

4. Current Initiatives:
- eCourts Phase III
- Fast Track Special Courts
- Gram Nyayalayas
- National Mission for Justice Delivery

For more information:
Visit: www.doj.gov.in
Email: contact@doj.gov.in`
  },
  {
    keywords: ["consumer", "product", "defective", "refund", "warranty", "goods", "service", "shop", "purchase", "buy"],
    response: `Under the Consumer Protection Act, 2019:
1. Your Rights as a Consumer:
- Right to receive refunds for defective products
- Protection against unfair trade practices
- Right to file complaints in consumer courts
- Right to seek compensation for damages

2. How to File a Complaint:
- Contact the seller/service provider first
- Approach consumer forum in your district
- File online complaint at www.consumerhelpline.gov.in

For immediate assistance:
- National Consumer Helpline: 1800-11-4000
- Online grievance filing: www.consumerhelpline.gov.in`
  },
  {
    keywords: ["rent", "tenant", "landlord", "lease", "property", "house", "apartment", "deposit", "eviction", "accommodation"],
    response: `Rental Laws in India - Key Points:

1. Tenancy Agreements:
- Must be in writing and registered
- Should specify rent, deposit, and duration
- Must list maintenance responsibilities

2. Your Rights as a Tenant:
- Right to peaceful possession
- Right to basic amenities (water, electricity)
- Protection against unfair eviction

3. Security Deposit:
- Usually 2-3 months' rent in most cities
- Must be returned upon vacating
- Deductions must be justified

For disputes, contact your local Rent Control Authority or seek legal counsel.`
  },
  {
    keywords: ["work", "job", "salary", "employment", "workplace", "office", "compensation", "leave", "working", "employer"],
    response: `Employment Law Essentials:

1. Working Hours & Wages:
- Maximum 48 hours per week
- Overtime payment for extra hours
- Minimum wage varies by state/sector

2. Leave Entitlements:
- 12 days casual leave annually
- 15 days sick leave
- Maternity leave: 26 weeks

3. Workplace Rights:
- Safe working environment
- Protection against harassment
- Equal pay for equal work
- Right to join unions

For workplace issues:
- Labour Commissioner's Office
- Labour Helpline: 14567`
  },
  {
    keywords: ["marriage", "divorce", "alimony", "custody", "matrimonial", "spouse", "child", "maintenance", "dowry"],
    response: `Family Law Guidelines:

1. Marriage:
- Registration is mandatory
- Legal age: 21 (male), 18 (female)
- Inter-religious marriages under Special Marriage Act

2. Divorce Rights:
- Mutual consent divorce
- Contested divorce grounds
- Mandatory 6-month cooling period

3. Child Custody:
- Best interest of child paramount
- Joint or sole custody possible
- Visitation rights for non-custodial parent

4. Maintenance/Alimony:
- Based on income and needs
- Monthly or lump-sum payment
- Tax implications vary

Contact family court counselors for guidance.`
  },
  {
    keywords: ["criminal", "fir", "police", "arrest", "bail", "crime", "theft", "assault", "section", "ipc"],
    response: `Criminal Law Information:

1. Filing an FIR:
- Right to file at any police station
- Get a signed copy of FIR
- Can file online FIR for certain crimes

2. Arrest Rights:
- Right to know grounds of arrest
- Right to legal representation
- Right to medical examination
- Women can't be arrested at night

3. Bail Provisions:
- Regular bail
- Anticipatory bail
- Rights during police custody

Important Contacts:
- Police Emergency: 100
- Women Helpline: 1091
- Crime Stoppers: 1090`
  },
  {
    keywords: ["judge", "appointment", "vacancy", "supreme", "high court", "district court", "judicial"],
    response: `Judicial Appointments & Vacancies:

1. Supreme Court:
- Sanctioned strength of judges
- Current working strength
- Appointment process through Collegium System
- Constitutional provisions under Article 124

2. High Courts:
- State-wise sanctioned positions
- Current vacancies
- Appointment procedure
- Qualification requirements

3. District & Subordinate Courts:
- State-wise judicial positions
- Recruitment process
- Eligibility criteria
- Current vacancy status

Note: For exact current numbers, please visit: https://njdg.ecourts.gov.in/`
  },
  {
    keywords: ["case", "pending", "njdg", "data", "grid", "pendency", "status", "court"],
    response: `National Judicial Data Grid (NJDG) Information:

1. Case Pendency:
- Access real-time pendency data
- View court-wise statistics
- Track case-type distribution
- Monitor disposal rates

2. How to Check:
- Visit https://njdg.ecourts.gov.in/
- Select court type (Supreme/High/District)
- View dashboard for statistics
- Search specific case status

3. Available Information:
- Total pending cases
- Age-wise case categorization
- Court-wise distribution
- Monthly disposal rates

For real-time updates, please check NJDG portal directly.`
  },
  {
    keywords: ["traffic", "challan", "fine", "violation", "payment", "penalty"],
    response: `Traffic Violation Fine Payment Process:

1. Online Payment Methods:
- Visit www.ecourts.gov.in/ecourts_home
- Use eChallan payment portal
- Pay through payment gateway
- Download payment receipt

2. Required Information:
- Challan number
- Vehicle registration
- Violation details
- Fine amount

3. Alternative Payment Options:
- Visit nearest traffic police station
- Use eCourts Services Mobile App
- Pay at authorized banks
- Use state-specific traffic apps

Keep your challan receipt safe for future reference.`
  },
  {
    keywords: ["stream", "live", "court", "hearing", "online", "watch"],
    response: `Live Streaming of Court Cases:

1. Access Live Streams:
- Visit Supreme Court website
- Check High Courts' dedicated portals
- Use official YouTube channels
- Follow court social media

2. Available Streams:
- Constitutional matters
- Public interest cases
- Special bench hearings
- Important judgments

3. Guidelines:
- Streaming subject to court permission
- Not all cases are streamed
- Recording usually prohibited
- Follow viewing protocols

Check court websites for streaming schedules.`
  },
  {
    keywords: ["file", "efile", "epay", "electronic", "online", "submission"],
    response: `eFiling and ePay Services:

1. eFiling Steps:
- Register on efiling.ecourts.gov.in
- Upload required documents
- Pay court fees online
- Track filing status

2. Document Requirements:
- Scanned documents in PDF
- Digital signatures
- Supporting evidence
- Proper indexing

3. ePay Features:
- Court fee payment
- Fine payment
- Online transactions
- Receipt generation

For assistance:
- Helpline: 1800-XXX-XXX
- Email: support@ecourts.gov.in`
  },
  {
    keywords: ["fast track", "special court", "pocso", "rape", "quick"],
    response: `Fast Track Courts Information:

1. Types of Cases Handled:
- POCSO Act cases
- Sexual assault cases
- Heinous crimes
- Priority matters

2. Special Features:
- Expedited procedures
- Dedicated judges
- Daily hearings
- Quick disposal

3. How to Approach:
- Through public prosecutor
- Via legal aid services
- Direct petition
- Through advocate

For specific case status, contact your district court.`
  },
  {
    keywords: ["app", "mobile", "ecourt", "download", "service"],
    response: `eCourts Services Mobile App Guide:

1. Download Instructions:
- Available on Google Play Store
- iOS App Store version
- Official website download
- QR code access

2. Features:
- Case status tracking
- Cause list view
- Court orders access
- Calendar management

3. Usage Guide:
- Register with mobile number
- Link your cases
- Set up notifications
- Access documents

Download from: play.google.com/store/apps/details?id=ecourts.gov.in`
  }
];

// Enhanced response generation with problem analysis
export function generateLegalResponse(query: string): string {
  const lowercaseQuery = query.toLowerCase();

  // Check for IPC section numbers in query
  const sectionMatch = query.match(/\b(\d{3}[A-Z]?)\b/);
  if (sectionMatch && ipcSections[sectionMatch[1]]) {
    const section = sectionMatch[1];
    return `IPC Section ${section} Analysis:

1. Legal Definition:
${ipcSections[section].definition}

2. Essential Elements:
${ipcSections[section].elements.map(e => "- " + e).join("\n")}

3. Punishment:
${ipcSections[section].punishment}

4. Legal Recourse:
- File police complaint
- Gather evidence
- Seek legal representation
- Consider alternative dispute resolution
- Approach appropriate court

5. Required Documentation:
- Written complaint
- Supporting evidence
- Witness statements
- Financial records (if applicable)
- Medical records (if applicable)

For specific legal advice, please consult a qualified lawyer.`;
  }

  // Find most relevant topic based on keyword matches
  let bestMatch: LegalTopic | null = null;
  let maxMatches = 0;

  for (const topic of legalTopics) {
    const matches = topic.keywords.filter(keyword =>
      lowercaseQuery.includes(keyword.toLowerCase())
    ).length;

    if (matches > maxMatches) {
      maxMatches = matches;
      bestMatch = topic;
    }
  }

  if (bestMatch && maxMatches > 0) {
    return bestMatch.response;
  }

  return `Welcome to DoJ Legal Assistant!

1. How I Can Help:
- Explain IPC sections and legal procedures
- Provide information about DoJ services
- Guide you through legal processes
- Connect you with appropriate resources

2. Available Information:
- IPC Section definitions
- Legal procedures
- DoJ departments
- Court services
- Filing procedures

3. To Get Specific Help:
- Mention specific IPC section numbers
- Describe your legal situation
- Ask about specific DoJ services
- Inquire about court procedures

4. Important Resources:
- Police Emergency: 100
- Legal Services: 1516
- Women Helpline: 1091
- Child Helpline: 1098
- Consumer Helpline: 1800-11-4000`;
}