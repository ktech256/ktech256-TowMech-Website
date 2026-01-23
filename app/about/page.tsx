import { Badge } from "@/components/Badge";
import { Section } from "@/components/Section";
import { Card } from "@/components/Card";
import { Reveal } from "@/components/Reveal";
import { SmartImage } from "@/components/SmartImage";
import { team } from "@/lib/data";
import { getTextContent } from "@/lib/content";

export default async function AboutPage() {
  const mission = await getTextContent("mission.txt");
  const vision = await getTextContent("vision.txt");

  return (
    <div>
      <Section className="bg-midnight">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div className="space-y-4">
              <Badge>About TowMech</Badge>
              <h1 className="text-4xl font-semibold text-white">
                Built for safer journeys.
              </h1>
              <p className="text-white/70">
                TowMech is a product of Texas Computer Hub, delivering premium roadside
                support across South Africa.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <Card>
              <h2 className="text-2xl font-semibold text-white">Mission</h2>
              <p className="mt-3 whitespace-pre-line text-white/70">
                {mission || "Mission statement content will appear here once provided."}
              </p>
            </Card>
          </Reveal>
          <Reveal delay={0.1}>
            <Card>
              <h2 className="text-2xl font-semibold text-white">Vision</h2>
              <p className="mt-3 whitespace-pre-line text-white/70">
                {vision || "Vision statement content will appear here once provided."}
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section className="bg-midnight">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <div className="space-y-4">
              <Badge>Founder</Badge>
              <h2 className="text-3xl font-semibold text-white">
                Building a trusted provider network.
              </h2>
              <p className="text-white/70">
                TowMech is founded on safety, speed, and premium care for every driver.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Card className="flex flex-col items-center text-center">
              <SmartImage
                src="/images/founder-placeholder.svg"
                alt="Founder placeholder"
                width={260}
                height={260}
                className="rounded-3xl"
              />
              <h3 className="mt-4 text-xl font-semibold text-white">Ongus Killian</h3>
              <p className="text-sm text-white/60">Chief Executive Officer</p>
              <p className="mt-3 text-sm text-white/70">
                Visionary leadership focused on building a national ecosystem of trusted towing
                and roadside experts.
              </p>
            </Card>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="mx-auto w-full max-w-6xl px-6">
          <Reveal>
            <div className="space-y-4">
              <Badge>Executive Team</Badge>
              <h2 className="text-3xl font-semibold text-white">Meet the leaders.</h2>
              <p className="text-white/70">
                A dedicated team delivering technology, operations, and safety excellence.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <Reveal key={`${member.name}-${index}`} delay={index * 0.05}>
                <Card className="text-center">
                  <SmartImage
                    src="/images/team-placeholder.svg"
                    alt={member.name}
                    width={200}
                    height={200}
                    className="mx-auto rounded-2xl"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {member.name}
                  </h3>
                  <p className="text-sm text-accent">{member.title}</p>
                  <p className="mt-2 text-sm text-white/70">{member.bio}</p>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-midnight">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-6 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="space-y-4">
              <Badge>Why TowMech</Badge>
              <h2 className="text-3xl font-semibold text-white">
                Premium roadside support backed by technology.
              </h2>
              <p className="text-white/70">
                TowMech blends local expertise with real-time tracking, verified providers, and
                a safety-first approach that keeps you in control.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <Card>
              <ul className="space-y-3 text-sm text-white/70">
                <li>• Real-time response monitoring and safety checklists.</li>
                <li>• Secure provider verification and quality checks.</li>
                <li>• Transparent communication from request to resolution.</li>
              </ul>
            </Card>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}