import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import NavbarNear from "./NavbarNear";
import BodyFirst from "./BodyFirst";
import FirstList from "./FirstList";
import SecondList from "./SecondList";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProduct } from "./Slice";
import Test from "./Test";
import Shimmer from "./Shimmer";
import ThirdList from "./ThirdList";
import FourthList from "./FourthList";
import ZeroList from "./ZeroList";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div>
      <Navbar />
      <NavbarNear />
      <ZeroList />
      <BodyFirst />
      <FirstList />
      <hr />
      <SecondList />
      <ThirdList />
      <FourthList />
    </div>
  );
}

export default App;
