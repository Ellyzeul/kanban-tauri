import { TasksColumnHeaderProp } from "./types"
import variants from "./variants"

const TasksColumnHeader = ({ title }: TasksColumnHeaderProp) => {
  return (
    <div 
      className={variants({ bgColor: getTitleBgColor(title) })}
    >{title}</div>
  )
}

export default TasksColumnHeader

const getTitleBgColor = (title: string) => ({
  'A Fazer': 'to-do',
  'Em Progresso': 'in-progress',
  'Finalizado': 'finished',
} as {[key: string]: HeaderBgColor})[title] ?? undefined

type HeaderBgColor = 'to-do' | 'in-progress' | 'finished'
