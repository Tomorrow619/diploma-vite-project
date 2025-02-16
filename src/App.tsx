

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LoginPage } from "./pages/LoginPage/LoginPage";
import { RegistrationPage } from "./pages/RegistrationPage/RegistrationPage";
import MainPage from "./pages/MainPage/MainPage";
import { Provider } from "react-redux";
import { store } from "./store/store";
function App() {
  const routerConfig = createBrowserRouter([
    {
      path: "/",
      element: <LoginPage />,
    },
    {
      path: "/registration-page",
      element: <RegistrationPage />,
    },
    {
      path: "/main-page",
      element: <MainPage />,
    },
  ]);
  return (
    <Provider store={store}>
      <div className="App">
        <div className="container">
          <RouterProvider router={routerConfig} />
        </div>
      </div>
    </Provider>
  );
}

export default App;
