import { useState } from "react"
import { Search, Bell } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Sidebar from "./components/Sidebar/Sidebar"
import MobileHeader from "./components/MobileHeader/MobileHeader"
import Card from "./components/Card/Card"

const App = () => {
  const [open, setOpen] = useState(false)
  
  return (
    <div className="flex min-h-screen font-poppins relative">
      <Sidebar open={open} setOpen={setOpen} />

      <main className={`bg-darkScale-dark30 flex flex-col flex-1 transition-all ease-in-out ${open ? "blur-sm" : "filter-none"} lg:filter-none`}>
        <MobileHeader setOpen={setOpen} />

        <section className="flex-1 px-6 py-8 space-y-10 lg:px-44 lg:py-12">
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

          {/* dashboard */}
          <div className="space-y-10">
            <div className="flex flex-col gap-8 lg:flex-row">
              <Card>
                <h1>Card 1</h1>
              </Card>
              <Card>
                <p className="text-xl font-medium text-colorSystem-dark10 mb-6">Histório de transações</p>
                <div className="flex justify-between py-3 px-3 rounded-sm bg-colorSystem-lightPurple text-colorSystem-brandColor mb-6">
                  <span>Ontem</span>
                  <span>R$-540,32</span>
                </div>

                <div className="flex justify-between py-3 px-3 rounded-sm bg-colorSystem-lightPurple text-colorSystem-brandColor mb-6">
                  <span>Quinta-Feira</span>
                  <span>R$-273,90</span>
                </div>

                <div className="flex justify-between py-3 px-3 rounded-sm bg-colorSystem-lightPurple text-colorSystem-brandColor mb-6">
                  <span>Segunda-Feira</span>
                  <span>R$-1.456,20</span>
                </div>
              </Card>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
              <Card size="xs">
                <h1>Mini Card 1</h1>
              </Card>
              <Card size="xs">
                <h1>Mini Card 2</h1>
              </Card>
              <Card size="xs">
                <h1>Mini Card 3</h1>
              </Card>
              <Card size="xs">
                <h1>Mini Card 4</h1>
              </Card>
            </div>
          </div>

          {/* history Table */}
          <div>
            <Card>
              <h1>Card History</h1>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App