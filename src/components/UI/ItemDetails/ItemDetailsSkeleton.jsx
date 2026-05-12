import React from "react";

export default function ItemDetailsSkeleton() {
  return (
    <section aria-label="section" className="mt90 sm-mt-0">
      <div className="container">
        <div className="row">
          <div
            className="col-md-6 text-center"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <div className="img-fluid img-rounded mb-sm-30 nft-image item__img--loading skeleton"></div>
          </div>
          <div className="col-md-6">
            <div
              className="item_info"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <div className="item_info_counts">
                <div className="item_info_views">
                  <i className="fa fa-eye"></i>
                  <div className="item__views--loading skeleton"></div>
                </div>
                <div className="item_info_like">
                  <i className="fa fa-heart"></i>
                  <div className="item__likes--loading skeleton"></div>
                </div>
              </div>
              <p className="item__desc--loading skeleton"></p>
              <div className="d-flex flex-row">
                <div className="mr40">
                  <h6 className="label__loading skeleton"></h6>
                  <div className="item_author">
                    <div className="author_list_pp">
                      <div className="owner__img--loading skeleton"></div>
                    </div>
                    <div className="author_list_info">
                      <div className="owner__name--loading skeleton"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="de_tab tab_simple">
                <div className="de_tab_content">
                  <div className="item_author">
                    <div className="author_list_pp">
                      <div className="owner__img--loading skeleton"></div>
                    </div>
                    <div className="author_list_info">
                      <div className="owner__name--loading skeleton"></div>
                    </div>
                  </div>
                </div>
                <div className="spacer-40"></div>
                <h6 className="label__loading skeleton"></h6>
                <div className="nft-item-price--loading">
                  <div className="price__icon--loading skeleton"></div>
                  <div className="item__price--loading skeleton"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}