import { Card } from "../ui/Card";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

export function MeetupItem({
  data,
  data: { id, title, image, address, description },
}) {
  const favoritesCtx = useContext(FavoritesContext);
  const itemIsFavorite = favoritesCtx.itemIsFavorite(id);

  function toggleFavoriteStatusHandler() {
    if (itemIsFavorite) {
      favoritesCtx.removeFavorite(id);
    } else {
      favoritesCtx.addFavorite(data);
    }
  }

  return (
    <Card>
      <div className="card">
        <img src={image} className="card-img-top" alt="img" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <address>{address}</address>
          <p className="card-text">{description}</p>
          <div
            onClick={toggleFavoriteStatusHandler}
            className="btn btn-primary"
          >
            {itemIsFavorite ? "Remove from favorites" : "To favorites"}
          </div>
        </div>
      </div>
    </Card>
  );
}
