import React from "react";
import dynamic from "next/dynamic";
import { Container, Row, Col } from "react-bootstrap";
const CompanyProfileDetail = dynamic(() =>
  import(
    "@/components/CompanyProfilePage/CompanyProfileDetail/CompanyProfileDetail"
  ),
  { ssr: false }
);
const CompanyContactDetail = dynamic(() =>
  import(
    "@/components/CompanyProfilePage/CompanyContactDetail/CompanyContactDetail"
  ),
  { ssr: false }
);
const Cards = dynamic(() =>
  import("@/components/CompanyProfilePage/Cards/Cards"),
  { ssr: false }
);
import axios from "axios";

import { getOneCompany } from "@/API/api-list.js";
import { useRouter } from "next/router";
import Head from "next/head";
import CompanyProfileBanner from "@/components/CompanyProfilePage/CompanyProfileBanner/CompanyProfileBanner";

const CompanyProfile = ({ posts, title, shortBio }) => {
  const router = useRouter();
  const { asPath } = router;
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta name="description" content={shortBio?.substring(0, 130)} />
        <meta charset="UTF-8" />
        <meta
          property="og:image"
          content={posts?.image}
          alt={title}
          src={posts?.image}
        />
        <link rel="canonical" href={`https://example.com${asPath}`} />
        <meta property="og:description" content={shortBio?.substring(0, 130)} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={title} />
        <meta
          property="og:url"
          content={`https://example.com${asPath}`}
        />
        <meta property="og:site_name" content="example" />
      </Head>
      <CompanyProfileBanner company={posts} />

      <div className="company-profile-wrapper">
        <Container>
          <Row>
            <Col className="col-lg-8 col-md-7 col-12">
              <CompanyProfileDetail company={posts} />
            </Col>
            <Col className="col-lg-4 col-md-5 col-12">
              <CompanyContactDetail company={posts} />
            </Col>
          </Row>
        </Container>
      </div>
      <Cards posts={posts} />
    </div>
  );
};

export async function getServerSideProps(context) {
  const { id } = context?.params;
  try {
    const response = await axios.post(getOneCompany, {
      slug: id,
    });
    const postdata = response?.data?.data
      .filter((item, index) => index === 0)
      .reduce((prev, curr) => {
        return curr;
      });

    return {
      props: {
        posts: postdata || {},
        shortBio: postdata?.shortBio || "",
        title:
          postdata?.name?.replace(/[^a-zA-Z ]/g, "") +
          " " +
          postdata?.city +
          " " +
          postdata?.state,
      },
    };
  } catch {
    return {
      props: {
        posts: {},
        shortBio: "",
        title: "",
      },
    };
  }
}
export default CompanyProfile;
