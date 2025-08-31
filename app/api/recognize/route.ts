// import { NextRequest, NextResponse } from "next/server";

// export const runtime = "edge";

// function mapToCommonIngredients(labels: {label: string, score: number}[]) {
//   const out = new Set<string>();
//   const synonyms: Record<string, string> = {
//     mozzarella: "mozzarella",
//     tomato: "tomato",
//     pasta: "spaghetti",
//     noodle: "noodles",
//     rice: "rice",
//     lentil: "red lentils",
//     chickpea: "chickpeas",
//     paneer: "paneer",
//     tofu: "tofu",
//     avocado: "avocado",
//     egg: "egg",
//     bread: "bread",
//     cheese: "cheese",
//     butter: "butter",
//     milk: "milk",
//     yogurt: "yogurt",
//     salmon: "salmon",
//     chicken: "chicken breast",
//     beef: "beef mince",
//     onion: "onion",
//     garlic: "garlic",
//     broccoli: "broccoli",
//     pepper: "bell pepper",
//     cucumber: "cucumber",
//     basil: "basil",
//     mushroom: "mushroom",
//     lemon: "lemon"
//   };
//   for (const l of labels) {
//     const k = l.label.toLowerCase();
//     for (const key of Object.keys(synonyms)) {
//       if (k.includes(key)) out.add(synonyms[key]);
//     }
//   }
//   return Array.from(out);
// }

// export async function POST(req: NextRequest) {
//   try {
//     const form = await req.formData();
//     const file = form.get("image");
//     if (!file || !(file as File).arrayBuffer) {
//       return new NextResponse("Missing image", { status: 400 });
//     }
//     const hfKey = process.env.HUGGINGFACE_API_KEY;
//     if (!hfKey) {
//       // Fallback: return empty list with helpful message, still 200 for demo
//       return NextResponse.json({ ingredients: [], note: "Set HUGGINGFACE_API_KEY to enable recognition." });
//     }
//     const bytes = Buffer.from(await (file as File).arrayBuffer());
//     const resp = await fetch("https://api-inference.huggingface.co/models/nateraw/food", {
//       method: "POST",
//       headers: {
//         "Authorization": `Bearer ${hfKey}`,
//         "Content-Type": "application/octet-stream"
//       },
//       body: bytes
//     });
//     if (!resp.ok) {
//       const msg = await resp.text();
//       return new NextResponse(`HF error: ${msg}`, { status: 502 });
//     }
//     const payload = await resp.json();
//     // HF returns either array or nested arrays depending on pipeline
//     const flat = Array.isArray(payload) ? payload : (Array.isArray(payload[0]) ? payload[0] : []);
//     const top = (flat as any[]).filter(Boolean).map(x => ({ label: x.label ?? x.class ?? String(x), score: x.score ?? 0 }));
//     const ingredients = mapToCommonIngredients(top);
//     return NextResponse.json({ ingredients });
//   } catch (e: any) {
//     return new NextResponse(e?.message || "Unexpected error", { status: 500 });
//   }
// }
import { NextRequest, NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const runtime = "nodejs"; // use nodejs runtime since Gemini SDK needs it

export async function POST(req: NextRequest) {
  try {
    const form = await req.formData();
    const file = form.get("image") as File;

    if (!file || !(file as File).arrayBuffer) {
      return new NextResponse("Missing image", { status: 400 });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { ingredients: [], note: "Set GEMINI_API_KEY in .env.local" },
        { status: 500 }
      );
    }

    // Convert file to base64
    const bytes = Buffer.from(await file.arrayBuffer());
    const base64Image = bytes.toString("base64");

    // Init Gemini
    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    // Prompt
    const prompt = `
      You are an AI ingredient recognizer.
      Analyze this food image and return ONLY a JSON array of ingredients.
      Example: ["cucumber", "tomato", "onion"]
    `;

    const result = await model.generateContent([
      { inlineData: { data: base64Image, mimeType: file.type || "image/jpeg" } },
      { text: prompt },
    ]);

    const responseText = result.response.text().trim();

    let ingredients: string[];
    try {
      ingredients = JSON.parse(responseText);
    } catch {
      ingredients = responseText
        .replace(/[\[\]"]/g, "")
        .split(/,|\n/)
        .map((s) => s.trim())
        .filter(Boolean);
    }

    return NextResponse.json({ ingredients });
  } catch (e: any) {
    console.error("Gemini recognition failed:", e);
    return new NextResponse(e?.message || "Unexpected error", { status: 500 });
  }
}
