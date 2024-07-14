import { AtSign, Plus, X } from "lucide-react";
import { FormEvent } from "react";

interface InviteGuestsModalProps {
  emailsToInvite: string[];
  closeGuestModal: () => void;
  removeEmailFromInvite: (email: string) => void;
  addNewEmailToInvite: (event: FormEvent<HTMLFormElement>) => void;
}

export function InviteGuestsModal({
  emailsToInvite,
  closeGuestModal,
  addNewEmailToInvite,
  removeEmailFromInvite,
}: InviteGuestsModalProps) {
  return (
    <div className="bg-black/60 fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-zinc-900 max-w-[40rem] w-full py-5 px-6 rounded-xl space-y-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Seleceionar convidados</h2>
            <button onClick={closeGuestModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p>
            Os convidados irão receber e-mails para confirmar a participação na
            viagem.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {emailsToInvite.map((email) => {
            return (
              <div
                key={email}
                className="bg-zinc-800 py-1.5 px-2.5 flex items-center gap-2 rounded-md"
              >
                <span className="text-zinc-300">{email}</span>
                <button
                  type="button"
                  onClick={() => removeEmailFromInvite(email)}
                >
                  <X className="size-4 text-zinc-400" />
                </button>
              </div>
            );
          })}
        </div>

        <div className="w-full h-px bg-zinc-800" />

        <form
          onSubmit={addNewEmailToInvite}
          className="bg-zinc-950 p-2.5 border border-zinc-800 rounded-lg flex gap-2"
        >
          <div className="px-2 flex items-center gap-2 flex-1">
            <AtSign className="size-4" />

            <input
              type="email"
              name="email"
              placeholder="Digite o e-mail do convidado..."
              className="bg-transparent text-lg placeholder:text-zinc-400 outline-none w-full "
            />
          </div>
          <button className="bg-lime-300 text-lime-900 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
            Convidar
            <Plus className="size-5" />
          </button>
        </form>
      </div>
    </div>
  );
}
