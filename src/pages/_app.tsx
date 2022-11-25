import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Header } from "components/Header";
import { Footer } from "components/Footer";
import "styles/global.scss";

export default function App({
  Component,
  pageProps,
}: AppProps) {
  const { asPath } = useRouter();

  return (
    <>
      <Header />
      <Component {...pageProps} />
      {asPath !== "/" && <Footer />}
    </>
  );
}
