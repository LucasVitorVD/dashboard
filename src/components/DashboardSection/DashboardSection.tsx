import Dashboard from "./Dashboard";
import Header from "./Header";

const DashboardSection = () => {
  return (
    <section className="flex-1 px-6 py-8 space-y-10 xl:px-44 xl:py-12">
      <Header />
      <Dashboard />
    </section>
  );
};

export default DashboardSection;
