import React, { useEffect, useState } from "react";
import { getAuthorItems } from "../services/nftAPI";
import { useParams } from "react-router-dom";

export default function useAuthorItems() {
  const { authorId } = useParams();
  const [author, setAuthor] = useState([]);
  const [loading, setLoading] = useState(true);

  const increaseFollowers = () => {
    setAuthor((prev) => ({
      ...prev,
      followers: prev.followers + 1,
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);

    const getAuthor = async () => {
      try {
        const data = await getAuthorItems(authorId);
        setAuthor(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    getAuthor();
  }, [authorId]);

  return { author, setAuthor, loading, setLoading, increaseFollowers };
}
