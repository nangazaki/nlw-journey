import { Link2, Tag, X } from "lucide-react";
import { Button } from "../../components/button";

interface CreateLinkModalProps {
  closeCreateLinkModal: () => void;
}

export function CreateLinkModal({
  closeCreateLinkModal,
}: CreateLinkModalProps) {
  return (
    <div className="bg-black/60 fixed inset-0 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-zinc-900 max-w-[40rem] w-full py-5 px-6 rounded-xl space-y-5 shadow-shape">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-semibold">Cadastrar link</h2>
            <button onClick={closeCreateLinkModal}>
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p>Todos convidados podem visualizar os links importantes.</p>
        </div>

        <form className="space-y-3">
          <div className="space-y-2">
            <div className="bg-zinc-950 h-14 px-4 py-2.5 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Tag className="size-5" />

              <input
                name="title"
                placeholder="Título do link"
                className="bg-transparent w-full text-lg placeholder:text-zinc-400 outline-none"
              />
            </div>

            <div className="bg-zinc-950 h-14 px-4 py-2.5 border border-zinc-800 rounded-lg flex items-center gap-2">
              <Link2 className="size-5" />

              <input
                name="url"
                placeholder="URL"
                className="bg-transparent w-full text-lg placeholder:text-zinc-400 outline-none"
              />
            </div>
          </div>

          <Button variant="primary" size="full">
            Salvar link
          </Button>
        </form>
      </div>
    </div>
  );
}
