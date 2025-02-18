import styled from "styled-components";

const styles = {
  SearchBarContainer: styled.div`
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 500px;
    margin: 0 auto;
`,
SuggestionsContainer: styled.div`
  color: black;
 
`,
SuggestionItem: styled.div`
 /* color:black;
 background-color:black; */
`,
  SearchInputWrapper: styled.div`
    position: relative;
    flex: 1;
  `,
  SearchInput: styled.input`
    width: 100%;
    padding: 10px 15px 10px 40px; /* Отступ слева для иконки */
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
    outline: none;

    &:focus {
      border-color: #007bff;
    }
  `,
  SearchIcon: styled.div`
    position: absolute;
    left: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    height: 20px;
    background-image: url("/public/lupa.png");
    background-size: cover;
    background-repeat: no-repeat;
    pointer-events: none; /* Чтобы иконка не блокировала ввод текста */
  `,
  SearchButton: styled.button`
    margin-left: 10px;
    padding: 10px 15px;
    background-color: #82898F;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.color.lightGray};
      color: ${(props) => props.theme.color.lightGray};
    }
  `,
  
};

export default styles;
