import React from "react";
import Head from "next/head";
import DirectoryCard from "@/components/DirectoryPage/DirectoryCard";
import BusinessBanner from "@/components/ForBusinessPage/BusinessBanner/BusinessBanner";
import Search from "@/components/HomePage/Search/Search";

const Directory = () => {
  return (
    <div>
      <Head>
        <title>Site Title Here</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Meta Description here" />
        <meta charset="UTF-8" />
      </Head>
      <BusinessBanner />
      <Search />
      <DirectoryCard />
    </div>
  );
};

export default Directory;
