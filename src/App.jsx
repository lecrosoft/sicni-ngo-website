import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CausesPage from "./pages/CausesPage";
import GalleryPage from "./pages/GalleryPage";
import CategoryDetail from "./pages/CategoryDetail";
import BioPage from "./pages/BioPage";
import ScrollToTop from "./components/ScrollToTop";
import JobSearchPage from "./pages/JobSearchPage";
import Auth from "./pages/Auth";
import { AuthProvider } from "./components/AuthForm/AuthContext";
import JobApplicationPage from "./pages/JobApplicationPage";
import ProtectedRoute from "./components/ProtectedRoute";
import { useEffect } from "react";
import Loader from "./components/Loader/Loader";
import { LoaderProvider, useLoader } from "./components/LoaderContext"; // Import Loader Context
import ProfilePage from "./pages/ProfilePage";

const theme = {
  dark: {
    primary: "#aa30b8",
    text: "#fff",
    secondary: "#bca125",
    bg: "#212529",
  },
  light: {
    primary: "#aa30b8",
    secondary: "#bca125",
    text: "#212529",
    bg: "#fff",
  },
};

// Move GlobalStyle outside of App component
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    box-sizing: border-box;
    font-family: Arial, sans-serif;
  }

  button {
    font-family: roboto, sans-serif;
  }

  li {
    font-family: poppins, sans-serif;
    font-size: 16px;
  }

  .active {
    color: ${(props) => props.theme.light.secondary};
  }
`;

const AppContent = () => {
  const { loading, setLoading } = useLoader();

  useEffect(() => {
    // Simulate authentication check and API fetching
    setLoading(true);
    setTimeout(() => setLoading(false), 2000); // Simulate API/auth delay
  }, [setLoading]);

  if (loading) return <Loader />; // Show loader while fetching/authenticating

  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/causes" element={<CausesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/category-details" element={<CategoryDetail />} />
          <Route path="/bio" element={<BioPage />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/job-application"
            element={
              <ProtectedRoute>
                <JobApplicationPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/jobs"
            element={
              <ProtectedRoute>
                <JobSearchPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/profile/:userId"
            element={
              <ProtectedRoute>
                <ProfilePage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <LoaderProvider>
        <GlobalStyle />
        <AppContent />
      </LoaderProvider>
    </ThemeProvider>
  );
};

export default App;
