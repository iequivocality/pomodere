import { PomoTask } from "@defs/index"
import { Countdown } from "./components/Countdown"
import { CountdownControl } from "./components/CountdownControl"
import { TaskList } from "./components/TaskList"

const tasks : PomoTask[] = [
  {
    id: 1,
    description: 'Provider Task',
    dateCreated: new Date().toISOString(),
    dateFinished: new Date().toISOString()
  },
  {
    id: 1,
    description: 'Task list UI',
    dateCreated: new Date().toISOString(),
    dateFinished: new Date().toISOString()
  }
]

function App(): JSX.Element {
  return <div className="flex justify-center w-screen h-screen bg-slate-500">
    <div className="flex flex-col basis-1/3 items-center">
      <TaskList tasks={tasks}/>
    </div>
    <div className="flex flex-col basis-2/3 justify-center items-center">
      <Countdown/>
    </div>
  </div>
}

export default App
