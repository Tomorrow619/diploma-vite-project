import React, { useEffect, useState } from "react";
import {
  FavoritesContainer,
  FavoritesTitle,
  FavoritesList,
  FavoriteCard,
  EmptyMessage,
} from "./FavoritesPage.style"
import { ListingCard } from "../../components/Listing/ListingCard";

interface Apartment {
  id: string;
  title: string;
  price: string;
  coverPhoto?: { url: string; title?: string };
}

export const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Apartment[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const removeFavorite = (id: string) => {
    const updatedFavorites = favorites.filter((apartment) => apartment.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (favorites.length === 0) {
    return (
      <FavoritesContainer>
    
        <FavoritesTitle>Избранное</FavoritesTitle>
        <EmptyMessage>Нет объектов в избранном.</EmptyMessage>
      </FavoritesContainer>
    );
  }

  return (
    <FavoritesContainer>
      
      <FavoritesTitle>Избранное</FavoritesTitle>

      <FavoritesList>
        {favorites.map((apartment) => (
          <FavoriteCard key={apartment.id}>
            <ListingCard
              apartment={apartment}
              isFavorite={true}
              onFavoriteToggle={() => removeFavorite(apartment.id)}
            />
          </FavoriteCard>
        ))}
      </FavoritesList>
    </FavoritesContainer>
  );
};
