import { useState } from "react"
import { LayoutGrid, Import, ShoppingCart, Users, Settings, Power, Menu, X, Search, Bell } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import MenuItem from "./components/MenuItem"

const App = () => {
  const [open, setIsOpen] = useState(false)
  
  return (
    <div className="flex min-h-screen font-poppins relative">
      <aside className={`flex flex-col items-center bg-darkScale-dark40 z-10 absolute h-screen w-72 shadow-3xl rounded-r-3xl transition-all ease-in-out duration-500 lg:z-auto lg:static lg:visible ${open === false ? "invisible left-[-490px]" : "visible left-0"}`}>
        <X 
          size={30} 
          className="text-colorSystem-support04 my-8 mx-4 self-start lg:hidden"
          onClick={() => setIsOpen(false)} 
        />

        <h1 className="text-3xl font-semibold mb-16 lg:mt-14">
          <strong className="text-colorSystem-brandColor">e</strong>Front
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
      <main className={`bg-darkScale-dark30 flex flex-col flex-1 transition-all ease-in-out ${open ? "blur-sm" : "filter-none"} lg:filter-none`}>
        <header className="flex items-center justify-between p-7 lg:hidden">
          <Menu
            size={24}
            className="text-colorSystem-brandColor lg:hidden"
            onClick={() => setIsOpen(true)}
          />

          <div className="flex items-center gap-6">
            <Search size={24} />
            <div className="relative">
              <span className="absolute flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-colorSystem-brandColor opacity-75 left-5 top-[-3px]"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-colorSystem-brandColor left-5 top-[-3px]"></span>
              </span>
              <Bell size={24} />
            </div>
            <Avatar className="ml-6">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </header>
        <section className="flex-1 px-6 py-8 lg:px-44 lg:py-12">
          <div className="flex justify-between">
            <div>
              <h1 className="text-3xl text-colorSystem-dark10">Olá, Iuri</h1>
              <p className="text-lg text-colorSystem-gray10">Aqui estão as informações sobre suas vendas.</p>
            </div>
            <div className="hidden lg:flex lg:items-center lg:gap-6">
              <Search size={24} />
              <div className="relative">
                <span className="absolute flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-colorSystem-brandColor opacity-75 left-5 top-[-3px]"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-colorSystem-brandColor left-5 top-[-3px]"></span>
                </span>
                <Bell size={24} />
              </div>
              <Avatar className="ml-6">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>

          {/* grid dashboard */}
          <div>
            <h1>Dashboard</h1>
          </div>

          {/* history Table */}
          <div></div>
        </section>
      </main>
    </div>
  )
}

export default App