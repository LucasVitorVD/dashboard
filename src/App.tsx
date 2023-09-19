import { useState } from "react"
import { LayoutGrid, Import, ShoppingCart, Users, Settings, Power, Menu, X } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import MenuItem from "./components/MenuItem"

const App = () => {
  const [open, setIsOpen] = useState(false)
  
  return (
    <div className="flex min-h-screen font-poppins relative">
      <aside className={`flex flex-col items-center bg-darkScale-dark40 z-10 absolute h-screen w-72 shadow-3xl rounded-r-3xl transition-all ease-in-out duration-500 md:z-auto md:static md:visible ${open === false ? "invisible left-[-490px]" : "visible left-0"}`}>
        <X 
          size={24} 
          className="text-colorSystem-support04 my-8 mx-4 md:hidden self-start"
          onClick={() => setIsOpen(false)} 
        />

        <h1 className="text-3xl font-semibold mb-16 md:mt-14">
          <strong className="text-brandColor">e</strong>Front
        </h1>

        <div className="space-y-10">
          <MenuItem 
            icon={LayoutGrid}
            text="Dashboard"
          />
          <MenuItem 
            icon={Import}
            text="Carteira"
          />
          <MenuItem 
            icon={ShoppingCart}
            text="Transações"
          />
          <MenuItem 
            icon={Users}
            text="Suporte"
          />
        </div>

        <Separator className="my-10" />

        <div className="space-y-10">
          <MenuItem
            icon={Settings}
            text="Ajustes"
          />

          <MenuItem 
            icon={Power}
            text="Desconectar"
            isDanger
          />
        </div>
      </aside>
      <main className="bg-[#F3F4F8] flex-1">
        <Menu 
          size={24} 
          className="text-brandColor md:hidden"
          onClick={() => setIsOpen(true)} 
        />
        <h1>Content</h1>
      </main>
    </div>
  )
}

export default App