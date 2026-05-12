import "../../css/styles/topsellers.css";
import TopSellersSkeleton from "../UI/TopSellers/TopSellersSkeleton";
import TopSellersCard from "../UI/TopSellers/TopSellersCard";
import useTopSellers from "../../hooks/useTopSellers";

const TopSellers = () => {
  const { users, loading } = useTopSellers();

  return (
    <section id="section-popular" className="pb-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <div className="text-center">
              <h2>Top Sellers</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          {loading ? (
            <TopSellersSkeleton/>
          ) : (
            <ol className="author_list" data-aos="fade-up">
              {users.map((user) => (
                <TopSellersCard user={user} key={users.id}/>
              ))}
            </ol>
          )}
        </div>
      </div>
    </section>
  );
};

export default TopSellers;
