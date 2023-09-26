import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Search, Bell, User } from "lucide-react";

interface Props {
  className: string;
}

const HeaderItems = ({ className }: Props) => {
  return (
    <div className={className}>
      <Search size={24} />
      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="relative">
            <span className="absolute flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-colorSystem-brandColor opacity-75 left-5 top-[-3px]"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-colorSystem-brandColor left-5 top-[-3px]"></span>
            </span>
            <Bell size={24} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Notificações</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Você comprou um item!</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar className="ml-6">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>
              <User />
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>Minha Conta</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Editar Perfil</DropdownMenuItem>
          <DropdownMenuItem>Trocar Usuário</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default HeaderItems;
