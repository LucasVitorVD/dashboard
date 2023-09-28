import { Separator } from "@radix-ui/react-separator";
import { X, LayoutGrid, Import, ShoppingCart, Users, Settings, Power } from "lucide-react";
import Item from "./Item";
import { Dispatch } from "react";

interface SidebarProps {
  open: boolean,
  setOpen: Dispatch<boolean>
}

const Sidebar = ({ open, setOpen }: SidebarProps) => {
  return (
    <aside
      className={`flex flex-col items-center bg-background z-10 absolute w-72 shadow-2xl rounded-r-3xl transition-all ease-in-out duration-500 h-full lg:h-0 lg:z-auto lg:static lg:visible ${
        open === false ? "invisible left-[-490px]" : "visible left-0"
      }`}
    >
      <div className="w-full my-8">
        <X
          size={30}
          className="text-colorSystem-support04 self-start cursor-pointer mx-4 lg:hidden"
          onClick={() => setOpen(false)}
        />
      </div>

      <h1 className="text-3xl font-semibold mb-16 lg:mt-14">
        <strong className="text-colorSystem-brandColor">e</strong>Front
      </h1>

      <nav className="h-full">
        <div className="space-y-5 xl:space-y-10">
          <Item icon={LayoutGrid} text="Dashboard" />
          <Item icon={Import} text="Carteira" />
          <Item icon={ShoppingCart} text="Transações" />
          <Item icon={Users} text="Suporte" />
        </div>
        <Separator className="my-10" />
        <div className="space-y-10">
          <Item icon={Settings} text="Ajustes" />
          <Item icon={Power} text="Desconectar" danger />
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
