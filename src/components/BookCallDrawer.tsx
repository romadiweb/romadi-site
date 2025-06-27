import { useState } from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

    export default function BookCallDrawer({ isOpen, onClose }: Props) {
    const [showToast, setShowToast] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        budget: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
        console.log("Form submitted:", formData);

        setShowToast(true);

    setTimeout(() => {
        setShowToast(false);
        onClose();
    }, 3000);
};


    return (
        <div className={`fixed top-0 right-0 w-full sm:w-[420px] h-full bg-white text-white shadow-xl z-[999] transition-transform duration-300 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        {/* Overlay aiz drawer */}
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-[-1]" onClick={onClose}></div>

        <div className="p-6 overflow-y-auto h-full">
            {/* X poga */}
            <div className="flex justify-end mb-4">
            <button onClick={onClose} className="white hover:text-gray-600 text-2xl cursor-pointer">&times;</button>
            </div>

            <h2 className="flex items-center gap-2 text-xl font-semibold mb-4">
                <img src="/icons/heart-white.svg" alt="sirds" className="w-6 h-6"/>
                Viss sākas ar sarunu!
            </h2>
            <p className="text-gray-400 mb-4">
                Piesaki sarunu ar Romadi komandu!
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                name="name"
                placeholder="Vārds*"
                autoComplete="name"
                value={formData.name}
                onChange={handleChange}
                className="input input-bordered text-gray-600 w-full bg-white"
                required
            />

            <input
                type="tel"
                name="phone"
                placeholder="Tālrunis*"
                autoComplete="tel"
                value={formData.phone}
                onChange={handleChange}
                className="input input-bordered w-full text-gray-600 bg-white"
                required
            />

            <input
                type="email"
                name="email"
                placeholder="E-pasts*"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                className="input input-bordered w-full text-gray-600 bg-white"
                required
            />

            <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="select select-bordered w-full text-gray-600 bg-white"
                required
            >
                <option disabled value="" className="text-gray-400">
                    -- Izvēlies budžetu --
                </option>
                <option>Tavs piedāvājums</option>
                <option>līdz 500 EUR</option>
                <option>500 - 1000 EUR</option>
                <option>1000 - 2000 EUR</option>
                <option>2000 - 5000 EUR</option>
                <option>5000 - 10000 EUR</option>
            </select>
            <textarea
                name="message"
                placeholder="Ievadiet ziņu"
                value={formData.message}
                onChange={handleChange}
                className="textarea textarea-bordered w-full text-gray-600 bg-white"
                rows={4}
                required
            />

            <button type="submit" className="btn w-full bg-white text-black hover:bg-green-100 rounded-full">
                Nosūtīt
            </button>
            </form>
        </div>

        {showToast && (
    <div className="toast toast-end z-[9999]">
        <div className="alert alert-success text-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 stroke-current shrink-0" fill="none"
            viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
            d="M5 13l4 4L19 7" />
        </svg>
        <span>Paldies! Mēs saņēmām jūsu ziņu.</span>
        </div>
    </div>
)}

        </div>
    );
    }
