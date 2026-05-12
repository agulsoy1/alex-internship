import React from "react";

export default function NewItemsSkeleton() {
  return (
    <div className="loading__state--container">
      {Array.from({ length: 4 }).map((_, index) => (
        <div className="nft__item" key={index}>
          <div className="author_list_pp">
            <div className="author__img--loading skeleton"></div>
          </div>
          <div className="nft__item_wrap">
            <div className="nft__item_extra"></div>
            <div className="nft__img--loading skeleton"></div>
          </div>
          <div className="nft__item_info">
            <div className="nft__title--loading skeleton"></div>
            <div className="nft__price--loading skeleton"></div>
          </div>
        </div>
      ))}
    </div>
  );
}