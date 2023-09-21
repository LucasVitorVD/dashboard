import { useState } from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import MobileHeader from "./components/MobileHeader/MobileHeader";
import DashboardSection from "./components/DashboardSection/DashboardSection";

const App = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex min-h-screen font-poppins relative">
      <Sidebar open={open} setOpen={setOpen} />

      <main
        data-open={open}
        className={`bg-darkScale-dark30 flex flex-col flex-1 transition-all ease-in-out ${
          open ? "blur-sm" : "filter-none"
        } lg:filter-none`}
      >
        <MobileHeader setOpen={setOpen} />

        <DashboardSection />
      </main>
    </div>
  );
};

export default App;
