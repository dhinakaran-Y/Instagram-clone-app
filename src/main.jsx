import { createRoot } from "react-dom/client";
import { HashRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./assets/layout/MainLayout";
import HomePage from "./assets/pages/HomePage";
import { ErrorPage } from "./assets/pages/ErrorPage";
import StoryPage from "./assets/pages/StoryPage";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <Routes>
      {/* The layout wraps the child routes */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />{" "}
        <Route path="*" element={<ErrorPage />} />
      </Route>
      {/* renders HomePage inside MainLayout */}
      <Route path="story/:id" element={<StoryPage />} />
    </Routes>
  </HashRouter>
);
