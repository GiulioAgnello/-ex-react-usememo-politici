import { BrowserRouter, Routes, Route } from "react-router";

// pages
import HomePage from "./components/pages/homepage";
import DefaultLayout from "./components/Layout/Defaultlayout";
import Posts from "./components/pages/Posts";
import AboutUs from "./components/pages/AboutUs";

// app
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Posts">
              <Route index element={<Posts />}></Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
