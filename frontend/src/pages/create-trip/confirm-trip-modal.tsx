import { AtSign, User, X } from "lucide-react";
import { FormEvent } from "react";

interface ConfirmTripModalProps {
  closeCorfirmTripModal: () => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export function ConfirmTripModal({
  closeCorfirmTripModal,
  createTrip,
}: ConfirmTripModalProps) {
  return (
    <div className="bg-black/60 fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-zinc-900 max-w-[40rem] w-full py-5 px-6 rounded-xl space-y-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">
              Confirmar criação de viagem
            </h2>
            <button onClick={closeCorfirmTripModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p>
            Para concluir a criação da viagem para{" "}
            <span className="text-zinc-100 font-semibold">'place'</span> nas
            datas de{" "}
            <span className="text-zinc-100 font-semibold">
              '16 a 27 de Agosto de 2024'
            </span>{" "}
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="bg-zinc-950 h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
            <User className="size-4" />

            <input
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder:text-zinc-400 outline-none w-full "
            />
          </div>

          <div className="bg-zinc-950 h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
            <AtSign className="size-4" />

            <input
              type="email"
              name="email"
              placeholder="Seu email pessoal"
              className="bg-transparent text-lg placeholder:text-zinc-400 outline-none w-full "
            />
          </div>

          <button
            type="submit"
            className="bg-lime-300 text-lime-900 text-center w-full h-11 rounded-lg px-5 py-2 font-medium  hover:bg-lime-400"
          >
            Confirmar criação da viajem
          </button>
        </form>
      </div>
    </div>
  );
}
