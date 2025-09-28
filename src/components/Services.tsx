import { Link } from "react-router-dom";
import { services } from "../data/services";


export default function Services() {
    return (
        <section id="pakalpojumi" className="py-20 bg-white text-black">
                <h2 className="text-3xl font-bold mb-12 text-center">Ko mēs piedāvājam?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-8">
                    {services.map((s, i) => (
                        <Link
                            key={i}
                            to={s.link}
                            className="bg-[#F3F3F3] p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center hover:bg-gray-50"
                        >
                            <img src={s.icon} alt={s.title} className="w-12 h-12 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                            <p className="text-sm text-gray-600">{s.desc}</p>
                        </Link>
                    ))}
                </div>
        </section>
    );
}
