import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import CausesPage from "./pages/CausesPage";
import GalleryPage from "./pages/GalleryPage";

const App = () => {
  const theme = {
    dark: {
      primary: "#000",
      text: "#fff",
      secondary: "#00adef",
    },
    light: {
      primary: "#fff",
      secondary: "#00adef",
      text: "#212529",
    },
  };

  const GlobalStyle = createGlobalStyle`
  body{
  margin:0;
  box-sizing:border-box;
  font-family: Arial, sans-serif;
  }

    button {
      font-family:roboto,sans-serif;
    }
    li {
      font-family:poppins, sans-serif;
      font-size:16px;
      
    }
    .active{
      color:${theme.light.secondary};
    }
  `;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<AboutPage />}></Route>
          <Route path="/contact" element={<ContactPage />}></Route>
          <Route path="/causes" element={<CausesPage />}></Route>
          <Route path="/gallery" element={<GalleryPage />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
