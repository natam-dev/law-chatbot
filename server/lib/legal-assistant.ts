type LegalTopic = {
  keywords: string[];
  response: string;
};

const legalTopics: LegalTopic[] = [
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
    keywords: ["division", "department", "doj", "ministry", "organization", "structure"],
    response: `Department of Justice (DoJ) - Organizational Structure:

1. Main Divisions:
- Legal Affairs Division
- Judicial Appointments Division
- Infrastructure Development Division
- eCourts Project Division
- Access to Justice Division

2. Key Functions:
- Development of Judiciary Infrastructure
- Appointment of Judges
- Implementation of eCourts Project
- Management of Fast Track Special Courts
- Oversight of Legal Aid Programs

3. Leadership:
- Headed by the Secretary of Justice
- Part of Ministry of Law & Justice
- Works under direct supervision of Law Minister

For more details, visit the official DoJ website.`
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

const defaultResponse = `Welcome to the Department of Justice (DoJ) Assistant. I can help you with:

1. Available Services:
- Information about DoJ divisions
- Judicial appointments & vacancies
- Case status and pendency
- eFiling and ePay services
- Fast track courts
- Court case live streaming

2. How to Get Help:
- Type your query about any DoJ service
- Ask about specific procedures
- Request contact information
- Seek guidance on legal processes

3. Important Links:
- DoJ Website: www.doj.gov.in
- eCourts: www.ecourts.gov.in
- NJDG: njdg.ecourts.gov.in

For specific legal advice, please consult a qualified legal professional.`;

export function generateLegalResponse(query: string): string {
  const lowercaseQuery = query.toLowerCase();

  // Find the most relevant topic based on keyword matches
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

  return defaultResponse;
}