import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";
import { LegalContent } from "@/components/LegalContent";
import { getTextContent } from "@/lib/content";

export async function LegalPage({
  title,
  file,
}: {
  title: string;
  file: string;
}) {
  const text = await getTextContent(file);

  return (
    <div>
      <Section className="bg-midnight">
        <div className="mx-auto w-full max-w-5xl px-6">
          <div className="space-y-4">
            <Badge>Legal</Badge>
            <h1 className="text-4xl font-semibold text-white">{title}</h1>
            <p className="text-sm text-white/60">Last updated: [add date]</p>
          </div>
        </div>
      </Section>
      <Section>
        <div className="mx-auto w-full max-w-5xl px-6">
          <LegalContent text={text} />
        </div>
      </Section>
    </div>
  );
}
