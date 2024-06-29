/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 *
 * See the getting started guide for more information
 * https://ai.google.dev/gemini-api/docs/get-started/node
 */

const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY_COVER_LETTER;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.0-pro",
});

const generationConfig = {
  temperature: 0.9,
  topP: 1,
  topK: 0,
  maxOutputTokens: 1024,
  responseMimeType: "text/plain",
};

export async function Model(obj) {
  const {
    name,
    email,
    jobTitle,
    jobDescription,
    qualification,
    skills,
    companyName,
    companyWebsite,
  } = obj;
  const text =
    "Generate a cover letter - name:" +
    name +
    ", email:" +
    email +
    ",    jobTitle:" +
    jobTitle +
    ",    jobDescription:" +
    jobDescription +
    " qualification:" +
    qualification +
    "skills:" +
    skills +
    ", companyName:" +
    companyName +
    ",companyWebsite:" +
    companyWebsite;

  const chatSession = model.startChat({
    generationConfig,
    // safetySettings: Adjust safety settings
    // See https://ai.google.dev/gemini-api/docs/safety-settings
  });

  const result = await chatSession.sendMessage(text);
  return result;
}
