import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import useCompany from "../../../context/Context";
import Link from "next/link";
import Loader from "../../Loader/Loader";
import ReactPaginate from "react-paginate";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
const SearchResult = ({ itemsPerPage }) => {
  const adminurl = process.env.REACT_ADMIN_URL;
  const { companies, searchInput, locationInput, loading } = useCompany();
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const searchParams = useSearchParams();

  const searchURL = searchParams.get("search");
  const locationsURL = searchParams.get("locations");
  const SearchLocation = searchInput && locationInput ? ", " : "";
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(companies?.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(companies?.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, companies]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % companies?.length;
    setItemOffset(newOffset);
  };

  const SearchresultData = () => {
    if (loading) {
      return <Loader />;
    } else if (!loading && companies?.length === 0) {
      return (
        <h2 className="no-record-found">
          No Result Found
          <div className="no-record-text">
            No matching company profiles have been found.&nbsp;
            <Link href={`${adminurl}register`}>Click Here</Link>
            &nbsp;to register your company.
          </div>
        </h2>
      );
    } else {
      return currentItems?.map((item, index) => (
        <Row className="mb-4 mt-5 search_bottom_border" key={index}>
          <Col className="col-md-3 col-lg-3 col-12">
            <Link
              href={`/companyprofile/${item.slug}`}
              state={{ company: item }}
              style={{ cursor: "pointer" }}
              onClick={() => {
                localStorage.setItem("company", JSON.stringify(item));
              }}
            >
              {item.image ? (
                <Image
                  className="img-fluid comapany_image"
                  src={item?.image}
                  alt={item?.name}
                  width={1000}
                  height={1000}
                />
              ) : (
                <Image
                  className="img-fluid comapany_image"
                  src="/images/company_placeholder.webp"
                  alt={"No Image"}
                  width={500}
                  height={500}
                />
              )}
            </Link>
            <div className="text-center">
              <Link href={`${adminurl}claimbusiness/${item?._id}`}>
                <button
                  className="claim_btn"
                  disabled={
                    item?.status?.includes("claimed") ||
                    item?.status?.includes("verifypending") ||
                    item?.status?.includes("verifymanually")
                  }
                >
                  {item?.status?.includes("verifypending") || item?.status?.includes("verifymanually")
                    ? "Claim Pending"
                    : "Claim this Business"
                  }
                </button>
              </Link>
            </div>
          </Col>
          <Col className="col-md-6 col-lg-6 col-12">
            <div className="profile-banner-absolute text-start">
              <Link
                href={`/companyprofile/${item.slug}`}
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
                      {item.status === "claimed" ? "Verified" : "Unverified"}
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
              <p className="company_bio">
                {item?.shortBio &&
                  (item?.shortBio?.length < 270
                    ? item?.shortBio
                    : `${item?.shortBio?.substring(0, 270)}...`)}
              </p>
              <div className="lable_btn_box">
                <label>
                  {item?.favCount ? item?.favCount : "0"} Text for this condition{" "}
                </label>
                <label>
                  {item?.prefSharedCount ? item?.prefSharedCount : "0"}{" "}
                  Your have been shared
                </label>
                <label>
                  {item?.perksCount ? item?.perksCount : "0"} People have received VIP perks
                </label>
                <label>
                  {item?.feedbackCount ? item?.feedbackCount : "0"} Feedbacks have been submitted
                </label>
              </div>
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
      ));
    }
  };
  return (
    <div className="search-company-wrapper">
      <Container>
        <Row>
          <Col className="col-md-12 col-lg-12 col-12">
            <h6 className="text-start pb-0">
              Showing Results for :
              {searchInput || locationInput ? (
                <span>
                  {" "}
                  {locationInput}
                  {SearchLocation}
                  {searchInput}
                </span>
              ) : (
                <span>
                  {" "}
                  {locationsURL && searchURL
                    ? locationsURL + ", " + searchURL
                    : locationsURL || searchURL}
                </span>
              )}
            </h6>
           {currentItems?.length !== 0 &&  <p style={{ fontSize: 20, fontWeight: 600 }}>
              Don't see your business listed? Add it to our database{" "}
              <u>
                <Link href={`${process.env.REACT_ADMIN_URL}register`}>
                  here
                </Link>
              </u>
            </p> }
          </Col>
        </Row>
        {SearchresultData()}
      </Container>

      <div className="custom-pagination">
        <ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={2}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          previousLabel="<"
          breakClassName="selected"
          renderOnZeroPageCount={null}
        />
        <Container>
          <Row>
            <Col className="col-md-12 col-lg-12 col-12">
          {currentItems?.length !== 0 && <p style={{ fontSize: 20, fontWeight: 600 }}>
                Don't see your business listed? Add it to our database{" "}
                <u>
                  <Link href={`${process.env.REACT_ADMIN_URL}register`}>
                    here
                  </Link>
                </u>
              </p> }
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default SearchResult;
