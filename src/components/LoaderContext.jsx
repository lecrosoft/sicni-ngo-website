import { createContext, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);

  return (
    <LoaderContext.Provider value={{ loading, setLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};

// ✅ Add prop validation
LoaderProvider.propTypes = {
  children: PropTypes.node.isRequired, // Ensures children is provided
};

// Custom hook to use Loader context
export const useLoader = () => useContext(LoaderContext);
