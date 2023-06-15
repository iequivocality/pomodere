import { PomoTask } from '@defs/index'
import { FC } from 'react'

export interface TaskListProps {
  tasks: PomoTask[]
}

export const TaskList: FC<TaskListProps> = (props) => {
  const { tasks } = props
  return (
    <div className="flex h-full w-full flex-col">
      {tasks.map((task) => (
        <div
          key={task.id}
          className="my-2 ml-2 h-16 w-full overflow-hidden rounded-md bg-slate-800 px-4 py-2 font-semibold uppercase text-slate-100"
        >
          {task.description}
        </div>
      ))}
    </div>
  )
}
