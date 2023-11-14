import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomePage } from "./Pages/HomePage";
import { Services } from "./Pages/Services";
import { AboutUs } from "./Pages/AboutUs";
import { Contact } from "./Pages/Contact";
import { LoginPage } from "./Pages/LoginPage";
<<<<<<< HEAD

=======
import { Summary } from "./Pages/Summary";
import { SignUpPage } from "./Pages/SignUpPage";
>>>>>>> 64b3d02c3e5e0b9bb1c62753ef2b7cbb1fac7cc4


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginPage/>}/>
          <Route path="/homepage" element={<HomePage/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/aboutus" element={<AboutUs/>}/>
          <Route path="/contact" element={<Contact/>}/>
<<<<<<< HEAD
=======
          <Route path="/summary" element={<Summary/>}/>
          <Route path="/signup" element={<SignUpPage/>}/>
>>>>>>> 64b3d02c3e5e0b9bb1c62753ef2b7cbb1fac7cc4
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
