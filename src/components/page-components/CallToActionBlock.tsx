import { ctaContent } from "../../data/cta";

type Props = {
    section: keyof typeof ctaContent;
};

export default function CallToActionBlock({ section }: Props) {
    const data = ctaContent[section];

    return (
        <section
        className="py-20 bg-cover bg-center text-white text-center"
        style={{ backgroundImage: `url(${data.backgroundImage})` }}
        >
        <div className="max-w-2xl mx-auto px-6 space-y-4">
            <h2 className="text-3xl font-bold">{data.title}</h2>
            <p className="text-lg">{data.text}</p>
            <a
            href="/kontakti"
            className="inline-block mt-4 bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition"
            >
            Sazinies ar mums
            </a>
        </div>
        </section>
    );
}
