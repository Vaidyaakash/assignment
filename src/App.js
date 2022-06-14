import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./Component/Contact";
import Homepage from "./Component/Homepage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/home' element={<Homepage />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;