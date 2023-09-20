import { useState } from "react"
import { LayoutGrid, Import, ShoppingCart, Users, Settings, Power, Menu, X, Search, Bell } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
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
      <main className={`bg-darkScale-dark30 flex flex-col flex-1 transition-all ease-in-out ${open ? "blur-sm" : "filter-none"} md:filter-none`}>
        <header className="flex items-center justify-between p-7 md:hidden">
          <Menu
            size={24}
            className="text-brandColor md:hidden"
            onClick={() => setIsOpen(true)}
          />

          <div className="flex items-center gap-6">
            <Search size={24} />
            <div className="relative">
              <span className="absolute flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brandColor opacity-75 left-5 top-[-3px]"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brandColor left-5 top-[-3px]"></span>
              </span>
              <Bell size={24} />
            </div>
            <Avatar className="ml-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <section className="flex-1 px-6 py-8 md:px-44 md:py-12">
          <h1>Olá, Iuri</h1>
          <p>Aqui estão as informações sobre suas vendas.</p>

          {/* grid dashboard */}
          <div></div>

          {/* history Table */}
          <div></div>
        </section>
      </main>
    </div>
  )
}

export default App