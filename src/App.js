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
import FifthList from "./FifthList";
import Footer from "./Footer";
import MobilePage from "./MobilePage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProduct());
  }, []);

  return (
    <div>
      <Navbar />
      <ZeroList /> 
      
      {/* <BodyFirst />
      <FirstList />
      <hr />
      <SecondList />
      <ThirdList />
      <FourthList />
      <FifthList /> 
       <Footer/> */}
      <MobilePage />
    </div>
  );
}

export default App;
