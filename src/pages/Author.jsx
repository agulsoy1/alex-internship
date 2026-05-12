import React, { useEffect, useState } from "react";
import AuthorBanner from "../images/author_banner.jpg";
import AuthorItems from "../components/author/AuthorItems";
import { Link, useLocation, useParams } from "react-router-dom";
import AuthorImage from "../images/author_thumbnail.jpg";
import axios from "axios";
import "../css/styles/author.css";
import useAuthorItems from "../hooks/useAuthorItems";
import AuthorItemsSkeleton from "../components/UI/Author/AuthorItemsSkeleton";
import AuthorItemsCard from "../components/UI/Author/AuthorItemsCard";

const Author = () => {
  const location = useLocation();
  const authorFromState = location.state?.author;
  const [followerCount, setFollowerCount] = useState();
  const {author, setAuthor, loading, setLoading, increaseFollowers} = useAuthorItems();

  return (
    <div id="wrapper">
      {loading ? (
        <AuthorItemsSkeleton/>
      ) : (
        author && (
          <AuthorItemsCard author={author} increaseFollowers={increaseFollowers}/>
        )
      )}
    </div>
  );
};

export default Author;
