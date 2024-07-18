import "@/styles/globals.css";
import "@/utils/fortawesomeconfig";
import Head from "next/head";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script async={false} src="https://zeffy-scripts.s3.ca-central-1.amazonaws.com/embed-form-script.min.js" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

