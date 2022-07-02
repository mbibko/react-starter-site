import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import { MeetupListGrid } from "../components/meetups/MeetupListGrid";

export function Favorites() {
  const favoriteCtx = useContext(FavoritesContext);
  return (
    <div>
      <h1>My Favorites</h1>
      {favoriteCtx.totalFavorites === 0 ? (
        <p>No favorites here, add some...</p>
      ) : (
        <MeetupListGrid data={favoriteCtx.favorites} />
      )}
    </div>
  );
}
