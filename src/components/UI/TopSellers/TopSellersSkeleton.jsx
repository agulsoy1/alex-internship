import React from "react";

export default function TopSellersSkeleton() {
  return (
    <div className="col-md-12" data-aos="fade-up" data-aos-delay="300">
      <ol className="author_list">
        {Array.from({ length: 12 }).map((_, index) => (
          <li key={index}>
            <div className="author_list_pp">
              <div className="author__img--loading loading"></div>
            </div>
            <div className="author_list_info">
              <div className="author__name--loading loading"></div>
              <div className="author__price--loading loading"></div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
