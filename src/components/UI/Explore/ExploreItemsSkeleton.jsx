import React from "react";
import "../../../css/NFTCards.css";

export default function ExploreItemsSkeleton() {
  return (
    <div className="loading__state--container">
      {Array.from({ length: 8 }).map((_, index) => (
        <div
          key={index}
          className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
          style={{ display: "block", backgroundSize: "cover" }}
        >
          <div className="nft__item ">
            <div className="author_list_pp">
              <div className="author__img--loading skeleton shimmer__loading"></div>
              <i className="fa fa-check"></i>
            </div>
            <div className="de_countdown de_countdown--loading skeleton"></div>

            <div className="nft__item_wrap">
              <div className="nft__img--loading skeleton"></div>
            </div>
            <div className="nft__item_info">
              <div className="nft__title--loading skeleton"></div>
              <div className="nft__price--loading skeleton"></div>
              <div className="nft__item_like">
                <div className="nft__likes--loading skeleton"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
