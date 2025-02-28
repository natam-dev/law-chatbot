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
  }
];

const defaultResponse = `Here is some general legal guidance:

1. Basic Legal Rights:
- Right to legal representation
- Right to constitutional remedies
- Right to information

2. Available Resources:
- Legal Services Authorities
- District Courts
- Consumer Forums
- Police Help Line (100)
- Women Help Line (1091)

3. Important Tips:
- Keep written records of all legal matters
- Get proper receipts and documentation
- Consult qualified legal professionals for specific advice
- Don't sign documents without understanding them

For specific legal advice, please consult a qualified lawyer.`;

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