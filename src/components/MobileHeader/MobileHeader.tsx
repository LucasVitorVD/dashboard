import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Menu, Search, Bell } from "lucide-react";
import { Dispatch } from "react";

interface MobileProps {
  setOpen: Dispatch<boolean>
}

const MobileHeader = ({ setOpen }: MobileProps) => {
  return (
    <header className="flex items-center justify-between p-7 lg:hidden">
      <Menu
        size={24}
        className="text-colorSystem-brandColor cursor-pointer xl:hidden"
        onClick={() => setOpen(true)}
      />

      <div className="flex items-center gap-6 lg:hidden">
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
  );
};

export default MobileHeader