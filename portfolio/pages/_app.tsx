import "../styles/globals.css";
import type { AppProps } from "next/app";
import "@coreui/coreui/dist/css/coreui.min.css";
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
