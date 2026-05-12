import React from "react";
import { Link } from "react-router-dom";

export default function HotCollectionsCard({ user }) {

  return (
    <div className="keen-slider__slide">
      <div className="nft_coll">
        <div className="nft_wrap">
          <Link to={`/item-details/${user.nftId}`}>
            <img src={user.nftImage} className="lazy img-fluid" alt="" />
          </Link>
        </div>
        <div className="nft_coll_pp">
          <Link to={`/author/${user.authorId}`}>
            <img className="lazy pp-coll" src={user.authorImage} alt="" />
          </Link>
          <i className="fa fa-check"></i>
        </div>
        <div className="nft_coll_info">
          <Link to="/explore">
            <h4>{user.title}</h4>
          </Link>
          <span>ERC-{user.code}</span>
        </div>
      </div>
    </div>
  );
}
