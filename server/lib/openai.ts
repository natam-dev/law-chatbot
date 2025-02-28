import OpenAI from "openai";

// the newest OpenAI model is "gpt-4o" which was released May 13, 2024
const openai = new OpenAI({ 
  apiKey: process.env.OPENAI_API_KEY || "your-api-key"
});

const SYSTEM_PROMPT = `You are an expert Indian legal assistant. Provide clear, accurate legal information based on Indian law.
Focus on being helpful while noting that your responses are for informational purposes and not legal advice.
Format responses in a clear, structured way with appropriate headings and bullet points where relevant.`;

export async function getLegalResponse(query: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: query }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    return response.choices[0].message.content || "I apologize, I wasn't able to process that request.";
  } catch (error) {
    console.error("OpenAI API error:", error);
    throw new Error("Failed to get response from legal assistant");
  }
}
