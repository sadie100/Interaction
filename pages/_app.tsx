import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { Noto_Sans_KR } from "@next/font/google";
import styles from "@/styles/Home.module.scss";

const sans = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "900"],
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={`${sans.className} ${styles.main}`}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}

export default MyApp;
