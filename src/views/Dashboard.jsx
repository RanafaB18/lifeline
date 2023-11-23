import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import MobileNav from "../components/MobileNav";

const Dashboard = () => {
  const [navState, setNavState] = useState(false);

  const showMobileNav = () => {
    setNavState((prev) => !prev);
  };
  return (
    <section className="flex-col flex md:flex-row h-screen">
      <Sidebar showMobileNav={showMobileNav} />
      <Main />
      <MobileNav navState={navState} />
    </section>
  );
};

export default Dashboard;
