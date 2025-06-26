import React from "react";

    type Section = {
    title: string;
    description: string;
    };

    type Props = {
    heading: string;
    sections: Section[];
    };

const Piedavajam: React.FC<Props> = ({ heading, sections }) => {
    return (
        <section className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-12">{heading}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sections.map((section, index) => (
            <div
                key={index}
                className="bg-[#F3F3F3] rounded-xl p-6 shadow-md hover:-translate-y-1 transition-all"
            >
                <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                <p className="text-gray-700">{section.description}</p>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Piedavajam;
