import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import "../../css/styles/new-items.css";
import NewItemsSkeleton from "../UI/NewItems/NewItemsSkeleton";
import NewItemsCard from "../UI/NewItems/NewItemsCard";
import SliderButtons from "../UI/SliderButtons";
import useNewItems from "../../hooks/useNewItems";

const sliderOptions = {
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
};

const NewItems = () => {
  const {items, loading} = useNewItems();
  const [sliderRef, instanceRef] = useKeenSlider(sliderOptions);
  const showSlider = !loading && items.length > 0;

  return (
    <section id="section-items" className="no-bottom">
      <div className="container">
        <div className="row">
          <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
            <div className="text-center">
              <h2>New Items</h2>
              <div className="small-border bg-color-2"></div>
            </div>
          </div>
          <div
            className="slider__wrapper"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            {showSlider && (
              <SliderButtons
                direction="left"
                onClick={() => instanceRef.current?.prev()}
              />
            )}
            {loading ? (
              <NewItemsSkeleton />
            ) : items.length === 0 ? (
              <div className="empty-state">No collections found</div>
            ) : (
              <div ref={sliderRef} className="keen-slider">
                {items?.map((item) => (
                  <NewItemsCard key={item.id} item={item} />
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

export default NewItems;
