import { whyRomadiContent } from "../data/WhyRomadi";

type Props = {
  section: keyof typeof whyRomadiContent;
};

export default function KapecRomadi({ section }: Props) {
  const cards = whyRomadiContent[section];

  return (
    <section className="max-w-screen-xl mx-auto px-6 space-y-10">
      <h2 className="text-2xl font-bold text-center">Kāpēc izvēlēties Romadi?</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div key={i} className="bg-[#F3F3F3] shadow rounded-xl p-6">
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
