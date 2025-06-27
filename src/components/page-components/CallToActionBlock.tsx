import { motion } from "framer-motion";
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
        <motion.div
            className="max-w-2xl mx-auto px-6 space-y-4"
            initial={{ y: 100, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 2.5, ease: "easeOut" }}
            >

            <h2 className="text-3xl font-bold">{data.title}</h2>
            <p className="text-lg">{data.text}</p>
            <a
            href="/kontakti"
            className="inline-block mt-4 bg-white text-black font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition"
            >
            Sazinies ar mums
            </a>
        </motion.div>
        </section>
    );
}
