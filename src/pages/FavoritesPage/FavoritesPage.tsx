import React, { useEffect, useState } from "react";
import {
  FavoritesContainer,
  FavoritesTitle,
  FavoritesList,
  FavoriteCard,
  EmptyMessage,
} from "./FavoritesPage.style"
import { ListingCard } from "../../components/Listing/ListingCard";
import { Header } from "../../components/UI/Header/Header";

interface Apartment {
  id: string;
  title: string;
  price: string;
  coverPhoto?: { url: string; title?: string };
}

export const FavoritesPage: React.FC = () => {
  const [favorites, setFavorites] = useState<Apartment[]>([]);
  const [isNightMode, setIsNightMode] = useState(false);

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
    <Header isNightMode={isNightMode} setIsNightMode={setIsNightMode} searchQuery={""} />
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
              isFavorite={favorites.some((fav) => fav.id === apartment.id)}
              onFavoriteToggle={() => removeFavorite(apartment.id)} isNightMode={false} setIsNightMode={function (value: React.SetStateAction<boolean>): void {
                throw new Error("Function not implemented.");
              } } searchQuery={""} onSearch={function (value: React.SetStateAction<string>): void {
                throw new Error("Function not implemented.");
              } }            />
          </FavoriteCard>
        ))}
      </FavoritesList>
    </FavoritesContainer>
  );
};
