import { TaskContext } from '@renderer/providers/TasksProvider'
import { FC, useContext } from 'react'

export const TaskList: FC = () => {
  const { tasks } = useContext(TaskContext)
  return (
    <div className="flex h-full w-full flex-col px-3">
      <div className="mb-2 mt-8 text-2xl font-bold dark:text-gray-300">
        TASK LIST
      </div>
      {tasks.map((task) => (
        <div
          key={task.id}
          className="my-2 h-16 w-full truncate rounded-md bg-slate-800 px-3 py-3 font-semibold text-slate-100"
        >
          {task.description}
        </div>
      ))}
    </div>
  )
}
