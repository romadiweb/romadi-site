    import React from "react";
import { Helmet } from "react-helmet-async";
import { PortfolioCard } from "../components/PortfolioCard";

    interface Project {
    id: string;
    title: string;
    href?: string;
    description: string;
    image: string;
    status?: "Izstrādē" | "Publicēts" | "Drīzumā";
    tone?: "dark" | "light";
    }

    const projects: Project[] = [
    {
        id: "ljk",
        title: "Liepājas Jūrniecības koledža",
        href: "https://ljk.lv/",
        description:
        "Vietnes piekļūstamības risinājumi, kontrasta režīmi un UI uzlabojumi.",
        image: "/photos/ljk.svg",
        status: "Publicēts",
        tone: "dark",
    },
    {
        id: "diana",
        title: "Medību veikals Diāna",
        href: "https://diana-lv.netlify.app",
        description:
        "Treniņtestu platforma mednieku kursiem ar tematiskām sadaļām un pašpārbaudi.",
        image: "/photos/diana-lv.jpg",
        status: "Izstrādē",
        tone: "light",
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

        <>
        <Helmet>
            <title>Mūsu portfolio | Romadi</title>
            <meta
                name="description"
                content="Sniedzam ieskatu mūsu darbos." />
            <meta
                property="og:title"
                content="Mūsu portfolio | Romadi" />
            <meta
                property="og:description"
                content="Romadi palīdz izveidot un vadīt Facebook/Instagram kampaņas, kas sasniedz īsto auditoriju. Dizains, stratēģija un rezultātu optimizācija vienuviet." />
            <meta property="og:image" content="https://romadi.lv/og/facebook-reklamas.jpg" />
            <meta property="og:url" content="https://romadi.lv/facebook-reklamas" />
        </Helmet>
        <main className="mx-auto w-full text-black max-w-[80rem] px-4 pb-16 pt-20 sm:px-6 lg:px-8
        ">

                <h1 className="text-3xl sm:text-3xl font-bold mb-4 ml-4 lg:mt-12">Mūsu Portfolio</h1>
                <p className="text-gray-600 mb-6 max-w-xl ml-4">Ieskaties mūsu īstenotajos projektos un atrod iedvesmu savam startam!<br/>
                Zemāk apskatāmi mūsu projekti un prototipi — saraksts tiek papildināts.</p>
                <section className="pb-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {projects.map((p) => (
                        <PortfolioCard key={p.id} project={p} />
                    ))}
                    {projects.length === 0 && (
                        <div className="rounded-2xl border border-dashed border-[--border] p-10 text-center text-sm text-[--muted-foreground]">
                            Šeit parādīsies ROMADI paveiktie darbi.
                        </div>
                    )}
                </section>
            <section className="mt-12 text-center">
                <h2 className="text-xl font-semibold mb-3">
                    Vai vēlies, lai tavs projekts parādās šajā sadaļā?
                </h2>
                <p className="text-gray-600 mb-6">
                    Sazinies ar mums un sāksim kopā veidot tavu nākamo digitālo risinājumu.
                </p>
                <a
                    href="/kontakti"
                    className="inline-block bg-black text-white px-6 py-3 rounded-lg shadow hover:bg-gray-800 transition"
                >
                    Sazināties ar mums
                </a>
            </section>
            </main>
            </>
    );
    }
