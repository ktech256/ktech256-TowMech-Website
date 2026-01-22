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
          {sections.map((section) => (
            <li key={section.id}>
              <a href={`#${section.id}`} className="hover:text-white">
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>
      <article className="prose-legal">
        {sections.map((section) => (
          <div key={section.id} id={section.id} className="scroll-mt-24">
            <h2>{section.title}</h2>
            {section.content.map((line, index) =>
              line.trim() ? (
                <p key={index}>{line}</p>
              ) : (
                <div key={index} className="h-3" />
              ),
            )}
          </div>
        ))}
      </article>
    </div>
  );
}
