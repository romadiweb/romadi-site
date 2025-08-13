import { BadgePercent, Gift } from "lucide-react";
import { useLocation } from "react-router-dom";

interface TopBannerProps {
    visible: boolean;
    onClick?: () => void;
}



export default function TopBanner({ visible, onClick }: TopBannerProps) {
    const location = useLocation();
    if (location.pathname !== "/") return null;


    return (
        <div
        onClick={onClick}
        className={`w-3/4 h-[40px] fixed top-0 bg-[#dfd9d7] text-black rounded-b-md text-sm py-2 px-4 z-[50] border-b border-neutral-300 cursor-pointer flex items-center justify-center gap-2 hover:bg-[#E7E2E0] transition-all duration-500
            ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full'}
            fixed left-1/2 transform -translate-x-1/2 top-[64px]
        `}
        >
        <Gift className="rotate-[-15deg] text-[black/60]" size={18} />
        <span className="hidden sm:inline">Jauna sadarbība sākas ar īpašu piedāvājumu!</span>
        <span className="inline sm:hidden">Īpašs piedāvājums</span>
        <BadgePercent className="rotate-[15deg] text-black/60" size={18} />
        </div>
    );
}
