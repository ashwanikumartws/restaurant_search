import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";

import Image from "next/image";
import axios from "axios";
import { Searchresult } from "@/API/api-list";

const Cards = ({ posts }) => {
  const [card, setcard] = useState();
  async function fetchCompany() {
    const response = await axios
      .post(Searchresult, {
        address: posts?.googlelocationname,
        name: "",
      })
      .then((res) => {
        setcard(res?.data?.data.filter((item) => item?.slug !== posts.slug));
      })
      .catch((err) => {
        console.log(err, "fetchCompany error");
      });
    return response;
  }
  useEffect(() => {
    fetchCompany();
  }, [posts]);
  return (
    <div>
      <div className="related-products-wrapper">
        <Container>
          <hr className="seperator" />
          <h3 className="section-block-heading">People Also Searched For :</h3>
          <Row>
            {card?.slice(0, 4)?.map((item, index) => (
              <Col className="col-lg-3 col-md-3 col-sm-6 col-12" key={index}>
                <div className="related-products text-start">
                  <Link
                    href={`/companyprofile/${item?.slug}`}
                    style={{
                      display: "inline",
                      textDecoration: "none",
                      color: "#000",
                    }}
                  >
                    <Image
                      alt={item?.name}
                      src={item?.image || "/images/company_placeholder.webp"}
                      width={330}
                      height={230}
                      style={{
                        objectFit: "cover",
                        borderRadius: "10px",
                        backgroundColor: "#cbe2e1",
                        width: "100%",
                      }}
                    />
                    <h5 className="related-products-title">{item?.name}</h5>
                  </Link>
                  <p className="related-products-text">
                    {item?.googlelocationname}
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Cards;
