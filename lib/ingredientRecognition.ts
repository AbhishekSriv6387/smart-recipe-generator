export async function recognizeIngredients(file: File): Promise<string[]> {
  const form = new FormData();
  form.append("image", file);
  const res = await fetch("/api/recognize", { method: "POST", body: form });
  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || "Failed to recognize ingredients");
  }
  const data = (await res.json()) as { ingredients: string[] };
  return data.ingredients;
}
