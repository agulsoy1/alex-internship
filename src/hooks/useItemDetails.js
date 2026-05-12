import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItemDetails } from "../services/nftAPI";

export default function useItemDetails() {
  const { nftId } = useParams();
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchItemDetails = async () => {
      try {
        const data = await getItemDetails(nftId);
        //   `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${nftId}`,
        setDetails(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchItemDetails();
  }, [nftId]);

  return { details, loading };
}
