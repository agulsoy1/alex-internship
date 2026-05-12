import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "../../../src/css/styles/hot-collections.css";
import HotCollectionsSkeleton from "../UI/HotCollections/HotCollectionsSkeleton";
import HotCollectionsCard from "../UI/HotCollections/HotCollectionsCard";
import useHotCollections from "../../hooks/useHotCollections";
import SliderButtons from "../UI/SliderButtons";

const HotCollections = () => {
  const { users, loading } = useHotCollections();
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slides: {
      perView: 4,
      spacing: 15,
    },

    breakpoints: {
      "(max-width: 991px)": {
        slides: {
          perView: 3,
          spacing: 12,
        },
      },
      "(max-width: 768px)": {
        slides: {
          perView: 2,
          spacing: 12,
        },
      },
      "(max-width: 576px)": {
        slides: {
          perView: 1,
          spacing: 12,
        },
      },
    },
  });

  const showSlider = !loading && users.length > 0;

  return (
    <section id="section-collections" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <div className="text-center">
              <h2>Hot Collections</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div
            className="slider__wrapper"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {showSlider && (
              <SliderButtons
                direction="left"
                onClick={() => instanceRef.current?.prev()}
              />
            )}
            {loading ? (
              <HotCollectionsSkeleton />
            ) : users.length === 0 ? (
              <div className="empty-state">No collections found.</div>
            ) : (
              <div ref={sliderRef} className="keen-slider">
                {users.map((user) => (
                  <HotCollectionsCard user={user} key={user.id} />
                ))}
              </div>
            )}
            {showSlider && (
              <SliderButtons
                direction="right"
                onClick={() => instanceRef.current?.next()}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default HotCollections;
