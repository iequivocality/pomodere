import { PomoTask } from '@defs/index'
import { FC } from 'react'

export interface TaskListProps {
  tasks: PomoTask[]
}

export const TaskList: FC<TaskListProps> = (props) => {
  const { tasks } = props
  return (
    <div className="flex h-full w-full flex-col px-3">
      <div className='mt-8 mb-2 font-bold dark:text-gray-300 text-2xl'>
        TASK LIST
      </div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="truncate my-2 h-16 w-full rounded-md bg-slate-800 px-3 py-3 font-semibold text-slate-100"
        >
          {task.description}
        </div>
      ))}
    </div>
  )
}
