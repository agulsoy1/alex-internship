import React from "react";
import { Link } from "react-router-dom";

export default function HotCollectionsSkeleton() {
  return (
    <div className="nft__loading--container">
      {Array.from({ length: 4 }).map((_, index) => (
        <div className="nft_coll nft_coll--loading" key={index}>
          <div className="nft_wrap">
            <div className="lazy img-fluid nft__img--loading skeleton"></div>
          </div>
          <div className="nft_coll_pp">
            <div className="lazy pp-coll nft__author-img--loading skeleton"></div>
          </div>
          <div className="nft_coll_info">
            <div className="nft__title--loading skeleton"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
