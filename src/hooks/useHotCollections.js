import React, { useEffect, useState } from "react";
import { getHotCollections } from "../services/nftAPI";

export default function useHotCollections() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getHotCollections();
          // "https://us-central1-nft-cloud-functions.cloudfunctions.net/hotCollections",
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return { users, loading };
}
