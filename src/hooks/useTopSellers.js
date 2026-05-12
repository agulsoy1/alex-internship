import React, { useEffect, useState } from "react";
import { getTopSellers } from "../services/nftAPI";

export default function useTopSellers() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSellers = async () => {
      try {
        const data = await getTopSellers();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchSellers();
  }, []);

  return { users, loading };
}