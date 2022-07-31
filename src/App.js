import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { UserContext } from "./UserContext";
import { useMemo, useState } from "react";
function App() {
  const [user, setUser] = useState(null);
  const providerValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <UserContext.Provider value={providerValue}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="about" element={<About />} />
          </Routes>
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;
