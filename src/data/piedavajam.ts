export type PiedavajamItem = {
    title: string;
    description: string;
};

export const piedavajamContent: Record<string, PiedavajamItem[]> = {
    veikali: [
        {
        title: "Konsultēšana",
        description:
            "Dalies ar savu ideju! Kopīgi atradīsim piemērotāko risinājumu tās īstenošanai. Piedāvājam draudzīgas un saprotamas konsultācijas par visiem būtiskajiem soļiem, lai tavs interneta veikals izveidotos pārdomāti.",
        },
        {
        title: "Atbalsts",
        description:
            "Arī pēc veikala izveides viss turpinās un dažkārt parādās jautājumi vai problēmas. Piedāvājam uzturēšanu un atbalstu, lai tava platforma vienmēr būtu stabila, droša un gatava darbam.",
        },
        {
        title: "Dizains UI/UX",
        description:
            "Lietotāji izvēlas palikt tur, kur viss ir skaidrs un patīkams. Pievēršam uzmanību gan dizainam, gan navigācijai, lai platforma būtu gan vizuāli pievilcīga, gan patīkama lietošanā.",
        },
        {
        title: "Tehniskā struktūra",
        description:
            "Katram veikalam ir savas vajadzības. Mēs palīdzam izvēlēties un ieviest rīkus, kas atbilst uzņēmuma mērķiem un iespējām.",
        },
        {
        title: "Efektivitāte",
        description:
            "Automatizācija no pasūtījuma līdz maksājuma un piegādes. Risinājumi, kas ļauj fokusēties uz svarīgāko – izaugsmi.",
        },
        {
        title: "Datu analītika",
        description:
            "Pēc palaišanas uzstādam analītiku un mērķus – skaidri redzams, kas strādā un kur iespējams uzlabot.",
        },
    ],
    izstrade: [
        {
            title: "Atspēriena punkts",
            description:
            "No idejas līdz risinājumam – saprotam, ko tieši tev vajag un kāpēc. Piedāvājam strukturētu sākumu ar skaidru virzienu un mērķiem.",
        },
        {
            title: "Tehniskais pamats",
            description:
            "No hostinga un domēniem līdz CMS izvēlei un optimālajai koda struktūrai. Bez liekiem rīkiem un nevajadzīgas sarežģītības.",
        },
        {
            title: "Dizains & pieredze",
            description:
            "Veidojam lapas, kas izskatās labi un arī darbojas intuitīvi. Uzsvars uz lietotāju plūsmu un uzticamu vizuālo tēlu.",
        },
        {
            title: "Individuāls modulis",
            description:
            "Ja nepieciešams specifisks risinājums – izstrādājam to tieši tavām vajadzībām. Formas, kalkulatori, meklēšana u.c.",
        },
        {
            title: "Pamācība & nodošana",
            description:
            "Iedodam visu nepieciešamo, lai varētu pats pārvaldīt saturu. Iekļauta īsa apmācība un skaidrs dokumentējums.",
        },
        {
            title: "Izaugsmes ceļvedis",
            description:
            "Mēs ne tikai izveidojam lapu, bet arī iedodam plānu, kā to attīstīt tālāk – ar analītiku, satura idejām un soļiem uz SEO.",
        },
    ],
    uiux: [
        {
    title: "Stratēģijas iepazīšanās",
            description:
            "Sākam ar mērķiem, auditoriju un konkurenci. Tā vietā, lai vienkārši zīmētu, mēs izprotam, kā dizains kalpo biznesam.",
        },
        {
            title: "UX plānošana",
            description:
            "Izzīmējam lietotāja ceļu – no ienākšanas līdz rīcībai. Prioritāte ir ērtums, saprotamība un funkcionalitāte bez liekā.",
        },
        {
            title: "UI dizains",
            description:
            "Krāsas, fonti, ikonas, animācijas – viss tiek pielāgots Tavam zīmolam un mērķim, saglabājot vizuālu konsekvenci.",
        },
        {
            title: "Komponentu sistēma",
            description:
            "Veidojam atkārtoti lietojamus dizaina elementus (design system), kas ļauj projektu viegli uzturēt un paplašināt.",
        },
        {
            title: "Interaktīvie prototipi",
            description:
            "Pirms būvēt, testējam. Klikšķināmi prototipi palīdz saprast, kā viss izskatīsies un darbosies reālajā lietošanā.",
        },
        {
            title: "Dizaina nodošana",
            description:
            "Saglabājam visu kārtīgi un viegli saprotami – ar stiliem, komponentēm un dokumentāciju Tavām vai mūsu izstrādes komandām.",
        },
    ],
    seo: [
        {
            title: "SEO audits",
            description:
            "Sākam ar diagnostiku – pārbaudām Tavas lapas tehnisko un satura stāvokli, no ielādes ātruma līdz atslēgvārdiem. Saņem skaidru pārskatu ar konkrētiem ieteikumiem.",
        },
        {
            title: "Saturs, kas strādā",
            description:
            "Pārveidojam saturu, lai tas būtu gan meklētājam saprotams, gan cilvēkam pārliecinošs. Virsraksti, apraksti un struktūra – viss kalpo mērķim.",
        },
        {
            title: "Tehniskā optimizācija",
            description:
            "Tīrs kods, ātra ielāde, mobilā pielāgotība un drošība. Rūpējamies, lai lapa būtu gan pieejama, gan konkurētspējīga rezultātos.",
        },
        {
            title: "Vietējā redzamība",
            description:
            "Palīdzam uzņēmumiem būt pamanāmiem konkrētā pilsētā vai reģionā – no Google kartēm līdz lokālajiem vaicājumiem.",
        },
        {
            title: "Stratēģija ilgtermiņam",
            description:
            "SEO nav vienas dienas darbs. Veidojam attīstības plānu ar rīcības soļiem, prioritātēm un rezultātu mērīšanu.",
        },
        {
            title: "Rezultātu uzraudzība",
            description:
            "Sejam, novērojam, novācam ražu. Mēs sekojam datiem un pielāgojam stratēģiju, lai panākumi būtu mērāmi un saprotami.",
        },
    ],
    google: [
        {
            title: "Kampaņas uzstādīšana",
            description:
            "Izveidojam Google Ads kontu, atlases segmentus, reklāmu struktūru un pārliecinošus tekstus – viss sākas ar pareizu pamatu.",
        },
        {
            title: "Atslēgvārdu stratēģija",
            description:
            "Balstoties uz biznesa mērķiem un auditoriju, izstrādājam atslēgvārdu plānu, kas nodrošina maksimālu atdevi no reklāmām.",
        },
        {
            title: "Budžeta sadalījums",
            description:
            "Iesakām optimālu budžeta sadalījumu starp kampaņām un reklāmu veidiem, lai katrs cents strādātu ar maksimālu efektivitāti.",
        },
        {
            title: "Testēšana un uzlabošana",
            description:
            "Ieviešam A/B testus, uzraugām rezultātus un veicam korekcijas. Pārbaudām, kas strādā – un no tā veidojam stratēģiju.",
        },
        {
            title: "Rīki un integrācijas",
            description:
            "Uzstādam Google Tag Manager, Analytics, konversijas mērķus, kā arī sinhronizāciju ar citām sistēmām, ja nepieciešams.",
        },
        {
            title: "Mēneša pārskats",
            description:
            "Katru mēnesi sagatavojam saprotamu pārskatu ar rezultātiem, atziņām un nākamajiem soļiem. Nav tikai klikšķi – ir skaidrs progress.",
        },
    ],
    facebook: [
        {
            title: "Konta uzstādīšana",
            description:
            "Izveidojam vai optimizējam Meta Business Manager kontu – ar precīzu struktūru, pikseļiem un piekļuves iestatījumiem.",
        },
        {
            title: "Auditorijas definēšana",
            description:
            "Izstrādājam mērķauditorijas – balstoties uz interesēm, uzvedību, vecumu, reģioniem un pielāgotiem datiem.",
        },
        {
            title: "Reklāmu dizains",
            description:
            "Veidojam vizuālus un tekstus, kas uzrunā tieši tavu auditoriju. Reklāma, kas neizskatās pēc reklāmas, bet piesaista uzmanību.",
        },
        {
            title: "Kampaņu struktūra",
            description:
            "Sakārtojam reklāmu grupas un testējam dažādus radošos risinājumus, lai noteiktu, kas strādā visefektīvāk.",
        },
        {
            title: "Datu mērīšana",
            description:
            "Uzstādam Meta Pixel, konversiju notikumus un integrācijas ar analītikas rīkiem. Rezultāti ir mērāmi, nevis minējumi.",
        },
        {
            title: "Pārskati un pielāgošana",
            description:
            "Reizi mēnesī sniedzam atskaiti ar kampaņu rezultātiem un uzlabojumu ieteikumiem. Nepārtraukta optimizācija ilgtermiņa atdevei.",
        },
    ],

};
