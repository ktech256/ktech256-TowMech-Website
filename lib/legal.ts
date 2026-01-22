export type LegalSection = {
  id: string;
  title: string;
  content: string[];
};

export function parseLegalText(text: string): LegalSection[] {
  const lines = text.split(/\r?\n/);
  const sections: LegalSection[] = [];
  let current: LegalSection | null = null;

  const flush = () => {
    if (current) {
      sections.push(current);
    }
  };

  const makeId = (value: string) =>
    value
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/\s+/g, "-");

  const isHeading = (line: string) => {
    if (!line.trim()) return false;
    if (line.startsWith("#")) return true;
    const uppercaseRatio =
      line.replace(/[^A-Z]/g, "").length / Math.max(1, line.replace(/[^A-Za-z]/g, "").length);
    return uppercaseRatio > 0.7 || line.endsWith(":");
  };

  for (const line of lines) {
    if (isHeading(line)) {
      flush();
      const title = line.replace(/^#+\s*/, "").trim();
      current = { id: makeId(title), title, content: [] };
    } else if (current) {
      current.content.push(line);
    } else if (line.trim()) {
      current = { id: makeId("Overview"), title: "Overview", content: [line] };
    }
  }

  flush();
  return sections;
}
