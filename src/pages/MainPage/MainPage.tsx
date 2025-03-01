// // MainPage.tsx
// import "./MainPage.scss";
// import { Header } from "../../components/UI/Header/Header";
// import { SMainPage } from "./MainPage.style";
// import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
// import { useState } from "react";
// import { ListingPage } from "../../pages/ListingPage/ListingPage"; // Импорт ListingPage

// export const MainPage: React.FC = () => {
//   const [isNightMode, setIsNightMode] = useState(true);
//   const [searchQuery, setSearchQuery] = useState("");

//   return (
//     <>
//       <div className="Abu">
//         <img src="/src/assets/abu.jpg" alt="abu" />
//       </div>
//       <SMainPage isNightMode={isNightMode}>
//         <Header
//           searchQuery={searchQuery}
//           isNightMode={isNightMode}
//           setIsNightMode={setIsNightMode}
//           onSeacrh={setSearchQuery}
//         />
//         <AppHeader
//           AppHeaderText="№1 Сервис по аренде и покупке недвижимости"
//           textType="h1"
//         />
//         {/* Здесь отображается весь список */}
//         <ListingPage isNightMode={isNightMode} />
//       </SMainPage>
//     </>
//   );
// };
// MainPage.tsx
import "./MainPage.scss";
import { Header } from "../../components/UI/Header/Header";
import { SMainPage } from "./MainPage.style";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";
import { useState, useEffect } from "react";
import { ListingPage } from "../../pages/ListingPage/ListingPage";

export const MainPage: React.FC = () => {
  const [isNightMode, setIsNightMode] = useState<boolean>(() => {
    const savedTheme = localStorage.getItem("isNightMode");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    localStorage.setItem("isNightMode", JSON.stringify(isNightMode));
  }, [isNightMode]);

  return (
    <>
      <div className="Abu">
        <img src="/src/assets/abu.jpg" alt="abu" />
      </div>
      <SMainPage isNightMode={isNightMode}>
        <Header
          searchQuery={searchQuery}
          isNightMode={isNightMode}
          setIsNightMode={setIsNightMode}
          onSeacrh={setSearchQuery}
        />
        <AppHeader
          AppHeaderText="№1 Сервис по аренде и покупке недвижимости"
          textType="h1"
        />
        {/* Передаем тему и функцию её обновления вниз */}
        <ListingPage isNightMode={isNightMode} setIsNightMode={setIsNightMode} />
      </SMainPage>
    </>
  );
};
