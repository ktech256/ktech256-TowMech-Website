import Image from "next/image";

const team = [
  {
    name: "Thandi Mokoena",
    title: "Chief Executive Officer",
    photo: "/images/team/thandi-mokoena.svg",
  },
  {
    name: "Musa Nkosi",
    title: "Chief Operating Officer",
    photo: "/images/team/musa-nkosi.svg",
  },
  {
    name: "Naledi Dlamini",
    title: "Head of Product",
    photo: "/images/team/naledi-dlamini.svg",
  },
  {
    name: "Jared Naidoo",
    title: "Head of Partnerships",
    photo: "/images/team/jared-naidoo.svg",
  },
  {
    name: "Aisha Patel",
    title: "Customer Experience Lead",
    photo: "/images/team/aisha-patel.svg",
  },
  {
    name: "Sipho Khumalo",
    title: "Safety & Compliance",
    photo: "/images/team/sipho-khumalo.svg",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-semibold">About TowMech</h1>
        <p className="mt-2 text-white/70">
          Meet the team building TowMech’s premium roadside assistance platform.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <div
              key={member.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-4"
            >
              <Image
                src={member.photo}
                alt={member.name}
                width={220}
                height={220}
                className="rounded-xl"
              />
              <h2 className="mt-4 text-lg font-semibold">{member.name}</h2>
              <p className="text-sm text-white/60">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
