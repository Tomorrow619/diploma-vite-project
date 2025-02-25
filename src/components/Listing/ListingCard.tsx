import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  SListing,
  ListingCardContainer,
  ListingImage,
  ListingTitle,
  ListingPrice,
  FavoriteButton,
  ErrorText,
  PaginationContainer,
  PaginationButton,
  Loader,
} from "./Listing.style";


interface Apartment {
  id: string;
  title: string;
  price: string;
  coverPhoto?: { url: string; title?: string };
  location?: string;
  area?: string;
}
// import React from 'react';

interface ListingCardProps {
  isNightMode: boolean;
  setIsNightMode: React.Dispatch<React.SetStateAction<boolean>>;
  searchQuery: string;
  onSearch: React.Dispatch<React.SetStateAction<string>>;
}


export const ListingCard: React.FC<ListingCardProps & {searchQuery:string}>  = ({isNightMode,setIsNightMode}) => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;
  const [searchQuery,setSearchQuery]=useState<string>("")
  const navigate = useNavigate();
useEffect(()=>{
  fetchApartmentData()
},[])
  const handleClick = (apartment: Apartment) => {
    navigate(`/card/${apartment.id}`, { state: apartment });
  };

  const fetchApartmentData = async () => {
    const url =
      "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "f8560917c8mshc5ca660f1cbb6e8p1af4d9jsn92c7ddbdc745",
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "Content-Type": "application/json", // Убедитесь, что заголовки в правильной кодировке
      },
    };
  
    try {
      setLoading(true);
      const response = await fetch(url, options);
      
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      setApartments(
        data.hits.map((hit: any) => ({
          id: hit.id,
          title: hit.title || "Название не указано",
          price: hit.price || "Цена не указана",
          location: hit.location || "Расположение не указано",
          area: hit.area || "Площадь не указана",
          coverPhoto: hit.coverPhoto || null,
        }))
      );
    } catch (error: any) {
      setError(error.message || "Произошла ошибка при загрузке данных");
    } finally {
      setLoading(false);
    }
  };
  
//Поиск по названию
  useEffect(() => {
    fetchApartmentData();
  }, []);
  const filteredApartments = apartments.filter(apartment =>
    apartment.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  if (loading) return <Loader>Загрузка...</Loader>;
  if (error) return <ErrorText>{error}</ErrorText>;
  if (filteredApartments.length === 0) return <ErrorText>Нет доступных объектов.</ErrorText>;




  const totalPages = Math.ceil(apartments.length / itemsPerPage);
  const currentApartments = apartments.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  if (loading) return <Loader>Загрузка...</Loader>;
  if (error) return <ErrorText>{error}</ErrorText>;
  if (apartments.length === 0) return <ErrorText>Нет доступных объектов.</ErrorText>;

  return (
    <>
      <SListing isNightMode={isNightMode} >
        {currentApartments.map((apartment) => (
          <ListingCardContainer isNightMode={isNightMode}  key={apartment.id} onClick={() => handleClick(apartment)}>
            <div style={{ marginBottom: "15px" }}>
              {apartment.coverPhoto ? (
                <ListingImage src={apartment.coverPhoto.url} alt={apartment.coverPhoto.title || "Изображение"} />
              ) : (
                <ErrorText>Фото отсутствует</ErrorText>
              )}
            </div>
            <ListingTitle>{apartment.title}</ListingTitle>
            <ListingPrice>{apartment.price}AED</ListingPrice>
            <div style={{ marginBottom: "20px" }}>
              <FavoriteButton isFavorite={false}></FavoriteButton>
            </div>
          </ListingCardContainer>
        ))}
      </SListing>
      <PaginationContainer>
        <PaginationButton onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Назад
        </PaginationButton>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationButton key={index} onClick={() => handlePageChange(index + 1)} isActive={currentPage === index + 1}>
            {index + 1}
          </PaginationButton>
        ))}
        <PaginationButton onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Вперёд
        </PaginationButton>
      </PaginationContainer> 
        </> 
      );
    };