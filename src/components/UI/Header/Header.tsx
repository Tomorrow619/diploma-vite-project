import React from "react"
import { FavoritesButton } from "./Header.style"
import { SHeader } from "./Header.style"
import { Link } from "react-router-dom"
import { Logo } from "./Header.style"
import { ThemeToggleButton } from "./Header.style"
import { Searching } from "../../Searching/Searching"


interface HeaderProps {
  isNightMode: boolean;
  setIsNightMode: React.Dispatch<React.SetStateAction<boolean>>;
}
export const Header:React.FC<HeaderProps>= (isNightMode,setIsNightMode)=>{

  const toggleTheme = () => {
    setIsNightMode(!isNightMode);
  };


return (

<SHeader>
<Logo>
        <Link to="/">
          <img src='/public/logoR.png'  />
          Realtor
        </Link>
      </Logo>

      {/* Поле поиска */}
      <Searching onSearch={(value) => console.log("Поиск:", value)} />

      {/* Кнопки: Переключение темы и переход в избранное */}
      <div style={{ display: "flex", alignItems: "center" }}>
        {/* Кнопка "Перейти в избранное" */}
        <FavoritesButton>
          <Link to="/favorits-page">Избранное</Link>
        </FavoritesButton>

        {/* Кнопка переключения темы */}
        <ThemeToggleButton onClick={toggleTheme} aria-label="Toggle theme">
          <img
            src={isNightMode ? "/public/themeicon" : ""}
            alt={isNightMode ? "Ночной режим" : "Дневной режим"}
          />
        </ThemeToggleButton>
      </div>
</SHeader>


)

}