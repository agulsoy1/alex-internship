import React from "react";
import "../../css/sliderButtons.css"

export default function SliderButtons({ direction, onClick }) {
  return(
    <button
      className={`${direction}__arrow arrows`}
      onClick={onClick}
    >
      <div className="arrow__background">
        ➤  
      </div>
      
    </button>
  );
}