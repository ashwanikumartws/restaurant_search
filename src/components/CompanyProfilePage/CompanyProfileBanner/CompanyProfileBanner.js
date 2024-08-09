/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import verifiedIcon from "@/images/verified.png";
import locationIcon from "@/images/location-red.png";
import { getAllCategories } from "../../../API/useApi";
import ImageLoader from "../../Loader/ImageLoader";
import Image from "next/image";

const companyImageStyle = {
  height: "85vh",
  objectFit: "cover",
  width: "100%",
};
const placeholderImageStyle = {
  height: "85vh",
  objectFit: "cover",
};
const CompanyProfileBanner = ({ company }) => {
  const [categoryidName, setCategoryidName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  let style = company?.image ? companyImageStyle : placeholderImageStyle;
  useEffect(() => {
    setIsLoading(true);
    if (company?.image) {
      setIsLoading(false);
    } else {
      setIsLoading(true);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, [company]);

  const fetchCategories = async () => {
    const res = await getAllCategories();
    try {
      if (res) {
        setCategoryidName(
          res.data
            ?.filter((item) => item._id == company?.categoryId)
            ?.reduce((prev, curr) => curr, {}).categoryName
        );
      } else {
        setCategoryidName("");
        console.log("response not found");
      }
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="profile-banner position-relative">
      {company?.image && isLoading ? (
        <div
          className="img-fluid profile-banner-image"
          style={{ height: "55vh", objectFit: "cover", width: "100%" }}
        >
          <ImageLoader />
        </div>
      ) : (
        <Image
          src={company?.image || "/images/company_placeholder.webp"}
          className="img-fluid profile-banner-image"
          style={style}
          alt={company?.name}
          width={1000}
          height={1000}
        />
      )}

      <Container>
        <div className="profile-banner-absolute position-absolute text-start">
          <div>
            <h1 style={{ display: "inline" }}>{company?.name}</h1>
            <span
              className={`verified-label ${
                company?.status === "claimed" ? "verify" : "Not Claimed"
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
                  company?.status === "claimed" ? "verify" : "Not Claimed"
                }`}
              >
                {company?.status === "claimed" ? "Verified" : "Unverified"}
              </span>
            </span>
          </div>
          <div className="profile-location">
            <span className="location-icon">
              <Image
                alt="locationIcon"
                className="img-fluid"
                src={locationIcon}
              />
            </span>
            <h3>
              {company?.city === undefined
                ? company?.googlelocationname
                : company?.city}
            </h3>
          </div>
          <ul className="profile-banner-ul">
            <li>{categoryidName}</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default CompanyProfileBanner;
