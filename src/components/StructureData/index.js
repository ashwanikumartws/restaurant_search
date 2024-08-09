import Head from "next/head";
import Script from "next/script";
export default function StructuredData({ data }) {
  return (
    <Head>
      <Script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: data}}
      />
    </Head>
  );
}
