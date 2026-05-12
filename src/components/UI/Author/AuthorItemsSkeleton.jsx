import React from "react";

export default function AuthorItemsSkeleton() {
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top"></div>
      <section
        id="profile_banner"
        aria-label="section"
        className="text-light skeleton"
        data-bgimage="url(images/author_banner.jpg) top"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      ></section>

      <section aria-label="section">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="d_profile de-flex">
                <div className="de-flex-col">
                  <div className="profile_avatar">
                    <div className="profile__img--loading skeleton"></div>
                    <i className="fa fa-check"></i>
                    <div className="profile_name">
                      <h4>
                        <div className="author__name author__name--loading skeleton"></div>
                        <span className="profile_username profile_username--loading skeleton"></span>
                        <span
                          id="wallet"
                          className="profile_wallet profile_wallet--loading skeleton"
                        ></span>
                        <button
                          id="btn_copy"
                          className="btn__copy--loading skeleton"
                          title="Copy Text"
                        ></button>
                      </h4>
                    </div>
                  </div>
                </div>
                <div className="profile_follow de-flex">
                  <div className="de-flex-col">
                    <div className="profile_follower profile_follower--loading skeleton"></div>
                    <div className="btn-main"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
