import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import HomePage from "./pages/HomePage";
import AboutUs from "./pages/AboutUs";
import Posts from "./pages/Posts/Posts";
import CreatePost from "./pages/Posts/CreatePost";
import ShowPost from "./pages/Posts/ShowPost";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/posts" >
          <Route index element={<Posts />} />
          <Route path="create" element={<CreatePost />} />
          <Route path=":id" element={<ShowPost />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;