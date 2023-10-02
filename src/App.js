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

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div>
      <Navbar />
      <NavbarNear />
      <BodyFirst />
      <FirstList />
      <hr/>
      <SecondList />
      
    </div>
  );
}

export default App;
