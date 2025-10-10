import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const [hovered, setHovered] = useState(false);

  return (
    <section id="par-mums" className="bg-white py-20 text-black">
      <div className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        {/* Teksts */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">Par Romadi</h2>
          <p className="text-gray-600 mb-2">
            Romadi ir partneris, uz kuru vari paļauties no idejas līdz gatavam risinājumam.
            Mēs ne tikai izstrādājam mājaslapas — mēs palīdzam zīmoliem augt, komunicēt un izcelties tiešsaistē.
            Mūsu process ir pārskatāms, ērts un vienmēr pielāgots tava uzņēmuma vajadzībām.
          </p>

          {/* CTA zem <p>: underline tikai zem teksta, virziens: in L→R, out R→L */}
          <motion.a
            href="/portfolio"
            className="group inline-flex items-center gap-2 text-base font-medium text-black mt-3"
            aria-label="Apskatīt mūsu darbus"
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
          >
            {/* Teksts ar neatkarīgu underline slāni */}
            <span className="relative inline-block">
              <span>Apskatīt mūsu darbus</span>

              {/* Līnija: mērogs + dinamisks transformOrigin pēc hover stāvokļa */}
              <motion.span
                className="absolute -bottom-0.5 left-0 h-[1.5px] w-full bg-current will-change-transform"
                animate={{
                  scaleX: hovered ? 1 : 0,
                }}
                style={{
                  transformOrigin: hovered ? "left center" : "right center",
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              />
            </span>

            {/* Bultiņa – kustas pa labi hover laikā */}
            <motion.svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              animate={{ x: hovered ? 4 : 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </motion.svg>
          </motion.a>
        </div>

        {/* Demo makets (var izņemt, ja nevajag) */}
        <div className="flex-1 flex justify-center">
          <div className="mockup-phone bg-base-100 border border-base-300 max-w-[240px] w-full transition duration-500 hover:rotate-[2deg] hover:scale-[1.02] shadow hover:shadow-xl">
            <div className="camera"></div>
            <div className="display">
              <img
                src="/photos/phone-ui.png"
                alt="Romadi preview"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
