
export default function MaksajumiUnPiegade() {
    return (
        <section className="max-w-screen-xl mx-auto px-6 py-12 space-y-16">
        
        {/* Maksājumu integrācijas */}
        <div>
            <h2 className="text-2xl font-bold mb-6">Maksājumu integrācijas</h2>
            <p className="text-gray-700 mb-4">
            Piedāvājam integrēt ērtākos un populārākos maksājumu risinājumus, kas atbilst tavu klientu ieradumiem.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
            <img src="/icons/swedbank.svg" alt="Swedbank" className="h-5" />
            <img src="/icons/SEB.svg" alt="SEB" className="h-5" />
            <img src="/icons/luminor.svg" alt="Luminor" className="h-5" />
            <img src="/icons/stripe-card.svg" alt="Stripe" className="h-10" />
            <img src="/icons/paypal-card.svg" alt="PayPal" className="h-10" />
            <img src="/icons/mastercard-card.svg" alt="Mastercard" className="h-10" />
            <img src="/icons/visa-card.svg" alt="Visa" className="h-10" />
            </div>
        </div>

        {/* Piegādes iespējas */}
        <div>
            <h2 className="text-2xl font-bold mb-6">Piegādes risinājumi</h2>
            <p className="text-gray-700 mb-4">
            Savieno savu veikalu ar uzticamākajiem piegādātājiem – automatizē piegādes procesu un padari to ērtāku sev un klientiem.
            </p>
            <div className="flex flex-wrap gap-6 items-center">
            <img src="/icons/omniva.png" alt="Omniva" className="h-10" />
            <img src="/icons/venipak.png" alt="Venipak" className="h-10" />
            <img src="/icons/latvijas-pasts.jpeg" alt="Latvijas Pasts" className="h-10" />
            <img src="/icons/dpd.svg" alt="DPD" className="h-10" />
            <img src="/icons/ups-colored.svg" alt="UPS" className="h-10" />
            </div>
        </div>

        </section>
    );
}
