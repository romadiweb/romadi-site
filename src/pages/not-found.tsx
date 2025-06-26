import { Helmet } from "react-helmet-async";
export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white text-black px-4 py-20 text-center">
        <Helmet>
            <title>Lapa nav atrasta | Romadi</title>
            <meta
                name="description"
                content="Šķiet, ka šī lapa neeksistē vai ir pārvietota. Atgriezies sākumlapā vai sazinies ar mums, un mēs palīdzēsim atrast īsto vietu."
            />
            <meta property="og:title" content="Lapa nav atrasta – Romadi" />
            <meta
                property="og:description"
                content="Šī lapa diemžēl nav pieejama. Dodies uz sākumlapu vai sazinies ar Romadi komandu, ja nepieciešama palīdzība."
            />
            <meta property="og:image" content="https://romadi.lv/og/notfound.jpg" />
            <meta property="og:url" content="https://romadi.lv/404" />
        </Helmet>
        <h1 className="text-6xl font-bold mb-4 flex items-center gap-4">
            404
            <img 
            src="/icons/shocked-face.svg"
            alt=":O"
            className="w-13 h-13 hover:rotate-12"
            />
        </h1>
        <p className="text-xl text-gray-700 mb-3">
            Izskatās, ka šī lapa netika atrasta.
        </p>
        <p className="text-md text-gray-500 mb-6 max-w-md">
            Iespējams, ievadītais adreses ceļš nav pareizs, vai arī šī lapa vairs neeksistē. 
            Pārliecinies par adreses pareizību vai dodies atpakaļ uz sākumu.
        </p>
        <a
            href="/"
            className="btn bg-black text-white rounded-full px-6 hover:bg-neutral-800"
        >
            Atgriezties uz sākumu
        </a>
        </div>
    );
}
