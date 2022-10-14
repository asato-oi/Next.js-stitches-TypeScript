// import '../styles/globals.css'
import { normalize } from "../styles/normalize.ts";
import { globalCss } from "../styles/stitches.config";
import { reset } from "../styles/reset.ts";
import type * as Stitches from "@stitches/react";
import type { AppProps } from "next/app";

const customGlobalStyles: Record<string, Stitches.CSS> = {
  body: {
    // backgroundColor: "#131313",
  },
};

const globalStyles = globalCss(...normalize, reset, customGlobalStyles);

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />;
}

export default MyApp;
