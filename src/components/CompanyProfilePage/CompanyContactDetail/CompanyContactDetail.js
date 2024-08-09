import React from "react";
import phone from "@/images/phone.png";
import website from "@/images/website.png";
import location from "@/images/location_black.png";
import Image from "next/image";
import Link from "next/link";

const CompanyContactDetail = ({ company }) => {
  const adminurl = process.env.REACT_ADMIN_URL;
  const buttonLable =
    company?.buttonLable === undefined ||
    company?.bookingLink === undefined ||
    company?.buttonLable === null ||
    company?.buttonLable === "" ||
    company?.bookingLink === ""
      ? true
      : false;
  return (
    <div>
      <div className="contact-detail-area">
        <div className="contact-row d-flex text-start">
          <div className="contact-icon">
            <Image alt="phone" src={phone} />
          </div>
          <div className="contact-text">Phone - {company?.mobileNo}</div>
        </div>
        <div className="contact-row d-flex text-start">
          <div className="contact-icon">
            <Image alt="website" src={website} />
          </div>
          <div className="contact-text website">
            {(company?.website && company?.website?.includes("https://")) ||
            company?.website?.includes("http://") ? (
              <Link href={`${company?.website}`} target={`_blank`}>
                {company?.website}
              </Link>
            ) : (
              <Link href={`https://${company?.website}`} target={`_blank`}>
                {company?.website}
              </Link>
            )}
          </div>
        </div>
        <div className="contact-row d-flex text-start">
          <div className="contact-icon">
            <Image alt="location" src={location} />
          </div>
          <div className="contact-text">
            <Link
              href={`https://www.google.ca/maps/place/${company?.address}`}
              target={`_blank`}
              style={{ color: "black", textDecoration: "none" }}
            >
              {company?.address}
            </Link>
          </div>
        </div>
        <div className="text-center">
          <Link href={`${adminurl}claimbusiness/${company?._id}`}>
            <button
              className="claim_btn"
              onClick={() => console.log(company?._id, "click")}
              disabled={
                company?.status?.includes("claimed") ||
                company?.status?.includes("verifypending") ||
                company?.status === undefined
              }
            >
              {company?.status?.includes("verifypending")
                ? "Pending Claim"
                : "Claim this Business"}
            </button>
          </Link>
        </div>
      </div>
      <div className="text-center">
        {company?.bookingLink ? (
          <Link href={`${company?.bookingLink || ""}`}>
            <button className="reserve_btn" disabled={buttonLable}>{`${
              company?.buttonLable || "Link"
            }`}</button>
          </Link>
        ) : (
          <button className="reserve_btn" disabled={buttonLable}>{`${
            company?.buttonLable || "Link"
          }`}</button>
        )}
      </div>
    </div>
  );
};

export default CompanyContactDetail;
