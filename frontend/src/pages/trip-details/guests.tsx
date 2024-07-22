import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../components/button";

export function Guests() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl text-zinc-50 font-semibold">Convidados</h3>

      <div className="flex items-center gap-4 justify-between">
        <div className="space-y-1.5">
          <span className="block text-zinc-100  font-medium">
            Helder Cambuta
          </span>
          <span className="block text-sm text-zinc-400 truncate">
            heldercambuta44@gmail.com
          </span>
        </div>
        <CircleCheck className="size-5 text-lime-300 shrink-0" />
      </div>

      <div className="flex items-center gap-4 justify-between">
        <div className="space-y-1.5">
          <span className="block text-zinc-100  font-medium">Yuri Bravo</span>
          <span className="block text-sm text-zinc-400 truncate">
            yuribravo@gmail.com
          </span>
        </div>
        <CircleDashed className="size-5 text-zinc-400 shrink-0" />
      </div>

      <div className="flex items-center gap-4 justify-between">
        <div className="space-y-1.5">
          <span className="block text-zinc-100  font-medium">
            Arsénio Muanda
          </span>
          <span className="block text-sm text-zinc-400 truncate">
            arseniovicente@gmail.com
          </span>
        </div>
        <CircleDashed className="size-5 text-zinc-400 shrink-0" />
      </div>

      <Button variant="secondary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
