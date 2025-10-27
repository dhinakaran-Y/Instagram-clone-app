import TheNavbar from "../components/TheNavbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="grid grid-cols-18 gap-4 h-dvh font-Roboto">
      <TheNavbar/>
      <Outlet/>
    </div>
  );
};

export default MainLayout;