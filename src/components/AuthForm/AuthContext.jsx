import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true); // Add a loading state

  // Check for a stored user in sessionStorage on initial load
  useEffect(() => {
    const storedUser = sessionStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Set the user if found in sessionStorage
    }
    setAuthLoading(false); // Mark loading as complete
  }, []);

  // Login function to set the user and store it in sessionStorage
  const login = (userData) => {
    setUser(userData);
    sessionStorage.setItem("user", JSON.stringify(userData));
  };

  // Logout function to clear the user and remove it from sessionStorage
  const logout = () => {
    setUser(null); // Clear the user state
    sessionStorage.removeItem("user"); // Remove the user from sessionStorage

    // Redirect to the auth page after logout
    if (window.location.pathname !== "/auth") {
      window.location.href = "/auth"; // Force a full page reload to ensure a clean state
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, authLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
