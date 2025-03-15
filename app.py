from flask import Flask, request, jsonify, Response
from typing import Dict, List, TypedDict, Optional

app = Flask(__name__)

# Type definitions
class IPCSection(TypedDict):
    title: str
    definition: str 
    punishment: str
    elements: List[str]

class ProblemPattern(TypedDict):
    keywords: List[str]
    section: str

def format_legal_response(section: IPCSection, section_number: str) -> str:
    return f"""<strong>Section {section_number}: {section['title']}</strong>

<strong>Description:</strong>
{section['definition']}

<strong>Key Elements Required:</strong>
{chr(10).join('&bull; ' + element for element in section['elements'])}

<strong>Punishment:</strong>
{section['punishment']}

<strong>Victim Guidance:</strong>
1. File a First Information Report (FIR) at the nearest police station immediately
2. Document all evidence and maintain records of the incident
3. Seek medical attention if needed and preserve medical reports
4. Consider getting legal representation
5. Keep track of all police and legal proceedings

<strong>Important Documents Required:</strong>
&bull; Valid ID proof (Aadhar/PAN/Voter ID)
&bull; Detailed written complaint
&bull; Medical reports (if applicable)
&bull; Photographs/videos of evidence
&bull; List of witnesses (if any)

<strong>Emergency Contacts:</strong>
&bull; Police Emergency: 100
&bull; Women Helpline: 1091
&bull; Legal Services Authority: 1516
&bull; Ambulance: 108
&bull; Child Helpline: 1098
&bull; Senior Citizen Helpline: 14567"""

def format_court_info_response(query: str) -> str:
    if "timing" in query.lower() or "hours" in query.lower():
        return """⏰ **Court Operating Hours:**

**Regular Working Hours:**
• Monday to Friday: 10:00 AM to 5:00 PM
• Filing Counter: 10:30 AM to 4:30 PM
• Lunch Break: 1:00 PM to 2:00 PM
• Saturday/Sunday: Closed (except special hearings)

**Special Timings:**
• Vacation Court: 10:30 AM to 1:30 PM
• Urgent Matters: As per court directions
• Virtual Hearings: As scheduled by court

Note: Timings may vary during summer/winter or due to special circumstances."""

    # Add more court info response formats as needed...

def generate_legal_response(query: str) -> str:
    lowercase_query = query.lower()

    # Check for explicit section numbers
    import re
    section_match = re.search(r'\b(\d{3}[A-Z]?)\b', query)
    if section_match and section_match.group(1) in ipc_sections:
        section = section_match.group(1)
        return format_legal_response(ipc_sections[section], section)

    # Check for court information queries
    if "court" in lowercase_query:
        if any(term in lowercase_query for term in ["time", "hour", "timing", "working"]):
            return format_court_info_response(query)

    # Analyze problem patterns
    for pattern in problem_patterns:
        if any(keyword in lowercase_query for keyword in pattern["keywords"]):
            section = pattern["section"]
            return f"""🔍 **Legal Analysis of Your Situation:**

Based on your description, this appears to be related to {ipc_sections[section]['title']} (Section {section}).

{format_legal_response(ipc_sections[section], section)}

📌 **Additional Recommendations:**
• Document the entire incident in writing
• Take photographs/videos if applicable
• Gather contact information of witnesses
• Keep all communication records
• Consider filing a police complaint immediately

⚡ **Legal Timeline:**
1. File police complaint (FIR/NCR)
2. Follow up with investigating officer
3. Maintain evidence documentation
4. Consider legal representation
5. Prepare for legal proceedings

Remember: Time is crucial in legal matters. Act promptly to protect your rights."""

    # If no specific match found
    return """❓ **Need More Information:**

Please provide more details to help us better assist you:

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
• Cyber Crime: 1930"""

@app.route('/api/legal-assist', methods=['POST'])
def legal_assist():
    try:
        data = request.get_json()
        query = data.get('query', '')
        response = generate_legal_response(query)
        return jsonify({'response': response})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@app.route('/')
def home():
    return """
    <!DOCTYPE html>
    <html>
        <head>
            <title>Legal Assistant</title>
            <meta charset="utf-8">
            <style>
                body { 
                    font-family: Arial, sans-serif;
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                }
                #query {
                    width: 100%;
                    padding: 10px;
                    margin: 10px 0;
                }
                #response {
                    white-space: pre-wrap;
                    margin-top: 20px;
                    padding: 15px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    background: #f9f9f9;
                    line-height: 1.6;
                }
                #response strong {
                    display: block;
                    margin-top: 15px;
                    color: #000;
                    font-size: 1.1em;
                }
                button {
                    padding: 10px 20px;
                    background: #007bff;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                }
                button:hover {
                    background: #0056b3;
                }
            </style>
        </head>
        <body>
            <h1>Legal Assistant</h1>
            <form id="queryForm">
                <textarea id="query" rows="4" placeholder="Enter your legal query..."></textarea><br>
                <button type="submit">Submit</button>
            </form>
            <div id="response"></div>

            <script>
                document.getElementById('queryForm').onsubmit = async (e) => {
                    e.preventDefault();
                    const query = document.getElementById('query').value;
                    const response = await fetch('/api/legal-assist', {
                        method: 'POST',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({query})
                    });
                    const data = await response.json();
                    document.getElementById('response').innerHTML = data.response;
                };
            </script>
        </body>
    </html>
    """

# Example IPC section
ipc_sections: Dict[str, IPCSection] = {
    "302": {
        "title": "Murder",
        "definition": "Whoever causes death with the intention of causing death, or causes such bodily injury that is likely to cause death.",
        "punishment": "Death or imprisonment for life, and shall also be liable to fine",
        "elements": [
            "Intention to cause death",
            "Act of causing death",
            "Causation between act and death",
            "Death of the person"
        ]
    }
}

problem_patterns: List[ProblemPattern] = [
    {
        "keywords": ["murder", "killed", "death", "died", "killing"],
        "section": "302"
    }
]

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)