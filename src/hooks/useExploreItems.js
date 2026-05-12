import { useEffect, useRef, useState } from "react";
import { getExploreItems } from "../services/nftAPI";

export default function useExplore() {
  const [loading, setLoading] = useState(true);
  const [allData, setAllData] = useState([]);
  const [visibleCount, setVisibleCount] = useState(8);
  const [status, setStatus] = useState("");
  const originalDataRef = useRef([]);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  useEffect(() => {
    if (!originalDataRef.current.length) return;

    if (status === "") {
      setAllData([...originalDataRef.current]);
      return;
    }

    const sortedData = [...allData];

    if (status === "price_low_to_high") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (status === "price_high_to_low") {
      sortedData.sort((a, b) => b.price - a.price);
    } else if (status === "likes_high_to_low") {
      sortedData.sort((a, b) => b.likes - a.likes);
    }
    setAllData(sortedData);
  }, [status]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await getExploreItems();
        originalDataRef.current = data;
        setAllData(data);
      };
      fetchData();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);
  return { allData, loading, visibleCount, status, setStatus, loadMore };
}
