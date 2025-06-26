import { FC } from "react";

interface Offer {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
    }

    interface PapildusPiedavajumiProps {
    offers: Offer[];
    }

    const PapildusPiedavajumi: FC<PapildusPiedavajumiProps> = ({ offers }) => {
    return (
        <section className="max-w-screen-xl mx-auto px-6 py-16 space-y-12">
        <h2 className="text-2xl font-bold text-center">Papildu iespējas</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offers.map((offer, index) => {
            const Icon = offer.icon;
            return (
                <div
                key={index}
                className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col items-start"
                >
                <Icon className="w-6 h-6 text-black mb-4" />
                <h3 className="font-semibold text-lg mb-1">{offer.title}</h3>
                <p className="text-sm text-gray-600">{offer.description}</p>
                </div>
            );
            })}
        </div>
        </section>
    );
    };

export default PapildusPiedavajumi;
