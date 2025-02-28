type LegalTopic = {
  keywords: string[];
  response: string;
};

const legalTopics: LegalTopic[] = [
  {
    keywords: ["consumer", "product", "defective", "refund", "warranty"],
    response: `Under the Consumer Protection Act, 1986, you have the following rights:
- Right to receive a refund for defective products
- Right to file a complaint against unfair trade practices
- Right to consumer education and awareness
Please consult a legal professional for specific advice about your situation.`
  },
  {
    keywords: ["rent", "tenant", "landlord", "lease", "property"],
    response: `Regarding rental laws in India:
- Rent agreements should be in writing and registered
- Security deposit limits vary by state
- Notice periods are typically 1-3 months
- Landlords must maintain essential services
For specific rental disputes, please consult a local housing authority or lawyer.`
  },
  {
    keywords: ["work", "job", "salary", "employment", "workplace"],
    response: `Under Indian Labor Laws:
- Maximum work hours: 48 hours per week
- Minimum wage varies by state and sector
- Equal pay for equal work is mandatory
- Protection against workplace harassment
For specific employment issues, please consult your HR department or a labor lawyer.`
  },
  {
    keywords: ["marriage", "divorce", "custody", "alimony"],
    response: `Regarding Family Law in India:
- Marriage registration is mandatory
- Divorce can be filed under various grounds
- Child custody decisions prioritize child welfare
- Maintenance/alimony depends on multiple factors
Please consult a family court lawyer for specific advice.`
  }
];

const defaultResponse = `I can provide general information about Indian law, but I recommend consulting a qualified legal professional for specific advice. Common legal resources in India include:
- Legal Services Authorities
- Consumer Courts
- Local Bar Associations
- Police Help Line (100)
- Women Help Line (1091)`;

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
