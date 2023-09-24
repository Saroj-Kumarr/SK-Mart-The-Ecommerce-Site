import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import NavbarNear from "./NavbarNear";
import BodyFirst from "./BodyFirst";
import FirstList from "./FirstList";
import SecondList from "./SecondList";

function App() {
  return (
    <div>
      <Navbar />
      <NavbarNear/>
      <BodyFirst/>
      <FirstList/>
      <SecondList/>
    </div>
  );
}

export default App;
