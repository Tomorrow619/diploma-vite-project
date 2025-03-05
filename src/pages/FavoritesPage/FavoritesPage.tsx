import React, { useEffect, useState } from "react";
import {
  FavoritesContainer,
  FavoritesTitle,
  FavoritesList,
  // FavoriteCard,
  EmptyMessage,
} from "./FavoritesPage.style";
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
  const [isNightMode, setIsNightMode] = useState(() => {
    return localStorage.getItem("theme") === "dark"; // Загружаем тему из localStorage
  });

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Сохраняем тему при изменении
  useEffect(() => {
    localStorage.setItem("theme", isNightMode ? "dark" : "light");
  }, [isNightMode]);

  const removeFavorite = (id: string) => {
    const updatedFavorites = favorites.filter((apartment) => apartment.id !== id);
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  if (favorites.length === 0) {
    return (
      <FavoritesContainer isNightMode={isNightMode}>
        <Header
          isNightMode={isNightMode}
          setIsNightMode={setIsNightMode}
          searchQuery=""
          onSeacrh={() => {}}
        />
        <FavoritesTitle>Избранное</FavoritesTitle>
        <EmptyMessage>Нет объектов в избранном.</EmptyMessage>
      </FavoritesContainer>
    );
  }

  return (
    <FavoritesContainer isNightMode={isNightMode}>
      <Header
        isNightMode={isNightMode}
        setIsNightMode={setIsNightMode}
        searchQuery=""
        onSeacrh={() => {}}
      />
      <FavoritesTitle>Избранное</FavoritesTitle>

      <FavoritesList>
        {favorites.map((apartment) => (
          // <FavoriteCard key={apartment.id}>
            <ListingCard
              apartment={apartment}
              isFavorite={favorites.some((fav) => fav.id === apartment.id)}
              onFavoriteToggle={() => removeFavorite(apartment.id)}
              isNightMode={isNightMode}
              setIsNightMode={setIsNightMode}
              searchQuery=""
              onSearch={() => {}}
            />
          // </FavoriteCard>
        ))}
      </FavoritesList>
    </FavoritesContainer>
  );
};
