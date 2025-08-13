    import React from "react";
import { PortfolioCard } from "../components/PortfolioCard";

    interface Project {
    id: string;
    title: string;
    href?: string;
    description: string;
    image: string;
    status?: "Izstrādē" | "Publicēts" | "Drīzumā";
    }

    const projects: Project[] = [
    {
        id: "ljk",
        title: "ljk.lv",
        href: "https://ljk-lv.netlify.app/",
        description:
        "Vietnes piekļūstamības risinājumi, kontrasta režīmi un UI uzlabojumi.",
        image: "/photos/ljk.svg",
        status: "Izstrādē",
    },
    ];

    const SubtleLead: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <p className="mt-2 text-balance text-base/7 text-[--muted-foreground]">{children}</p>
    );

    const SectionHeader: React.FC<{
    title: string;
    eyebrow?: string;
    lead?: string;
    }> = ({ title, eyebrow, lead }) => (
    <header className="mb-8 sm:mb-10 lg:mb-12 mt-6">
        <div className="space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight sm:text-3xl lg:text-4xl">{title}</h1>
        {eyebrow && (
            <h2 className="text-lg font-medium text-[--foreground]/80 sm:text-xl">{eyebrow}</h2>
        )}
        {lead && <SubtleLead>{lead}</SubtleLead>}
        </div>
    </header>
    );

    export default function Portfolio() {
    return (
        <main className="mx-auto w-full text-gray-800 max-w-[80rem] px-4 pb-16 pt-20 sm:px-6 lg:px-8">
        <SectionHeader
            title="Mūsu Portfolio"
            eyebrow="Ieskaties mūsu īstenotajos projektos un atrod iedvesmu savam startam!"
            lead="Zemāk apskatāmi mūsu projekti un prototipi — saraksts tiek papildināts."
        />

        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
            <PortfolioCard key={p.id} project={p} />
            ))}
            {projects.length === 0 && (
            <div className="rounded-2xl border border-dashed border-[--border] p-10 text-center text-sm text-[--muted-foreground]">
                Šeit parādīsies ROMADI paveiktie darbi.
            </div>
            )}
        </section>
        </main>
    );
    }