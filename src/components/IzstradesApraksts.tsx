interface IzstradesAprakstsProps {
    title: string;
    paragraphs: string[];
    tags: string[];
}

const IzstradesApraksts = ({ title, paragraphs, tags }: IzstradesAprakstsProps) => {
    return (
        <section className="max-w-screen-xl mx-auto px-6 -mt-15">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Kreisā kolonna */}
            <div className="space-y-6">
            <h2 className="text-2xl font-bold">{title}</h2>
            {paragraphs.map((text, index) => (
                <p key={index} className="text-gray-700">
                {text}
                </p>
            ))}

            {/* Pogas */}
            <div className="flex flex-wrap gap-3">
                {tags.map((label, idx) => (
                <button
                    key={idx}
                    className="px-5 py-2 rounded-full bg-gray-200 text-sm text-black transition duration-200 hover:bg-black hover:text-white"
                >
                    {label}
                </button>
                ))}
            </div>
            </div>
        </div>
        </section>
    );
};

export default IzstradesApraksts;
