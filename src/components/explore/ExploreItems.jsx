import "../../css/styles/exploreitems.css";
import ExploreItemsCard from "../UI/Explore/ExploreItemsCard";
import ExploreItemsSkeleton from "../UI/Explore/ExploreItemsSkeleton";
import ExploreItemsFilter from "../UI/Explore/ExploreItemsFilter";
import useExploreItems from "../../hooks/useExploreItems";

const ExploreItems = () => {
  const { allData, loading, visibleCount, status, setStatus, loadMore } =
    useExploreItems();

  return (
    <>
      <ExploreItemsFilter status={status} setStatus={setStatus} />
      {loading ? (
        <ExploreItemsSkeleton />
      ) : allData.length === 0 ? (
        <div className="empty-state">No collections found</div>
      ) : (
        allData
          .slice(0, visibleCount)
          .map((data) => <ExploreItemsCard data={data} key={data.id} />)
      )}
      <div
        className="col-md-12 text-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <button
          onClick={loadMore}
          id="loadmore"
          className="btn-main lead"
          style={{
            visibility: visibleCount < allData.length ? "visible" : "hidden",
          }}
        >
          Load more
        </button>
      </div>
    </>
  );
};

export default ExploreItems;
