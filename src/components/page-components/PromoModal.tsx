import { Copy, X } from "lucide-react";
import { useState } from "react";

export default function PromoModal({ isOpen, close }: { isOpen: boolean; close: () => void }) {
    const [copied, setCopied] = useState(false);

    const copyCode = async () => {
        await navigator.clipboard.writeText("ROMADI2025");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-xl shadow-lg max-w-xl w-full p-10 relative">
            <button
            onClick={close}
            className="absolute top-3 right-3 text-gray-400 hover:text-black cursor-pointer"
            aria-label="Aizvērt"
            >
            <X size={20} />
            </button>
            <h2 className="text-xl text-[#252525] font-bold mb-6 text-center">Īpašs piedāvājums!</h2>
        <div className="text-[#252525] text-base mb-8 space-y-5 text-left leading-relaxed">
            <p className="text-center">
                Ja vēlies uzsākt sadarbību ar Romadi, tad šis ir īstais brīdis.
            </p>
            <p className="text-center">
                Izmanto kodu <strong className="text-black bg-gray-100 px-2 py-1 rounded">ROMADI2025</strong> un saņem
                <strong> -15% atlaidi </strong> visiem mūsu pamatpakalpojumiem līdz 31. augustam.
            </p>
            <p className="text-sm text-gray-600">
                Piedāvājums attiecas uz mājaslapu izstrādi, dizainu, SEO un reklāmas pakalpojumiem.
            </p>
        </div>


            <div className="flex items-center justify-center gap-2">
            <div className="bg-gray-100 px-4 py-2 rounded font-mono text-gray-400">ROMADI2025</div>
            <button
                onClick={copyCode}
                className="text-sm bg-[#252525] text-white px-3 py-1 rounded hover:bg-gray-800 cursor-pointer"
            >
                <Copy size={16} className="inline-block mr-1" /> Kopēt
            </button>
            </div>
            {copied && <p className="text-green-600 text-xs text-center mt-8">Kods nokopēts uz starpliktuvi!</p>}
        </div>
        </div>
    );
}
