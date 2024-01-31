import { Card, CardContent, CardHeader, CardTitle } from "../../../ui/card"
import TasksColumnHeader from "./TasksColumnHeader"
import { TasksColumnProp } from "./types"

const TasksColumn = ({ title, tasks }: TasksColumnProp) => {
  return (
    <div className="w-full h-4/5 min-w-80 max-w-md mx-10 bg-slate-100 rounded rounded-t-lg grid grid-rows-10">
      <TasksColumnHeader title={title} />
      <div className="row-span-8 md:row-span-9 flex flex-col items-center overflow-y-auto">
        {
          tasks.map(({ title, description }, key) => (
            <Card className="w-11/12 mt-3" key={key}>
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
