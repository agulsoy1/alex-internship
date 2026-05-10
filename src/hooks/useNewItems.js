import React, { useEffect, useState } from "react";
import { getNewItems } from "../services/nftAPI";

export default function useNewItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNewItems = async () => {
      try {
        const data = await getNewItems();
        setItems(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchNewItems();
  }, []);

  return { items, loading };
}
