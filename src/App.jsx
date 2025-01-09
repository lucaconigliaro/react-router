import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./components/HomePage";
import AboutUs from "./components/AboutUs";
import PostsPage from "./components/PostsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/posts" element={<PostsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;