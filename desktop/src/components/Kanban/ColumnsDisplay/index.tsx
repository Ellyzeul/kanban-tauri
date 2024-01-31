import TasksColumn from "./TasksColumn"
import { ColumnsDisplayProp } from "./types"

const ColumnsDisplay = ({ columns }: ColumnsDisplayProp) => {
  return (
    <div className="w-full h-full row-span-4 flex justify-start items-center overflow-x-auto">
      {columns.map((props, key) => <TasksColumn key={key} {...props} />)}
    </div>
  )
}

export default ColumnsDisplay
