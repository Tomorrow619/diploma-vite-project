type TAppHeader = {
    AppHeaderText:string,
    textType:"h1"|"h2"|"h3"|"h4"|"h5"|"h6"
    classname?:string
    isNightMode?:boolean
  }
  
  export const AppHeader = ({ AppHeaderText, textType,isNightMode }:TAppHeader) => {
  
    function headerType() {
      switch (textType) {
        case "h1":
          return <h1>{AppHeaderText}</h1>;
        case "h2":
          return <h2>{AppHeaderText}</h2>;
        case "h3":
          return <h3>{AppHeaderText}</h3>;
        case "h4":
          return <h4>{AppHeaderText}</h4>;
        case "h5":
          return <h5>{AppHeaderText}</h5>;
        case "h6":
          return <h6>{AppHeaderText}</h6>;
        default:
          return <h1>{AppHeaderText}</h1>;
      }
    };
    return headerType();
  };