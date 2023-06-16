import { PomoTask } from '@defs/index'
import { type FC, type ReactNode, createContext, useState } from 'react'

const sampleTasks: PomoTask[] = [
  {
    id: '25b34aa7-b5bb-4f4b-8466-d8dbf17c53b0',
    description: 'Provider Task',
    dateCreated: new Date().toISOString(),
    dateFinished: new Date().toISOString()
  },
  {
    id: 'a1378d9c-2164-457f-a2ed-258586430ebc',
    description: 'Task list UI',
    dateCreated: new Date().toISOString(),
    dateFinished: new Date().toISOString()
  }
]

export interface TaskContextType {
  tasks: PomoTask[]
  addTask: (newTask: PomoTask) => void
  removeTask: (taskId: string) => void
}

export const TaskContext = createContext<TaskContextType>({
  tasks: [],
  addTask: () => {},
  removeTask: () => {}
})

interface TaskProviderProps {
  children: ReactNode
}

export const TaskProvider: FC<TaskProviderProps> = ({ children }) => {
  const [tasks, setTasks] = useState<PomoTask[]>(sampleTasks)

  const addTask = (newTask: PomoTask) => {
    setTasks([...tasks, newTask])
  }

  const removeTask = (taskId: string) => {
    setTasks([...tasks.filter((task) => task.id !== taskId)])
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        removeTask
      }}
    >
      {children}
    </TaskContext.Provider>
  )
}
