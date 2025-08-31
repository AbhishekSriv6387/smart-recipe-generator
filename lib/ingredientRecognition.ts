// // lib/ingredientRecognition.ts
// import { GoogleGenerativeAI } from "@google/generative-ai";

// // const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
// const apiKey = process.env.GEMINI_API_KEY;


// if (!apiKey) {
//   throw new Error("❌ GEMINI_API_KEY is missing in .env file");
// }

// const genAI = new GoogleGenerativeAI(apiKey);
// const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

// /**
//  * Recognize ingredients from an uploaded image using Gemini
//  */
// export async function recognizeIngredients(file: File): Promise<string[]> {
//   try {
//     // Convert image to base64
//     const bytes = await file.arrayBuffer();
//     const buffer = Buffer.from(bytes);
//     const base64Image = buffer.toString("base64");

//     // Strict prompt: force JSON output
//     const prompt = `
//       You are an AI ingredient recognizer.
//       Analyze this food image and return ONLY a JSON array of ingredients.
//       Example output: ["cucumber", "tomato", "onion"]
//       ❌ Do NOT include words like "json", "..", code blocks, or explanations.
//       ✅ Just return the raw JSON array.
//     `;

//     const result = await model.generateContent([
//       { inlineData: { data: base64Image, mimeType: file.type || "image/jpeg" } },
//       { text: prompt },
//     ]);

//     let responseText = result.response.text().trim();

//     // 🧹 Clean unwanted artifacts
//     responseText = responseText
//       .replace(/```json/gi, "")
//       .replace(/```/g, "")
//       .replace(/\.json/gi, "")
//       .replace(/\.\./g, "")
//       .trim();

//     let ingredients: string[] = [];

//     // ✅ Try to parse as JSON
//     try {
//       ingredients = JSON.parse(responseText);
//     } catch {
//       // fallback if it's not valid JSON
//       ingredients = responseText
//         .replace(/[\[\]"]/g, "")
//         .split(/,|\n/)
//         .map(s => s.trim().toLowerCase())
//         .filter(Boolean);
//     }

//     // Deduplicate and return clean list
//     return [...new Set(ingredients)];
//   } catch (err) {
//     console.error("Gemini ingredient recognition failed:", err);
//     return [];
//   }
// }
// lib/ingredientRecognition.ts
/**
 * Frontend helper to send an image to our API for recognition.
 * The actual AI call happens server-side in /api/recognize/route.ts
 */
export async function recognizeIngredients(file: File): Promise<string[]> {
  try {
    const form = new FormData();
    form.append("image", file);

    const res = await fetch("/api/recognize", {
      method: "POST",
      body: form,
    });

    if (!res.ok) {
      const msg = await res.text();
      throw new Error(msg || "Failed to recognize ingredients");
    }

    const data = (await res.json()) as { ingredients: string[] };
    return data.ingredients || [];
  } catch (err) {
    console.error("❌ Ingredient recognition failed:", err);
    return [];
  }
}
