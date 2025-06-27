    import { motion } from "framer-motion";
import { FC, ReactNode } from "react";

    interface IzmaksasCardProps {
    image: string;
    title: string;
    description: string;
    price: string;
    }

    export const IzmaksasCard: FC<IzmaksasCardProps> = ({ image, title, description, price }) => {
    return (
    <motion.div
        className="rounded-xl shadow-md overflow-hidden bg-white transform hover:-translate-y-1 transition-transform duration-700 ease-in-out"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
            type: "spring",
            stiffness: 50,
            damping: 20,
            duration: 1.0
        }}
    >


        <img
            src={image}
            alt={title}
            className="w-full h-40 object-cover"
        />
        <div className="p-6 relative">
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm mb-6">{description}</p>
            <span className="absolute bottom-4 left-6 font-bold text-lg">{price}</span>
        </div>
        </motion.div>
    );
    };

    interface IzmaksasCardsProps {
    children: ReactNode;
    }

    const IzmaksasCards: FC<IzmaksasCardsProps> = ({ children }) => {
    return (
        <section className="max-w-screen-xl mx-auto px-6 space-y-10">
        <h2 className="text-2xl font-bold text-center">Piedāvājumi</h2>
        <p className="text-base text-center text-gray-600 -mt-8">Izvēlies kādu no tev pievilcīgākiem risinājumiem</p>
        <div className="grid md:grid-cols-2 gap-8">
            {children}
        </div>
        </section>
    );
    };

    export default IzmaksasCards;
