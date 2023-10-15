import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./Store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./ErrorPage";
import MobilePage from "./MobilePage";
import Body from "./Body";
import MobileMenu from "./MobileMenu";
import MainMenuPage from "./MainMenuPage";
import CartPage from "./CartPage";
import WishlistPage from "./WishlistPage";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/mobiles",
        element: <MobilePage />,
      },
      {
        path: "/mobiles/:id",
        element: <MobileMenu />,
      },
      {
        path: "/:resid",
        element: <MainMenuPage />,
      },
      { path: "/cartpage",
       element: <CartPage /> 
      },
      {
        path:"/wishlist", element:<WishlistPage/>
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={appRouter} />
  </Provider>
);

reportWebVitals();
