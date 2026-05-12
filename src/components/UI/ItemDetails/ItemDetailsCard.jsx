import React from "react";
import { Link } from "react-router-dom";
import EthImage from "../../../images/ethereum.svg";

export default function ItemDetailsCard({details}) {
  return (
    <section aria-label="section" className="mt90 sm-mt-0">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 text-center"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src={details.nftImage}
              className="img-fluid img-rounded mb-sm-30 nft-image"
              alt=""
            />
          </div>
          <div className="col-md-6">
            <div
              className="item_info"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <h2>
                {details.title} #{details.tag}
              </h2>

              <div className="item_info_counts">
                <div className="item_info_views">
                  <i className="fa fa-eye"></i>
                  {details.views}
                </div>
                <div className="item_info_like">
                  <i className="fa fa-heart"></i>
                  {details.likes}
                </div>
              </div>
              <p>{details.description}</p>
              <div className="d-flex flex-row">
                <div className="mr40">
                  <h6>Owner</h6>
                  <div className="item_author">
                    <div className="author_list_pp">
                      <Link to={`/author/${details.ownerId}`}>
                        <img className="lazy" src={details.ownerImage} alt="" />
                        <i className="fa fa-check"></i>
                      </Link>
                    </div>
                    <div className="author_list_info">
                      <Link to={`/author/${details.ownerId}`}>
                        {details.ownerName}
                      </Link>
                    </div>
                  </div>
                </div>
                {/* <div></div> */}
              </div>
              <div className="de_tab tab_simple">
                <div className="de_tab_content">
                  <h6>Creator</h6>
                  <div className="item_author">
                    <div className="author_list_pp">
                      <Link to={`/author/${details.creatorId}`}>
                        <img
                          className="lazy"
                          src={details.creatorImage}
                          alt=""
                        />
                        <i className="fa fa-check"></i>
                      </Link>
                    </div>
                    <div className="author_list_info">
                      <Link to={`/author/${details.creatorId}`}>
                        {details.creatorName}
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="spacer-40"></div>
                <h6>Price</h6>
                <div className="nft-item-price">
                  <img src={EthImage} alt="" />
                  <span>{details.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}