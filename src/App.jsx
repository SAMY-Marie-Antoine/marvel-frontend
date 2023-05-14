import { useState } from "react";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Pages
import Header from "./components/Header";
import Characters from "./pages/Characters";
import Details from "./pages/Details";
import Offer from "./pages/Offer";
import Comics from "./pages/Comics";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [token, setToken] = useState(Cookies.get("vintedToken") || null);
  // State correspondant à la recherche
  const [search, setSearch] = useState("");

  const handleToken = (token) => {
    if (token) {
      setToken(token);
      Cookies.set("marvelToken", token, { expires: 14 });
    } else {
      setToken(null);
      Cookies.remove("marvelToken");
    }
  };

  return (
    <Router>
      {/* Mon Header apparait sur toutes mes pages */}
      <header>
        <Header
          token={token}
          handleToken={handleToken}
          search={search}
          setSearch={setSearch}
        />
      </header>
      <Routes>
        <Route path="/" element={<Characters search={search} />} />
        <Route path="/comics" element={<Comics search={search} />} />
        <Route path="/details" element={<Details />} />
        <Route path="/characters/:id" element={<Offer />} />
        <Route path="/comics/:id" element={<Comics />} />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
      </Routes>
    </Router>
  );
}

export default App;
