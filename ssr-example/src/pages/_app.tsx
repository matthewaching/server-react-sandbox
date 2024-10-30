import "@/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
    return (
        <div id="app">
            <Component {...pageProps} />
        </div>
    )
}