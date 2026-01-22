import { promises as fs } from "fs";
import path from "path";

export async function getTextContent(relativePath: string) {
  const filePath = path.join(process.cwd(), "content", relativePath);
  try {
    return await fs.readFile(filePath, "utf8");
  } catch (error) {
    console.warn(`Missing content file: ${filePath}`);
    return "";
  }
}
