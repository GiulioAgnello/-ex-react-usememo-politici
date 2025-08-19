import { Outlet } from "react-router";
import Header from "../variable/Header";
import Footer from "../variable/Footer";
export default function DefaultLayout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
