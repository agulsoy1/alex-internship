import React from "react";
import AuthorItems from "../../author/AuthorItems";

export default function AuthorItemsCard({ loading, author, increaseFollowers }) {
  return (
    <div
      className="no-bottom no-top"
      id="content"
      key={author.id}
      data-aos="fade-up"
      data-aos-delay="100"
    >
      <div id="top"></div>
      <section
        id="profile_banner"
        aria-label="section"
        className="text-light"
        data-bgimage="url(images/author_banner.jpg) top"
        style={{
          background: `url(${author.nftCollection?.[0]?.nftImage}) top`,
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
                  <div
                    className="profile_avatar"
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    <img src={author.authorImage} alt="" />

                    <i className="fa fa-check"></i>
                    <div className="profile_name">
                      <h4>
                        {author.authorName}
                        <span className="profile_username">{author.tag}</span>
                        <span id="wallet" className="profile_wallet">
                          {author.address}
                        </span>
                        <button id="btn_copy" title="Copy Text">
                          Copy
                        </button>
                      </h4>
                    </div>
                  </div>
                </div>
                <div
                  className="profile_follow de-flex"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <div className="de-flex-col">
                    <div className="profile_follower">{author.followers}</div>
                    <button
                      to="#"
                      className="btn-main"
                      onClick={increaseFollowers}
                    >
                      Follow
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="col-md-12"
              data-aos="fade-down"
              data-aos-delay="300"
            >
              <div className="de_tab tab_simple">
                <AuthorItems
                  loading={loading}
                  authorProfile={author.authorImage}
                  nftCollection={author.nftCollection}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
