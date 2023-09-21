import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Search, Bell } from "lucide-react";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div>
        <h1 className="text-3xl text-colorSystem-dark10">Olá, Iuri</h1>
        <p className="text-lg text-colorSystem-gray10">
          Aqui estão as informações sobre suas vendas.
        </p>
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
  );
};

export default Header;
