import { parseLegalText } from "@/lib/legal";

export function LegalContent({ text }: { text: string }) {
  const sections = parseLegalText(text);

  if (!text.trim()) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/60">
        Content file missing. Please add the official legal text to render it here.
      </div>
    );
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[220px_1fr]">
      <aside className="space-y-3 text-sm text-white/60">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
          Contents
        </p>
        <ul className="space-y-2">
          {sections.map((section, index) => (
            <li key={`${section.id}-${index}`}>
              <a href={`#${section.id}`} className="hover:text-white">
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      <article className="prose-legal">
        {sections.map((section, index) => (
          <div
            key={`${section.id}-${index}`}
            id={section.id}
            className="scroll-mt-24"
          >
            <h2>{section.title}</h2>
            {section.content.map((line, lineIndex) =>
              line.trim() ? (
                <p key={`${section.id}-${index}-${lineIndex}`}>{line}</p>
              ) : (
                <div key={`${section.id}-${index}-${lineIndex}`} className="h-3" />
              ),
            )}
          </div>
        ))}
      </article>
    </div>
  );
}