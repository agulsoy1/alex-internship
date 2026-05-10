import React from "react";

export default function SliderButtons({ direction, onClick }) {
  return(
    <button
      className={`${direction}__arrow arrows`}
      onClick={onClick}
    >
      ➩
    </button>
  );
}
