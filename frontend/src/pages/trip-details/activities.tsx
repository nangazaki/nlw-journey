import { CircleCheck, CircleDashed } from "lucide-react";

export function Activities() {
  return (
    <div className="space-y-8">
      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 17</span>
          <span className="text-xs text-zinc-500">Segunda-feira</span>
        </div>
        <p className="text-sm text-zinc-500">
          Nenhuma actividade cadastrada nessa data.
        </p>
      </div>

      <div className="space-y-2.5">
        <div className="flex gap-2 items-baseline">
          <span className="text-xl text-zinc-300 font-semibold">Dia 18</span>
          <span className="text-xs text-zinc-500">Terça-feira</span>
        </div>
        <div className="space-y-2.5">
          <div className="bg-zinc-900 px-4 py-2.5 flex items-center gap-3 rounded-xl shadow-shape">
            <CircleDashed className="size-5 text-zinc-400" />
            <span className="text-zinc-100">Acordar</span>
            <span className="text-sm text-zinc-400 ml-auto">7h00</span>
          </div>

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
  );
}
