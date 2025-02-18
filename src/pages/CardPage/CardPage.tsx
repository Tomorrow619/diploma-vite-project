import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  SCardPage,
  CardTitle,
  CardPrice,
  CardLocation,
  CardArea,
  CardImage,
} from "./CardPage.style"

import { Header } from "../../components/UI/Header/Header";

interface Detail {
  id: string;
  title: string;
  price: string;
  location?: string;
  area?: string;
  coverPhoto?: { url: string; title?: string };
}

export const CardPage: React.FC = () => {
  const [isNightMode, setIsNightMode] = useState(true);
  const location = useLocation();
  const { id } = useParams(); // Получаем ID из URL
  const [apartment, setApartment] = useState<Detail | null>(
    location.state || null
  );

  // Загружаем данные, если apartment === null
  useEffect(() => {
    if (!apartment && id) {
      fetchApartmentById(id);
    }
  }, [id]);

  const fetchApartmentById = async (apartmentId: string) => {
    
    try {
      const response = await fetch(
        `https://bayut.p.rapidapi.com/properties/detail?externalID=${apartmentId}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-key":
              "9262b33bf3msh3d4bfa6d0451b7bp10f1b0jsnd801f9a5c02d",
            "x-rapidapi-host": "bayut.p.rapidapi.com",
          },
        }
      );

      const data = await response.json();
      setApartment({
        id: data.externalID,
        title: data.title || "Без названия",
        price: data.price || "Цена не указана",
        location: data.location ? data.location[0]?.name : "Неизвестно",
        area: data.area ? `${data.area} кв.м` : "Не указано",
        coverPhoto: data.coverPhoto || null,
      });
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
    }
  };

  if (!apartment) {
    return <SCardPage isNightMode={isNightMode}>Загрузка...</SCardPage>;
  }

  return (
    
    <SCardPage isNightMode={isNightMode}>
      <Header isNightMode={isNightMode} setIsNightMode={setIsNightMode} />
      <CardTitle>{apartment.title}</CardTitle>
      <CardPrice>Цена: {apartment.price} AED</CardPrice>
      <CardLocation>
        Расположение:{" "}
        {Array.isArray(apartment.location)
          ? apartment.location.map((loc) => loc.name).join(",") || "Не указано"
          : apartment.location || "Не указано"}
      </CardLocation>
      <CardArea>Площадь: {apartment.area || "Не указано"}</CardArea>
      {apartment.coverPhoto && (
        <CardImage
          src={apartment.coverPhoto.url}
          alt={apartment.coverPhoto.title || "Изображение"}
        />
      )}
    </SCardPage>
  );
};
