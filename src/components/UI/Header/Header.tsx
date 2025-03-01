import React, { useState } from "react"
import { FavoritesButton, SAgencyList } from "./Header.style"
import { SHeader } from "./Header.style"
import { Link } from "react-router-dom"
import { Logo } from "./Header.style"
import { ThemeToggleButton } from "./Header.style"
import { Searching } from "../../Searching/Searching"
interface HeaderProps {
  isNightMode: boolean;
  setIsNightMode: React.Dispatch<React.SetStateAction<boolean>>;
  onSeacrh:(query:string)=>void;
}
export const Header:React.FC<HeaderProps &{searchQuery:string} >= ({isNightMode, setIsNightMode})=>{

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };


 const [searchQuery, setSearchQuery] = useState("");
return (

<SHeader isNightMode={isNightMode}>
<Logo>
        <Link to="/main-page">
          <img src='/src/assets/logoR.png'  />
          Realtor
        </Link>
      </Logo>

      {/* Поле поиска */}
      <Searching onSearch={setSearchQuery}  />

      {/* Кнопки: Переключение темы и переход в избранное */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Кнопка "Перейти в избранное" */}
        <FavoritesButton >
          <Link to="/favorites-page">Избранное</Link>
        </FavoritesButton>
        <SAgencyList>
         <Link to="/agency-page">Agency</Link>
         </SAgencyList>
        {/* Кнопка переключения темы */}
        <ThemeToggleButton onClick={toggleTheme} aria-label="Toggle theme">
          <img
            src={isNightMode ? "/src/assets/themeicon.jpg" : "src/assets/themeicon.jpg"}
            alt={isNightMode ? "" : ""}
          />
        </ThemeToggleButton>
      </div>
</SHeader>


)

}