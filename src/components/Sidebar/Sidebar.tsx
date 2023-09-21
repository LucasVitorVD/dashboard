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
      className={`flex flex-col items-center bg-darkScale-dark40 z-10 absolute h-screen w-72 shadow-3xl rounded-r-3xl transition-all ease-in-out duration-500 lg:z-auto lg:static lg:visible ${
        open === false ? "invisible left-[-490px]" : "visible left-0"
      }`}
    >
      <X
        size={30}
        className="text-colorSystem-support04 my-8 mx-4 self-start lg:hidden"
        onClick={() => setOpen(false)}
      />

      <h1 className="text-3xl font-semibold mb-16 lg:mt-14">
        <strong className="text-colorSystem-brandColor">e</strong>Front
      </h1>

      <div className="space-y-10">
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
    </aside>
  );
};

export default Sidebar;
