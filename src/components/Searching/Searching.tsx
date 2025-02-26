import { useState } from "react";
import styles from "./Searching.style"
type SearchingProps = {
  onSearch: (value: string) => void;
};



export const Searching: React.FC<SearchingProps> = ({ onSearch }) => {
    const [searchValue, setSearchValue] = useState("");
    const [suggestions, setSuggestions] = useState<any[]>([]); // Список предложений
    const [isLoading, setIsLoading] = useState(false); // Для состояния загрузки
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      setSearchValue(value);
  
      // Запуск запроса при каждом изменении
      if (value.length > 2) { // Начинаем запрос, когда введено больше 2 символов
        fetchAutoComplete(value);
      } else {
        setSuggestions([]); // Очищаем предложения, если введено меньше 3 символов
      }
    };
  
    const fetchAutoComplete = async (query: string) => {
      setIsLoading(true);
      try {
        const response = await fetch(
          `https://bayut.p.rapidapi.com/auto-complete?query=${encodeURIComponent(query)}&hitsPerPage=10&page=0&lang=en`,
          {
            method: "GET",
            headers: {
              "x-rapidapi-key": "047adf096dmsh04f0cc05d59e3e5p1af68djsn734230bdf12c",
              "x-rapidapi-host": "bayut.p.rapidapi.com",
            },
          }
        );
        const data = await response.json();
        setSuggestions(data?.hits || []); // Извлекаем предложения
      } catch (error) {
        console.error("Ошибка автозавершения:", error);
      } finally {
        setIsLoading(false);
      }
    };
  
    const handleSearch = () => {
      onSearch(searchValue); // Передаем в родительский компонент запрос
    };
  
    return (
      <styles.SearchBarContainer>
        <styles.SearchInputWrapper>
          <styles.SearchIcon />
          <styles.SearchInput
            type="text"
            placeholder="Введите запрос"
            value={searchValue}
            onChange={handleInputChange}
          />
        </styles.SearchInputWrapper>
        
        {/* Отображение предложений, если они есть */}
        {suggestions.length > 0 && (
          <styles.SuggestionsContainer>
            {suggestions.map((suggestion, index) => (
              // Убедитесь, что выводите строку, например, suggestion.name
              <styles.SuggestionItem
                key={index}
                onClick={() => {
                  setSearchValue(suggestion.name || ""); // Устанавливаем значение при клике
                  setSuggestions([]); // Очищаем предложения после выбора
                  onSearch(suggestion.name || ""); // Передаем выбранное значение
                }}
              >
                {suggestion.name} {/* Выводим нужное свойство объекта */}
              </styles.SuggestionItem>
            ))}
          </styles.SuggestionsContainer>
        )}
        
        <styles.SearchButton onClick={handleSearch}>
          {isLoading ? "Загрузка..." : "Поиск"}
        </styles.SearchButton>
      </styles.SearchBarContainer>
    );
  };
  















