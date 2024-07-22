import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestStepProps {
  openGuestModal: () => void;
  openCorfirmTripModal: () => void;
  emailsToInvite: string[];
}

export default function InviteGuestStep({
  emailsToInvite,
  openCorfirmTripModal,
  openGuestModal,
}: InviteGuestStepProps) {
  return (
    <div className="bg-zinc-900 h-16 px-4 rounded-xl flex gap-3 items-center shadow-shape">
      <div className="flex flex-1">
        <button
          onClick={openGuestModal}
          className="flex items-center gap-2 flex-1"
        >
          <UserRoundPlus className="size-5 text-zinc-400" />

          {emailsToInvite.length > 0 ? (
            <span className="text-zinc-100">
              {emailsToInvite.length} pessoa(s) condada(s)
            </span>
          ) : (
            <span className="text-zinc-400 text-lg text-left flex-1">
              Quem estará na viagem?
            </span>
          )}
        </button>
      </div>

      <div className="w-px h-6  bg-zinc-600" />

      <Button onClick={openCorfirmTripModal}>
        Confirmar viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  );
}
