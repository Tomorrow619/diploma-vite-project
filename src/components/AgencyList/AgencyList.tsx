import React, { useState, useEffect } from "react";
import {
  SAgencyList,
  SAgencyCard,
  SAgencyLogo,
  SAgencyPlaceholder,
  SAgencyTitle,
  SAgencyInfo,
} from "./AgencyList.style.ts";

type Agency = {
  id: number;
  name: string;
  externalID: string;
  location?: string;
  logo?: { url: string };
  adCount?: number;
};
interface AgencyListProps {
  isNightMode: boolean;
    setIsNightMode: React.Dispatch<React.SetStateAction<boolean>>
}

export const AgencyList: React.FC<AgencyListProps> = ({isNightMode,setIsNightMode}) => {
  const [agencies, setAgencies] = useState<Agency[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAgencies = async () => {
      try {
        const response = await fetch(
          "https://bayut.p.rapidapi.com/agencies/list?query=patriot&hitsPerPage=25&page=0&lang=en",
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": "047adf096dmsh04f0cc05d59e3e5p1af68djsn734230bdf12c",
              "x-rapidapi-host": "bayut.p.rapidapi.com",
            },
          }
        );
        const data = await response.json();
        setAgencies(data.hits || []);
      } catch (error) {
        console.error("Ошибка загрузки агентств:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAgencies();
  }, []);

  if (loading) return <p>Загрузка...</p>;

  return (
    <SAgencyList isNightMode={isNightMode}>
      {agencies.map((agency) => (
        <SAgencyCard key={agency.id} isNightMode={isNightMode}>
          {agency.logo?.url ? (
            <SAgencyLogo src={agency.logo.url} alt={agency.name} />
          ) : (
            <SAgencyPlaceholder>Нет логотипа</SAgencyPlaceholder>
          )}
          <SAgencyTitle>{agency.name}</SAgencyTitle>
          <SAgencyInfo>Локация: {agency.location || "Не указано"}</SAgencyInfo>
          <SAgencyInfo>Объявлений: {agency.adCount || "Нет данных"}</SAgencyInfo>
        </SAgencyCard>
      ))}
    </SAgencyList>
  );
};
