import { createContext, useState } from "react";

const FavoritesContext = createContext({});

export function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(item) {
    setUserFavorites((favorites) => [...favorites, item]);
  }

  function removeFavoriteHandler(id) {
    setUserFavorites((favorites) => favorites.filter((item) => item.id !== id));
  }

  function itemIsFavoriteHandler(id) {
    return userFavorites.some((item) => item.id === id);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
