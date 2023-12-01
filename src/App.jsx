import { Link, Routes, Route } from "react-router-dom";
import CPU from "./pages/cpu";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/cpu/*" element={<CPU />} />
      </Routes>
      <Home />
    </>
  );
}

export default App;

function Home() {
  return (
    <div className="overflow-x-auto bg-base-100">
      {/*In a Table, need to add a tbody, or similar, tag as parents to tr tags -OG*/}
      <table className="table">
        <tbody>
          <tr>
            <td>
              <PCPart
                partType={"CPU"}
                partName={"Part Brand/Model Goes Here"}
              />
            </td>
          </tr>
          <tr>
            <td>
              <PCPart partType={"RAM"} />
            </td>
          </tr>
          <tr>
            <td>
              <PCPart partType={"PSU"} />
            </td>
          </tr>
          <tr>
            <td>
              <PCPart partType={"GPU"} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

function PCPart({ partType, partName, partPrice }) {
  return (
    <div>
      {/* The below Link to only be used for the partType prop took me FOREVER to figure out,
       only potential downside being the partType having to match the .jsx file name for the route to work -OG*/}
      <Link to={`/${partType}`}>{partType}</Link>
      <p>
        <strong>{partName}</strong>
      </p>
      <p>Price: ${partPrice}</p>
    </div>
  );
}
