import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
// import { Noto_Sans_KR } from "@next/font/google";
import { kamzic, chameleon } from "@/styles/fonts";

// const sans = Noto_Sans_KR({
//   subsets: ["latin"],
//   weight: ["100", "400", "500", "700", "900"],
// });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={kamzic.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
