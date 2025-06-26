    import { FC } from "react";

    interface ServiceHeroProps {
    image: string;
    title: string;
    subtitle: string;
    }

    const ServiceHero: FC<ServiceHeroProps> = ({ image, title, subtitle }) => {
    return (
        <section className="relative w-full max-w-screen-xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-3xl h-[60vh]">
            <img
            src={image}
            alt={title}
            className="object-cover object-[center_40%] w-full h-full"
            />
            <div className="absolute bottom-6 left-6 bg-white/70 p-6 rounded-xl max-w-sm">
            <h1 className="text-3xl font-bold font-['Lobster, cursive'] mb-2">{title}</h1>
            <p className="text-base font-poppins text-gray-700">{subtitle}</p>
            </div>
        </div>
        </section>
    );
    };

    export default ServiceHero;
