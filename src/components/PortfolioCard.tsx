import { ArrowUpRight, Wrench } from "lucide-react";
import React from "react";

export interface Project {
    id: string;
    title: string;          // piemēram, "ljk.lv"
    href?: string;          // var izlaist, ja izstrādē
    description: string;
    image: string;          // ceļš uz attēlu
    status?: "Izstrādē" | "Publicēts" | "Drīzumā";
    }

    const StatusPill: React.FC<{ label: string }> = ({ label }) => (
    <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-xs font-medium text-white backdrop-blur">
        <Wrench className="size-3.5" aria-hidden="true" />
        {label}
    </span>
    );

export const PortfolioCard: React.FC<{ project: Project }> = ({ project }) => {
    const content = (
        <div
        className="group relative block aspect-square w-full overflow-hidden rounded-2xl shadow-sm ring-1 ring-black/5 transition hover:shadow-md"
        aria-label={`${project.title}: ${project.description}`}
        >
        <img src={project.image} alt={project.title} className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        <div className="pointer-events-none absolute left-3 top-3 flex items-center gap-2">
            {project.status ? <StatusPill label={project.status} /> : null}
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
            <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
                <h3 className="truncate text-lg font-semibold text-white sm:text-xl">{project.title}</h3>
                <p className="mt-1 line-clamp-2 max-w-[46ch] text-sm text-white/80">{project.description}</p>
            </div>
            <div className="shrink-0 self-center rounded-full bg-white/10 p-2 backdrop-blur transition group-hover:bg-white/20">
                <ArrowUpRight className="size-5 text-white" aria-hidden="true" />
            </div>
            </div>
        </div>
        </div>
    );

return project.href ? (
        <a href={project.href} target="_blank" rel="noreferrer noopener">
        {content}
        </a>
    ) : (
        content
    );
    };
