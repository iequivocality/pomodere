import { useState } from 'react'
import { PomoTask } from '@defs/index'
import { Countdown } from './components/Countdown'
import { TaskList } from './components/TaskList'
import { RxCross2, RxHamburgerMenu, RxPlus } from 'react-icons/rx'
import * as Dialog from '@radix-ui/react-dialog'
import clsx from 'clsx'

const tasks: PomoTask[] = [
  {
    id: 1,
    description: 'Provider Task',
    dateCreated: new Date().toISOString(),
    dateFinished: new Date().toISOString()
  },
  {
    id: 2,
    description: 'Task list UI',
    dateCreated: new Date().toISOString(),
    dateFinished: new Date().toISOString()
  }
]

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
    <div className="flex h-screen w-screen justify-center dark:bg-gray-800">
      <div className={menuClass}>
        <TaskList tasks={tasks} />
      </div>
      <div className={mainContentClass}>
        <div className="absolute left-0 top-0 m-4 mt-1 flex flex-col gap-4">
          <button onClick={onOpenMenu}>
            <RxHamburgerMenu className="dark:text-gray-300" size={40} />
          </button>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <button>
                <RxPlus className="dark:text-gray-300" size={40} />
              </button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 animate-overlay-show bg-gray-800/50" />
              <Dialog.Content className="fixed left-1/2 top-1/2 h-[180px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-content-show rounded-md p-4 dark:bg-gray-800">
                <Dialog.Title className="mt-1 text-xl font-bold dark:text-gray-300">
                  ADD TASK
                </Dialog.Title>
                <fieldset className="my-4 flex items-center">
                  <input
                    className="text-md leading-1 inline-flex h-8 w-full flex-1 items-center justify-center rounded-md px-2 font-medium dark:bg-gray-950 dark:text-gray-300"
                    placeholder="Describe your task here..."
                  ></input>
                </fieldset>
                <div className="mt-8 flex justify-end">
                  <Dialog.Close asChild>
                    <button className="h-8 w-24 rounded-md bg-gray-950 font-bold dark:text-gray-300">
                      Save
                    </button>
                  </Dialog.Close>
                </div>
                <Dialog.Close asChild>
                  <button className="absolute right-4 top-4">
                    <RxCross2
                      className="dark:text-gray-300"
                      size={25}
                    ></RxCross2>
                  </button>
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
        <Countdown />
      </div>
    </div>
  )
}

export default App
