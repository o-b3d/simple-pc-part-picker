import { Link, Routes, Route } from "react-router-dom";
import CPU from "./pages/cpu";
import "./App.css";

function App() {
  return (
    <>
    {/*I added Routes and Route here to access CPU page from landing page -OG*/}
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
    <>
      {/*In a Table, need to add a tbody, or similar, tag as parents to tr tags -OG*/}
      <table>
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
              <PCPart partType={"Motherboard"} />
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
    </>
  );
}

function PCPart({ partType, partName, partPrice }) {
  return (
    <div>
      {/* The below Link to only be used for the partType prop took me FOREVER to figure out -OG*/}
      <Link to={`/${partType}`}>{partType}</Link>
      <p>
        <strong>{partName}</strong>
      </p>
      <p>Price: ${partPrice}</p>
    </div>
  );
}
