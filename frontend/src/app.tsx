import {
  MapPin,
  Calendar,
  ArrowRight,
  UserRoundPlus,
  Settings2,
  X,
} from "lucide-react";
import { useState } from "react";

export function App() {
  const [isGuestsInputOpen, setIsGuestsInputOpen] = useState(false);
  const [isGuestModalOpen, setIsGuestModalOpen] = useState(false);

  function openGuestInput() {
    setIsGuestsInputOpen(true);
  }

  function closeGuestInput() {
    setIsGuestsInputOpen(false);
  }

  function openGuestModal() {
    setIsGuestModalOpen(true);
  }

  function closeGuestModal() {
    setIsGuestModalOpen(false);
  }

  return (
    <div className="bg-pattern bg-center bg-no-repeat h-screen flex items-center justify-center">
      <div className="max-w-3xl w-full  px-6 text-center space-y-10">
        <div className="flex flex-col items-center gap-3">
          <img src="/logo.svg" alt="" />
          <p className="text-zinc-300 text-lg">
            Convide seus amigos e planeje sua próxima viagem!
          </p>
        </div>

        <div className="space-y-4">
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

          {isGuestsInputOpen && (
            <div className="bg-zinc-900 h-16 px-4 rounded-xl flex gap-3 items-center shadow-shape">
              <div className="flex flex-1">
                <button
                  onClick={openGuestModal}
                  className="flex items-center gap-2 flex-1"
                >
                  <UserRoundPlus className="size-5 text-zinc-400" />
                  <span className="text-zinc-400 text-lg text-left flex-1">
                    Quem estará na viagem?
                  </span>
                </button>
              </div>

              <div className="w-px h-6  bg-zinc-600" />

              <button className="bg-lime-300 text-lime-900 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                Confirmar viagem
                <ArrowRight className="size-5" />
              </button>
            </div>
          )}
        </div>

        <p className="text-sm text-zinc-500">
          Ao planejar sua viagem pela plann.er você automaticamente concorda com{" "}
          <br />
          nossos{" "}
          <a href="#" className="text-zinc-300 underline">
            termos de uso
          </a>{" "}
          e{" "}
          <a href="#" className="text-zinc-300 underline">
            políticas de privacidade
          </a>
          .
        </p>
      </div>

      {isGuestModalOpen && (
        <div className="bg-black/60 fixed inset-0 flex items-center justify-center">
          <div className="bg-zinc-900 max-w-[40rem] w-full py-5 px-6 rounded-xl shadow-shape">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold">Seleceionar convidados</h2>
              <button onClick={closeGuestModal}>
                <X className="size-5 text-zinc-400" />
              </button>
            </div>
            <p>
              Os convidados irão receber e-mails para confirmar a participação
              na viagem.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
