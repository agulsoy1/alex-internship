import "../css/styles/itemDetails.css";
import useItemDetails from "../hooks/useItemDetails";
import ItemDetailsSkeleton from "../components/UI/ItemDetails/ItemDetailsSkeleton";
import ItemDetailsCard from "../components/UI/ItemDetails/ItemDetailsCard";

const ItemDetails = () => {
  const { details, loading } = useItemDetails();

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>
        {loading ? (
          <ItemDetailsSkeleton/>
        ) : (
          details && (
            <ItemDetailsCard details={details} loading={loading}/>
          )
        )}
      </div>
    </div>
  );
};

export default ItemDetails;