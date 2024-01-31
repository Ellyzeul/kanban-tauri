import ColumnsDisplay from "./ColumnsDisplay"
import Toolbar from "./Toolbar"
import { KanbanProp } from "./types"

const Kanban = ({ display_info }: KanbanProp) => {
  return (
    <div className="w-full h-full grid grid-rows-5">
      <Toolbar/>
      <ColumnsDisplay {...display_info} />
    </div>
  )
}

export default Kanban
