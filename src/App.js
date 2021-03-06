import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Navbar from "./components/navigation/Navbar";
import "./App.css";

export const UserContext = React.createContext();

const user = {
  isLoggedIn: false,
};

function App() {
  const [userInfo, setUserInfo] = useState(user);
  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={{ userInfo, setUserInfo }}>
          <Navbar />
          <Routes />
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
