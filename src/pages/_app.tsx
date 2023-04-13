import "@/styles/global.scss";
import type { AppProps } from "next/app";
import LayoutCore from "@/layouts/layoutCore";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LayoutCore>
      <Component {...pageProps} />
    </LayoutCore>
  );
}
