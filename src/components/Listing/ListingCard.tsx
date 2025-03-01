// ListingCard.tsx
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  ListingCardContainer,
  ListingImage,
  ListingTitle,
  ListingPrice,
  FavoriteButton,
  ErrorText,
} from "./Listing.style";

export interface Apartment {
  id: string;
  title: string;
  price: string;
  coverPhoto?: { url: string; title?: string };
  location?: string;
  area?: string;
}

interface ListingCardProps {
  apartment: Apartment;
  isNightMode: boolean;
  isFavorite: boolean;
  onFavoriteToggle: (apartment: Apartment) => void;
  // onSearch: React.Dispatch<React.SetStateAction<string>>;
  // searchQuery: string;
  // setIsNightMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const ListingCard: React.FC<ListingCardProps> = ({
  apartment,
  isNightMode,
  isFavorite,
  onFavoriteToggle,
}) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/card/${apartment.id}`, { state: apartment });
  };

  return (
    <ListingCardContainer isNightMode={isNightMode} onClick={handleClick}>
      <div style={{ marginBottom: "15px" }}>
        {apartment.coverPhoto ? (
          <ListingImage
            src={apartment.coverPhoto.url}
            alt={apartment.coverPhoto.title || "Изображение"}
          />
        ) : (
          <ErrorText>Фото отсутствует</ErrorText>
        )}
      </div>
      <ListingTitle>{apartment.title}</ListingTitle>
      <ListingPrice>{apartment.price} AED</ListingPrice>
      <div style={{ marginBottom: "20px" }}>
        <FavoriteButton
          isFavorite={isFavorite}
          onClick={(e) => {
            e.stopPropagation();
            onFavoriteToggle(apartment);
          }}
        />
      </div>
    </ListingCardContainer>
  );
};
