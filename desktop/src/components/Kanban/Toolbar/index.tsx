import HoverableButton from "@/components/ui/HoverableButton"
import { ListPlus, PlusSquare, Waypoints } from "lucide-react"

const Toolbar = () => {
  return (
    <div className="w-full-h-full row-span-1 bg-slate-400 grid grid-cols-4">
      <div className="w-full h-full flex items-center justify-evenly">
        <HoverableButton hover_title="Adicionar Tarefa">
          <PlusSquare />
        </HoverableButton>
        <div>
          <HoverableButton className="rounded-r-none" hover_title="Adicionar Coluna">
            <ListPlus />
          </HoverableButton>
          <HoverableButton className="rounded-l-none" hover_title="Organizar progressão">
            <Waypoints />
          </HoverableButton>
        </div>
      </div>
      <div className="w-full h-full"></div>
      <div className="w-full h-full"></div>
    </div>
  )
}

export default Toolbar
