import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Using Gemini 2.5 Flash for speed and efficiency in a chat context
const MODEL_NAME = "gemini-2.5-flash";

const SYSTEM_INSTRUCTION = `
You are the AI Concierge for PrimeHomes, an ultra-luxury real estate agency.
Your tone is sophisticated, polite, professional, and concise.
You assist high-net-worth individuals in finding exclusive apartments, villas, and penthouses.
You emphasize quality, privacy, and elite lifestyle.
If asked about prices, assume a range of $2M to $50M USD.
Do not invent specific property listings, but describe the *types* of properties PrimeHomes offers (e.g., "Waterfront villas in Dubai", "Penthouses in NYC").
Keep responses under 100 words unless detailed analysis is requested.
`;

let client: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI | null => {
  if (client) return client;
  
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    console.warn("Gemini API Key is missing via process.env.API_KEY");
    return null;
  }
  
  client = new GoogleGenAI({ apiKey });
  return client;
};

export const sendMessageToConcierge = async (
  history: { role: 'user' | 'model'; text: string }[],
  newMessage: string
): Promise<string> => {
  const ai = getClient();
  if (!ai) {
    return "I apologize, but I am currently disconnected from the secure server. Please contact our support line directly.";
  }

  try {
    const chat = ai.chats.create({
      model: MODEL_NAME,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result: GenerateContentResponse = await chat.sendMessage({
      message: newMessage
    });

    return result.text || "I apologize, I could not process that request at this moment.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I am experiencing a temporary connection issue. Please try again shortly.";
  }
};
