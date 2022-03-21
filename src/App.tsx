import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/auth";
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login";

function App() {
  const { isAuthenticated } = useAuth();
  console.log(isAuthenticated);
  return (
    <Router>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/homepage" element={<HomePage />} />
            <Route path="*" element={<Navigate to="/homepage" />} />
          </>
        ) : (
          <>
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </Router>
  );
}

export default App;
