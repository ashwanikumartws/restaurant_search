import React, { useEffect, useState } from "react";
import Head from "next/head";
import ContactBanner from "@/components/ContactPage/ContactBanner/ContactBanner";
import SearchResult from "@/components/SearchCompanyPage/SearchResult/SearchResult";
import { useRouter } from "next/router";

const SearchCompany = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  useEffect(() => {
    router.push(router.asPath);
  }, []);
  return (
    <div>
      <Head>
        <title>Search Company</title>
        <meta property="og:title" content="Search" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta charset="UTF-8" />
        <link rel="canonical" href={`https://example.com/`} />

        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://example.com/`} />
        <meta property="og:site_name" content="example" />
      </Head>
      <ContactBanner search={search} setSearch={setSearch} />
      <SearchResult itemsPerPage={10} />
    </div>
  );
};

export default SearchCompany;
