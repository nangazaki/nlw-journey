import { ArrowRight, Calendar, MapPin, Settings2 } from "lucide-react";

interface DestinationAndDateStepProps {
  isGuestsInputOpen: boolean;
  closeGuestInput: () => void;
  openGuestInput: () => void;
}

export function DestinationAndDateStep({
  closeGuestInput,
  isGuestsInputOpen,
  openGuestInput,
}: DestinationAndDateStepProps) {
  return (
    <div className="bg-zinc-900 h-16 px-4 rounded-xl flex gap-3 items-center shadow-shape">
      <div className="flex items-center gap-2 flex-1">
        <MapPin className="size-5 text-zinc-400" />
        <input
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Para onde você vai?"
          className="bg-transparent text-lg placeholder:text-zinc-400 outline-none flex-1"
        />
      </div>

      <div className="flex items-center gap-2">
        <Calendar className="size-5 text-zinc-400" />
        <input
          type="text"
          disabled={isGuestsInputOpen}
          placeholder="Quando?"
          className="bg-transparent text-lg placeholder:text-zinc-400 outline-none w-40 "
        />
      </div>

      <div className="w-px h-6  bg-zinc-600" />

      {isGuestsInputOpen ? (
        <button
          onClick={closeGuestInput}
          className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center flex-nowrap gap-2 hover:bg-zinc-700"
        >
          Alterar local/data
          <Settings2 className="size-5" />
        </button>
      ) : (
        <button
          onClick={openGuestInput}
          className="bg-lime-300 text-lime-900 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400"
        >
          Continuar
          <ArrowRight className="size-5" />
        </button>
      )}
    </div>
  );
}
