// ListingPage.tsx
import React, { useEffect, useState } from "react";
import { ListingCard, Apartment } from "../../components/Listing/ListingCard";
import {
  SListing,
  PaginationContainer,
  PaginationButton,
  Loader,
  ErrorText,
} from "../../components/Listing/Listing.style";
import { Header } from "../../components/UI/Header/Header";
  
interface ListingPageProps {
    isNightMode: boolean;
    setIsNightMode: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
  




export const ListingPage: React.FC<ListingPageProps> = ({isNightMode,setIsNightMode}) => {
  const [apartments, setApartments] = useState<Apartment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 8;
//   const [isNightMode, setIsNightMode] = useState<boolean>(false);
  const [favorites, setFavorites] = useState<Apartment[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    fetchApartments();
    // Загружаем избранное из localStorage
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const fetchApartments = async () => {
    const url =
      "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002%2C6020&purpose=for-rent&hitsPerPage=25&page=0&lang=en";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "13cb3b5572msh339aab0cac1ea45p19fd45jsn5cc42efc9f35",
        "x-rapidapi-host": "bayut.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    };

    try {
      setLoading(true);
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status} ${response.statusText}`);
      }
      const data = await response.json();
      const apartmentsData = data.hits.map((hit: any) => ({
        id: hit.id,
        title: hit.title || "Название не указано",
        price: hit.price || "Цена не указана",
        location: hit.location || "Расположение не указано",
        area: hit.area || "Площадь не указана",
        coverPhoto: hit.coverPhoto || null,
      }));
      setApartments(apartmentsData);
    } catch (err: any) {
      setError(err.message || "Произошла ошибка при загрузке данных");
    } finally {
      setLoading(false);
    }
  };

  const handleFavoriteToggle = (apartment: Apartment) => {
    const isAlreadyFavorite = favorites.some((fav) => fav.id === apartment.id);
    const updatedFavorites = isAlreadyFavorite
      ? favorites.filter((fav) => fav.id !== apartment.id)
      : [...favorites, apartment];
    setFavorites(updatedFavorites);
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  };

  const filteredApartments = apartments.filter((apartment) =>
    apartment.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Логика пагинации
  const totalPages = Math.ceil(filteredApartments.length / itemsPerPage);
  const currentApartments = filteredApartments.slice(
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
  if (filteredApartments.length === 0)
    return <ErrorText>Нет доступных объектов.</ErrorText>;

  return (
    <>
      <Header
        isNightMode={isNightMode}
        setIsNightMode={setIsNightMode}
        searchQuery={searchQuery}
        onSeacrh={setSearchQuery}
      />
      <SListing isNightMode={isNightMode}>
        {currentApartments.map((apartment) => (
          <ListingCard
                key={apartment.id}
                apartment={apartment}
                isNightMode={isNightMode}
                isFavorite={favorites.some((fav) => fav.id === apartment.id)}
                onFavoriteToggle={handleFavoriteToggle} onSearch={function (value: React.SetStateAction<string>): void {
                    throw new Error("Function not implemented.");
                } } searchQuery={""} setIsNightMode={function (value: React.SetStateAction<boolean>): void {
                    throw new Error("Function not implemented.");
                } }          />
        ))}
      </SListing>
      <PaginationContainer>
        <PaginationButton
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Назад
        </PaginationButton>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationButton
            key={index}
            onClick={() => handlePageChange(index + 1)}
            isActive={currentPage === index + 1}
          >
            {index + 1}
          </PaginationButton>
        ))}
        <PaginationButton
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Вперёд
        </PaginationButton>
      </PaginationContainer>
    </>
  );
};
