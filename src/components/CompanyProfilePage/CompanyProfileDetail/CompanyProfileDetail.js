import React from "react";
import Link from "next/link";
import shareIcon from "@/images/share.png";
import Image from "next/image";

const CompanyProfileDetail = ({ company }) => {
  return (
    <div className="text-start">
      <div className="share-link-text">
        <Link href="/" className="share-link">
          <span>
            <Image alt="shareIcon" className="img-fluid" src={shareIcon} />
          </span>
          <span>Connect With This Business</span>
        </Link>
        <span className="">
          Learn More - Enhance your experiences with this business
        </span>
      </div>
      <h2 className="section-block-heading">About {company?.name}</h2>
      <div className="company-profile-area">
        <h5>Overview</h5>
        <p className="company_bio">{company?.shortBio?.replaceAll("\n", " ")}</p>

        <h5>Highlights</h5>
        <ul>
          <li>
            {company?.favCount ? company?.favCount : "0"} People have{" "}
            {company?.name} as a Favorite{" "}
          </li>
          <li>
            {company?.prefSharedCount ? company?.prefSharedCount : "0"}{" "}
            preferences have been shared with {company?.name}
          </li>
          <li>
            {company?.perksCount ? company?.perksCount : "0"} people have
            received VIP perks from {company?.name}
          </li>
          <li>
            {company?.feedbackCount ? company?.feedbackCount : "0"} micro
            feedbacks have been submitted to {company?.name}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CompanyProfileDetail;
