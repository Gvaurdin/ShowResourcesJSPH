import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "@/styles/globals.css"

export default function App({ Component, pageProps }) {
    console.log('Component=', Component);
    return <>
        <main>
            <Header />
            <Component {...pageProps} />
            <Footer />
        </main>
    </>
}