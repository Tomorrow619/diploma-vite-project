
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/base.scss"
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";
import { GlobalStyle } from "./themes/globalStyle.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
    <GlobalStyle/> 
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
