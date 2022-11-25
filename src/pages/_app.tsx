import type { AppProps } from "next/app";
import { Header } from "components/Header";
import "styles/global.scss";
import { Footer } from "components/Footer";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
