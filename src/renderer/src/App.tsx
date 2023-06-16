import { useState } from 'react'
import { Countdown } from './components/Countdown'
import { TaskList } from './components/TaskList'
import { RxHamburgerMenu } from 'react-icons/rx'
import clsx from 'clsx'
import { AddTaskDialog } from './components/AddTaskDialog'
import { TaskProvider } from './providers/TasksProvider'

enum AppState {
  MENU_OPEN,
  DEFAULT
}

function App(): JSX.Element {
  const [appState, setAppState] = useState<AppState>(AppState.DEFAULT)

  const onOpenMenu = () => {
    setAppState(
      appState !== AppState.MENU_OPEN ? AppState.MENU_OPEN : AppState.DEFAULT
    )
  }

  const menuClass = clsx(
    'transition-basis transition-300 flex flex-col basis-0 items-center relative overflow-hidden dark:bg-gray-900',
    {
      'basis-1/3': appState === AppState.MENU_OPEN
    }
  )
  const mainContentClass = clsx(
    'transition-basis transition-300 flex flex-col basis-full justify-center items-center relative p-4',
    {
      'basis-2/3': appState === AppState.MENU_OPEN
    }
  )

  return (
    <TaskProvider>
      <div className="flex h-screen w-screen justify-center dark:bg-gray-800">
        <div className={menuClass}>
          <TaskList />
        </div>
        <div className={mainContentClass}>
          <div className="absolute left-0 top-0 m-4 mt-1 flex flex-col gap-4">
            <button onClick={onOpenMenu}>
              <RxHamburgerMenu className="dark:text-gray-300" size={40} />
            </button>
            <AddTaskDialog />
          </div>
          <Countdown />
        </div>
      </div>
    </TaskProvider>
  )
}

export default App
