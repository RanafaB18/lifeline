import Sidebar from "../components/Sidebar";
import Main from "../components/Main";

const Dashboard = () => {
  return (
    <section className="flex-col flex md:flex-row h-screen">
      <Sidebar />
      <Main />
    </section>
  );
};

export default Dashboard;
