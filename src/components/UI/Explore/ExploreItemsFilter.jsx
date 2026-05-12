import React from "react";

export default function ExploreItemsFilter({ status, setStatus }) {
  return (
    <div data-aos="fade-up">
      <select
        id="filter-items"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      >
        <option value="">Default</option>
        <option value="price_low_to_high">Price, Low to High</option>
        <option value="price_high_to_low">Price, High to Low</option>
        <option value="likes_high_to_low">Most liked</option>
      </select>
    </div>
  );
}
