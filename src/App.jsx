import { Link, Router } from "react-router-dom";
import "./App.css";
import Navbar from "./navbar";

function App() {
  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;

function Home() {
  return (
    <>
      <table>
        <PCPart partType={"CPU"} partName={"Part Brand/Model Goes Here"} />
        <PCPart partType={"Motherboard"} />
        <PCPart partType={"PSU"} />
        <PCPart partType={"GPU"} />
      </table>
    </>
  );
}

function PCPart({ partType, partName, partPrice }) {
  return (
    <div>
      <p>{partType}</p>
      <p>
        <strong>{partName}</strong>
      </p>
      <p>Price: ${partPrice}</p>
    </div>
  );
}
