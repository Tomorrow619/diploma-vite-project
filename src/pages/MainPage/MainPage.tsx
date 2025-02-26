
import "./MainPage.scss";
import { Header } from "../../components/UI/Header/Header";
import {  SMainPage } from "./MainPage.style";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import {  useState } from "react";
import { ListingCard } from "../../components/Listing/ListingCard";

export const MainPage: React.FC = () => {
    const [isNightMode, setIsNightMode] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");
  return (
    <>
  <div className="Abu">     
    <img src="/src/assets/abu.jpg" alt="" />
  </div>
    <SMainPage  isNightMode={isNightMode}> 
    <Header searchQuery={searchQuery} isNightMode={isNightMode} setIsNightMode={setIsNightMode} />
     <AppHeader
     AppHeaderText="№1 Сервис по аренде и покупке недвижимости "
     textType="h1"

     />
     <ListingCard isNightMode={isNightMode} setIsNightMode={setIsNightMode} onSearch={setSearchQuery} searchQuery={""} apartment={{ id: "1", name: "Sample Apartment", location: "Sample Location" }} isFavorite={false} onFavoriteToggle={function (): void {
          throw new Error("Function not implemented.");
        } } />
    </SMainPage></>
  );
};
