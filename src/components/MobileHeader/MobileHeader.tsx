import { Menu } from "lucide-react";
import { Dispatch } from "react";
import HeaderItems from "./HeaderItems";

interface MobileProps {
  setOpen: Dispatch<boolean>;
}

const MobileHeader = ({ setOpen }: MobileProps) => {
  return (
    <header className="flex items-center justify-between p-7 lg:hidden">
      <Menu
        size={24}
        className="text-colorSystem-brandColor cursor-pointer xl:hidden"
        onClick={() => setOpen(true)}
      />

      <HeaderItems className="flex items-center gap-6 lg:hidden" />
    </header>
  );
};

export default MobileHeader;