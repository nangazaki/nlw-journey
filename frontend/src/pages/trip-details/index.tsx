import { Calendar, CircleCheck, MapPin, Plus, Settings2 } from "lucide-react";

export function TripDetailsPage() {
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

        <button className="bg-zinc-800 text-zinc-200 rounded-lg px-5 py-2 font-medium flex items-center flex-nowrap gap-2 hover:bg-zinc-700">
          Alterar local/data
          <Settings2 className="size-5" />
        </button>
      </div>

      <main className="px-6">
        <div className="flex gap-16">
          <div className="flex-1 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-semibold">Actividades</h2>

              <button className="bg-lime-300 text-lime-900 rounded-lg px-5 py-2 font-medium flex items-center gap-2 hover:bg-lime-400">
                <Plus className="size-5" />
                Cadastrar Actividade
              </button>
            </div>

            <div className="space-y-8">
              <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                  <span className="text-xl text-zinc-300 font-semibold">
                    Dia 17
                  </span>
                  <span className="text-xs text-zinc-500">Segunda-feira</span>
                </div>
                <p className="text-sm text-zinc-500">
                  Nenhuma actividade cadastrada nessa data.
                </p>
              </div>

              <div className="space-y-2.5">
                <div className="flex gap-2 items-baseline">
                  <span className="text-xl text-zinc-300 font-semibold">
                    Dia 18
                  </span>
                  <span className="text-xs text-zinc-500">Terça-feira</span>
                </div>
                <div className="space-y-2.5">
                  <div className="bg-zinc-900 px-4 py-2.5 flex items-center gap-3 rounded-xl shadow-shape">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">Academia em grupo</span>
                    <span className="text-sm text-zinc-400 ml-auto">8h30</span>
                  </div>

                  <div className="bg-zinc-900 px-4 py-2.5 flex items-center gap-3 rounded-xl shadow-shape">
                    <CircleCheck className="size-5 text-lime-300" />
                    <span className="text-zinc-100">Banho na sauna</span>
                    <span className="text-sm text-zinc-400 ml-auto">10h30</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-80">B</div>
        </div>
      </main>
    </div>
  );
}
