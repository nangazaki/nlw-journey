import { Link2, Plus } from "lucide-react";
import { Button } from "../../components/button";

interface ImportantLinksProps {
  openCreateLinkModal: () => void;
}

export function ImportantLinks({ openCreateLinkModal }: ImportantLinksProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl text-zinc-50 font-semibold">Links importantes</h3>

      <div className="space-y-5">
        <div className="flex items-center gap-4 justify-between">
          <div className="space-y-1.5">
            <span className="block text-zinc-100 font-medium">
              Reserva do casa
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104700011
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>

        <div className="flex items-center gap-4 justify-between">
          <div className="space-y-1.5">
            <span className="block text-zinc-100  font-medium">
              Reserva do AirBnB
            </span>
            <a
              href="#"
              className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
            >
              https://www.airbnb.com.br/rooms/104700011
            </a>
          </div>
          <Link2 className="size-5 text-zinc-400 shrink-0" />
        </div>
      </div>

      <Button onClick={openCreateLinkModal} variant="secondary" size="full">
        Adicionar novo link
        <Plus className="size-5" />
      </Button>
    </div>
  );
}
