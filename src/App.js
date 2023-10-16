import "./App.css";
import Navbar from "./Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "./Slice";
import ZeroList from "./ZeroList";
import Footer from "./Footer";
import MobilePage from "./MobilePage";
import Body from "./Body";
import { Outlet } from "react-router";
import React from "react";
import Header from "./Header";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <React.Fragment>
      {/* <Header /> */}
      <Outlet />
      {/* <Footer /> */}
    </React.Fragment>
  );
}

export default App;
