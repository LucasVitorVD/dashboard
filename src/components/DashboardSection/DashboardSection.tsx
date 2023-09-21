import Dashboard from "./Dashboard";
import Header from "./Header";

const DashboardSection = () => {
  return (
    <section className="flex-1 px-6 py-8 space-y-10 lg:px-44 lg:py-12">
      <Header />
      <Dashboard />
    </section>
  );
};

export default DashboardSection;
