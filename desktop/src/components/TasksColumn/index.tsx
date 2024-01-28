import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import TasksColumnHeader from "./TasksColumnHeader"
import { TasksColumnProp } from "./types"

const TasksColumn = ({ title, tasks }: TasksColumnProp) => {
  return (
    <div className="w-1/4 h-4/5 bg-slate-100 rounded grid grid-rows-10">
      <TasksColumnHeader title={title} />
      <div className="grid-span-9 flex flex-col items-center">
        {
          tasks.map(({ title, description }) => (
            <Card className="w-11/12 mt-3">
              <CardHeader>
                <CardTitle>{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="max-h-40 overflow-y-auto font-thin">
                  {description ?? <span className="italic text-gray-400">Sem descrição</span>}
                </p>
              </CardContent>
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default TasksColumn
