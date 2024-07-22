import { Calendar, Mail, MapPin, Settings2, User, X } from "lucide-react";
import { useState } from "react";
import { CreateActivityModal } from "./create-activity-modal";
import { CreateLinkModal } from "./create-link-modal";
import { ImportantLinks } from "./important-links";
import { Guests } from "./guests";
import { Activities } from "./activities";
import { ActivitiesHeader } from "./activities-header";
import { Button } from "../../components/button";

export function TripDetailsPage() {
  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  function openCreateActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreateActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  function openCreateLinkModal() {
    setIsCreateLinkModalOpen(true);
  }

  function closeCreateLinkModal() {
    setIsCreateLinkModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <div className="bg-zinc-900 h-16 px-4 flex items-center gap-4 rounded-xl shadow-shape">
        <div className="flex items-center gap-4 flex-1">
          <div className="flex items-center gap-2 flex-1">
            <MapPin className="size-5 text-zinc-400" />
            <span className="text-zinc-100">Luanda, Angola</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="size-5 text-zinc-400" />
            <span className="text-zinc-100">17 de Agosto de 2024</span>
          </div>
        </div>

        <div className="w-px h-6 bg-zinc-800" />

        <Button variant="secondary">
          Alterar local/data
          <Settings2 className="size-5" />
        </Button>
      </div>

      <main className="px-6">
        <div className="flex gap-16">
          <div className="flex-1 space-y-6">
            <ActivitiesHeader
              openCreateActivityModal={openCreateActivityModal}
            />

            <Activities />
          </div>
          <div className="w-80 space-y-6">
            <ImportantLinks openCreateLinkModal={openCreateLinkModal} />

            <div className="w-full h-px bg-zinc-800" />

            <Guests />
          </div>
        </div>
      </main>

      {isCreateLinkModalOpen && (
        <CreateLinkModal closeCreateLinkModal={closeCreateLinkModal} />
      )}

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreateActivityModal={closeCreateActivityModal}
        />
      )}

      {false && (
        <div className="bg-black/60 fixed inset-0 flex items-center justify-center backdrop-blur-sm">
          <div className="bg-zinc-900 max-w-[40rem] w-full py-5 px-6 rounded-xl space-y-5 shadow-shape">
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">
                  Confirmar participação
                </h2>
                <button>
                  <X className="size-5 text-zinc-400" />
                </button>
              </div>
              <p>
                Você foi convidado(a) para participar de uma viagem para
                Florianópolis, Brasil nas datas de 16 a 27 de Agosto de 2024.
              </p>
              <p>
                Para confirmar sua presença na viagem, preencha os dados abaixo:
              </p>
            </div>

            <form className="space-y-3">
              <div className="bg-zinc-950 h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                <User className="size-4" />

                <input
                  name="name"
                  placeholder="Seu nome completo"
                  className="bg-transparent text-lg placeholder:text-zinc-400 outline-none w-full "
                />
              </div>

              <div className="bg-zinc-950 h-14 px-4 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Mail className="size-4" />

                <input
                  type="email"
                  name="email"
                  placeholder="Seu e-mail"
                  className="bg-transparent text-lg placeholder:text-zinc-400 outline-none w-full "
                />
              </div>

              <button
                type="submit"
                className="bg-lime-300 text-lime-900 text-center w-full h-11 rounded-lg px-5 py-2 font-medium  hover:bg-lime-400"
              >
                Confirmar minha presença
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
