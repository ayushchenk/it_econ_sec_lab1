import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Box } from "@mui/material";
import { HomePage } from "./HomePage";
import { InfoPage } from "./InfoPage";

export function App() {
  return (
    <BrowserRouter>
      <Box className="wrapper">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/info" element={<InfoPage />} />
        </Routes>
        <Footer />
      </Box>
    </BrowserRouter>
  );
}