import { PomoTask } from '@defs/index';
import { FC } from 'react';

export interface TaskListProps {
  tasks: PomoTask[]
}

export const TaskList : FC<TaskListProps> = (props) => {
  const { tasks } = props;
  return (
    <div className='flex flex-col w-full h-full'>
      {tasks.map((task) => (
        <div key={task.id} className='rounded-md w-full bg-slate-800 h-16 ml-2 my-2 py-2 px-4 font-semibold text-slate-100 uppercase'>
          {task.description}
        </div>
      ))}
    </div>
  );
}