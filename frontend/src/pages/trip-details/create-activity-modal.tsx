import { Calendar, Tag, X } from "lucide-react";
import { Button } from "../../components/button";

interface CreateActivityModalProps {
  closeCreateActivityModal: () => void;
}
export function CreateActivityModal({
  closeCreateActivityModal,
}: CreateActivityModalProps) {
  return (
    <div className="bg-black/60 fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-zinc-900 max-w-[40rem] w-full py-5 px-6 rounded-xl space-y-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg text-zinc-50 font-semibold">
              Cadastrar actividade
            </h2>
            <button onClick={closeCreateActivityModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p>Todos convidados podem visualizar as atividades.</p>
        </div>

        <form className="space-y-3">
          <div className="space-y-2">
            <div className="bg-zinc-950 h-14 px-4 py-2.5 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Tag className="size-5" />

              <input
                name="title"
                placeholder="Qual é a actividade?"
                className="bg-transparent w-full text-lg placeholder:text-zinc-400 outline-none"
              />
            </div>

            <div className="flex gap-2">
              <div className="bg-zinc-950 flex-1 h-14 px-4 py-2.5 border border-zinc-800 rounded-lg flex items-center gap-2">
                <Calendar className="size-5" />

                <input
                  type="datetime-local"
                  name="occurs_at"
                  placeholder="Dia da actividade"
                  className="bg-transparent w-full text-lg placeholder:text-zinc-400 outline-none [color-scheme:dark]"
                />
              </div>

              {/* <div className="bg-zinc-950 w-40 h-14 px-4 py-2.5 border border-zinc-800 rounded-lg flex items-center gap-2">
            <Clock className="size-5" />

            <input
              name="url"
              placeholder="Horário"
              className="bg-transparent w-full text-lg placeholder:text-zinc-400 outline-none"
            />
          </div> */}
            </div>
          </div>

          <Button variant="primary" size="full">
            Salvar actividade
          </Button>
        </form>
      </div>
    </div>
  );
}
