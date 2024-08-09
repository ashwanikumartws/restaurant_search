import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Link from "next/link";
import verifiedIcon from "@/images/verified.png";
import locationIcon from "@/images/location-red.png";
import phoneIcon from "@/images/phone.png";
import placeHolderImage from "@/images/placeholder-image.webp";
import webIcon from "@/images/website.png";
import DirectoryCardData from "..";
import Image from "next/image";

const DirectoryCard = () => {
  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Directory</h2>
      <div className="search-company-wrapper">
        <Container>
          {DirectoryCardData?.data?.map((item, index) => (
            <Row className="mb-4 mt-5 search_bottom_border" key={index}>
              <Col className="col-md-3 col-lg-3 col-12">
                <Link
                  href={`/companyProfile/${item.slug}`}
                  state={{ company: item }}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    localStorage.setItem("company", JSON.stringify(item));
                  }}
                >
                  {item.image ? (
                    <Image
                      className="img-fluid comapany_image"
                      src={item.image}
                      alt={item.name}
                    />
                  ) : (
                    <Image
                      className="img-fluid comapany_image"
                      src={placeHolderImage}
                      alt={"No Image"}
                    />
                  )}
                </Link>
              </Col>
              <Col
                className="col-md-6 col-lg-6 col-12"
                style={{ alignSelf: "center" }}
              >
                <div className="profile-banner-absolute text-start">
                  <Link
                    href={`/companyProfile/${item.slug}`}
                    state={{ company: item }}
                    style={{ cursor: "pointer", textDecoration: "none" }}
                  >
                    <h1>
                      {item.name}
                      <span
                        className={`verified-label ${
                          item.status === "claimed" ? "verify" : "Not Claimed"
                        }`}
                      >
                        <span className="verified-icon">
                          <Image
                            alt="verifiedIcon"
                            className="img-fluid"
                            src={verifiedIcon}
                          />
                        </span>
                        <span
                          className={`verified_tittle ${
                            item.status === "claimed" ? "verify" : "Not Claimed"
                          }`}
                        >
                          {item.status === "claimed"
                            ? "Verified"
                            : "Unverified"}
                        </span>
                      </span>
                    </h1>
                  </Link>
                  <div className="profile-location">
                    <span className="location-icon">
                      <Image
                        alt="locationIcon"
                        className="img-fluid"
                        src={locationIcon}
                      />
                    </span>
                    <span className="new_park">{item.address}</span>
                  </div>
                  <p>{item?.shortBio}</p>
                </div>
              </Col>
              <Col className="col-md-3 col-lg-3 col-12">
                <div className="contact_info_box">
                  <div className="contact-row d-flex text-start">
                    <div className="contact-icon">
                      <Image alt="phoneIcon" src={phoneIcon} />
                    </div>
                    <div className="contact-text">Phone - {item.mobileNo}</div>
                  </div>
                  <div className="contact-row d-flex text-start">
                    <div className="contact-icon">
                      <Image alt="webIcon" src={webIcon} />
                    </div>
                    <div className="contact-text website">
                      {item?.website?.includes("https://") ||
                      item?.website?.includes("http://") ? (
                        <Link href={`${item.website}`} target={`_blank`}>
                          {item?.website}
                        </Link>
                      ) : (
                        <Link href={`https://${item?.website}`} target={`_blank`}>
                          {item.website}
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          ))}
        </Container>
      </div>
    </div>
  );
};

export default DirectoryCard;
