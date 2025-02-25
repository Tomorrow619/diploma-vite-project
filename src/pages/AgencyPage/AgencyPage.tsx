import React from "react";
import { AgencyList } from "../../components/AgencyList/AgencyList";
import { Header } from "../../components/UI/Header/Header";
import { AppHeader } from "../../components/UI/AppHeader/AppHeader";


export const AgencyPage:React.FC=()=>{
    const [searchQuery, setSearchQuery] = React.useState("");
    const [isNightMode, setIsNightMode] = React.useState(false);

    return (
        <div>
          <Header searchQuery={searchQuery} isNightMode={isNightMode} setIsNightMode={setIsNightMode} />
        <AppHeader 
AppHeaderText="Агентсва недвижимости"
textType="h1"

        /> 
        <AgencyList />
      </div>
    )
}