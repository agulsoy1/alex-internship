import "../css/styles/author.css";
import useAuthorItems from "../hooks/useAuthorItems";
import AuthorItemsSkeleton from "../components/UI/Author/AuthorItemsSkeleton";
import AuthorItemsCard from "../components/UI/Author/AuthorItemsCard";

const Author = () => {
  const {author, loading, increaseFollowers} = useAuthorItems();

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