        import { motion } from "framer-motion";

        export default function About() {
        return (
            <section id="par-mums" className="bg-white py-20 text-black">
<motion.div
  className="max-w-screen-xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12"
  initial={{ y: 80, opacity: 0 }}
  whileInView={{ y: 0, opacity: 1 }}
  viewport={{ once: true, amount: 0.2 }}
  transition={{ duration: 1.5, ease: "easeOut" }}
>

    {/* Teksts */}
    <div className="flex-1 text-center lg:text-left">
      <h2 className="text-3xl font-bold mb-4">Par Romadi</h2>
      <p className="text-gray-600 mb-6">
        Romadi ir partneris, uz kuru vari paļauties no idejas līdz gatavam risinājumam. Mēs ne tikai izstrādājam mājaslapas — mēs palīdzam zīmoliem augt, komunicēt un izcelties tiešsaistē. 
        Mūsu process ir pārskatāms, ērts un vienmēr pielāgots tava uzņēmuma vajadzībām.
      </p>
    </div>

    {/* DaisyUI telefons ar attēlu */}
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
  </motion.div>
</section>

        );
        }
