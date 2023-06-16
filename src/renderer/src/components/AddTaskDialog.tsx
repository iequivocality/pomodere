import { useContext, useState } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { RxCross2, RxPlus } from 'react-icons/rx'
import { TaskContext } from '@renderer/providers/TasksProvider'
import { v4 as uuidv4 } from 'uuid'

export const AddTaskDialog = () => {
  const { addTask } = useContext(TaskContext)
  const [description, setDescription] = useState('')
  const [open, setOpen] = useState(false);

  const saveTask = () => {
    addTask({
      id: uuidv4(),
      description: description,
      dateCreated: new Date().toISOString(),
      dateFinished: ''
    })
    setOpen(false)
  }

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button>
          <RxPlus className="dark:text-gray-300" size={40} />
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 animate-overlay-show bg-gray-700/60" />
        <Dialog.Content className="fixed left-1/2 top-1/2 h-[180px] w-[400px] -translate-x-1/2 -translate-y-1/2 animate-content-show rounded-md p-4 dark:bg-gray-800">
          <Dialog.Title className="mt-1 text-xl font-bold dark:text-gray-300">
            ADD TASK
          </Dialog.Title>
          <fieldset className="my-4 flex items-center">
            <input
              className="text-md leading-1 inline-flex h-8 w-full flex-1 items-center justify-center rounded-md px-2 font-medium dark:bg-gray-950 dark:text-gray-300"
              placeholder="Describe your task here..."
              onChange={(e) => setDescription(e.target.value)}
              onKeyUp={(e) => e.code === "Enter" && saveTask()}
            ></input>
          </fieldset>
          <div className="mt-8 flex justify-end">
            <Dialog.Close asChild>
              <button
                className="h-8 w-24 rounded-md bg-gray-950 font-bold dark:text-gray-300"
                onClick={saveTask}
              >
                Save
              </button>
            </Dialog.Close>
          </div>
          <Dialog.Close asChild>
            <button className="absolute right-4 top-4">
              <RxCross2 className="dark:text-gray-300" size={25}></RxCross2>
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
