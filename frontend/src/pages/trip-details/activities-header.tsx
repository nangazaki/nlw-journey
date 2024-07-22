import { Plus } from "lucide-react";
import { Button } from "../../components/button";

interface ActivitiesHeaderProps {
  openCreateActivityModal: () => void;
}

export function ActivitiesHeader({
  openCreateActivityModal,
}: ActivitiesHeaderProps) {
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-3xl font-semibold">Actividades</h2>

      <Button onClick={openCreateActivityModal}>
        <Plus className="size-5" />
        Cadastrar Actividade
      </Button>
    </div>
  );
}
