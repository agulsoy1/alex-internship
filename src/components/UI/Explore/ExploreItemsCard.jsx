import React from "react";
import Countdown from "../Countdown";
import { Link } from "react-router-dom";

export default function ExploreItemsCard({data}) {
  return (
    <div
      key={data.id}
      className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
      style={{ display: "block", backgroundSize: "cover" }}
    >
      <div className="nft__item" data-aos="fade-up" data-aos-delay="100">
        <div className="author_list_pp">
          <Link
            to={`/author/${data.authorId}`}
            data-bs-toggle="tooltip"
            data-bs-placement="top"
          >
            <img className="lazy" src={data.authorImage} alt="" />
            <i className="fa fa-check"></i>
          </Link>
        </div>
        {data.expiryDate && (
            <Countdown expiryDate={data.expiryDate}/>
        )}
        <div className="nft__item_wrap">
          <Link to={`/item-details/${data.nftId}`}>
            <img
              src={data.nftImage}
              className="lazy nft__item_preview"
              alt=""
            />
          </Link>
        </div>
        <div className="nft__item_info">
          <Link to={`/item-details/${data.nftId}`}>
            <h4>{data.title}</h4>
          </Link>
          <div className="nft__item_price">{data.price}</div>
          <div className="nft__item_like">
            <i className="fa fa-heart"></i>
            <span>{data.likes}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
