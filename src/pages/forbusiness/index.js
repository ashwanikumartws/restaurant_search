import React from "react";
import BusinessBanner from "@/components/ForBusinessPage/BusinessBanner/BusinessBanner";
import BusinessCards from "@/components/ForBusinessPage/BusinessCards/BusinessCards";
import BusinessCardsSecond from "@/components/ForBusinessPage/BusinessCardsSecond/BusinessCardsSecond";
import MickenseyBanner from "@/components/ForBusinessPage/MickenseyBanner/MickenseyBanner";
import Secure from "@/components/HomePage/Secure/Secure";
import Search from "@/components/HomePage/Search/Search";
import BusinessSecureData from "@/components/HomePage/Secure/BusinessSecureData";
import Head from "next/head";
const ForBusiness = () => {
  return (
    <div>
      <Head>
        <title>Page Title Here</title>
        <meta
          property="og:title"
          content="Page Title Here"
        />

        <meta
          name="description"
          content="Page content place here"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta charset="UTF-8" />
        <link
          rel="preload"
          href="//cdn-images.mailchimp.com/embedcode/classic-071822.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="//cdn-images.mailchimp.com/embedcode/classic-071822.css"
          />
        </noscript>
        <link
          rel="canonical"
          href={`https://example.com/forbusiness`}
        />
        <meta
          property="og:description"
          content="Get access to your current and future customers personal preferences. Treat every customer like a VIP"
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://example.com/forbusiness`}
        />
        <meta property="og:site_name" content="example" />
      </Head>
      <BusinessBanner />
      <Search />
      <BusinessCards />
      <MickenseyBanner />
      <BusinessCardsSecond />
      <PreferencesSecure data={BusinessSecureData} />
    </div>
  );
};

export default ForBusiness;
