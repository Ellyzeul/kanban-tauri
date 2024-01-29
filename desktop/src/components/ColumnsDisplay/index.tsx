import TasksColumn from "./TasksColumn"
import { ColumnsDisplayProp } from "./types"

const ColumnsDisplay = ({ columns }: ColumnsDisplayProp) => {
  return (
    <div className="w-full h-full flex justify-start items-center overflow-x-auto">
      {columns.map(props => <TasksColumn {...props} />)}
    </div>
  )
}

export default ColumnsDisplay
