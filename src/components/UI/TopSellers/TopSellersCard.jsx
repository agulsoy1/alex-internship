import React from "react";
import { Link } from "react-router-dom";

export default function TopSellersCard({user}) {
  return (
    <li className="authors" key={user.id}>
      <div className="author_list_pp">
        <div className="author__id">{user.id}.</div>
        <Link to={`/author/${user.authorId}`}>
          <img className="lazy pp-author" src={user.authorImage} alt="" />
          <i className="fa fa-check"></i>
        </Link>
      </div>
      <div className="author_list_info">
        <Link to={`/author/${user.authorId}`}>{user.authorName}</Link>
        <span>{user.price} ETH</span>
      </div>
    </li>
  );
}
