import "@/styles/globals.css";
import "animate.css/animate.min.css";
import type { AppProps } from "next/app";

//Fonts
import { amatic_sc, fredoka_one, oxygen } from "@/Fonts";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={`${amatic_sc.variable} ${fredoka_one.variable} ${oxygen.variable}`}>
      <Component {...pageProps} />
    </main>
  );
};

export default App;