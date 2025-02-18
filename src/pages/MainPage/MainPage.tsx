
import "./MainPage.scss";
import { Header } from "../../components/UI/Header/Header";
import { SMainPage } from "./MainPage.style";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { SetStateAction, useState } from "react";
import { ListingCard } from "../../components/Listing/Listing";

export const MainPage: React.FC = () => {
    const [isNightMode,setIsNightMode]=useState(true)
  return (
    <>
  
    <SMainPage  isNightMode={isNightMode}> 
    <Header isNightMode={isNightMode} setIsNightMode={setIsNightMode} />
     <AppHeader
     AppHeaderText="№1 Сервис по аренде и покупке недвижемости "
     textType="h1"

     />
     <ListingCard/>
    </SMainPage></>
  );
};
