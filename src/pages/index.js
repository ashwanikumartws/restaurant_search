/* eslint-disable @next/next/no-css-tags */
import Cards from "@/components/HomePage/Cards/Cards";
import Secure from "@/components/HomePage/Secure/Secure";
import HomeSecureData from "@/components/HomePage/Secure/HomeSecureData";
import Head from "next/head";
import HomeBanner from "@/components/HomePage/HomeBanner/HomeBanner";
const Home = () => {
  return (
    <div>
      <Head>
        <title>Site Name</title>
        <meta
          property="og:title"
          content="Meta content for site"
        />
        <meta
          name="description" content="Meta Description place here"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta charset="UTF-8" />
        <link rel="canonical" href={`https://example.com/`} />
        <meta property="og:description" content="Meta Description place here" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://example.com/`} />
        <meta property="og:site_name" content="example" />
      </Head>
      <HomeBanner />
      <Cards />
      <Secure data={HomeSecureData} />
    </div>
  );
};

export default Home;
