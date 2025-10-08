// src/components/Breadcrumbs.tsx
import { Helmet } from "react-helmet-async";

type Crumb = { name: string; url: string };

export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `https://romadi.lv${it.url}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <nav aria-label="Breadcrumb" className="max-w-5xl mx-auto px-4 mt-4">
        <ol className="flex flex-wrap gap-2 text-sm">
          {items.map((it, i) => (
            <li key={i} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              <a href={it.url} className="hover:underline">{it.name}</a>
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
