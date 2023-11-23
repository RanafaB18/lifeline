import Sidebar from "./Sidebar";
import Main from "./Main";

const Dashboard = () => {
  return (
    <section className="flex-col flex md:flex-row h-screen">
      <Sidebar />
      <Main />
    </section>
  );
};

export default Dashboard;
