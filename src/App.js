import React from "react";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Add from "./components/Add";
import Data from "./components/Data";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
        <h4>Crud - Muhammad Ashshiddiqi</h4>
        <hr />
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Data />} />
                  <Route path="edit/:id" element={<Edit />} />
                  <Route path="add" element={<Add />} />
              </Routes>
          </BrowserRouter>
    </div>
  );
}

export default App;
