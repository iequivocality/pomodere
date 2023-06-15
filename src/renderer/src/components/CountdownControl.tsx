import { CountdownState } from '@defs/index'
import { FC } from 'react'
import { RxPlay, RxReload, RxPause } from 'react-icons/rx'

interface CountdownControlProps {
  countdownState: CountdownState
  onPlay: () => void
  onPause: () => void
  onReset: () => void
}

export const CountdownControl: FC<CountdownControlProps> = (props) => {
  const { onPlay, onPause, onReset, countdownState } = props

  return (
    <div className="mt-8 flex w-48 justify-between">
      {countdownState !== CountdownState.PLAYING && (
        <button onClick={onPlay}>
          <RxPlay className="dark:text-gray-300" size={48} />
        </button>
      )}
      {countdownState !== CountdownState.PAUSED && (
        <button onClick={onPause}>
          <RxPause className="dark:text-gray-300" size={48} />
        </button>
      )}
      {countdownState !== CountdownState.DEFAULT && (
        <button onClick={onReset}>
          <RxReload className="dark:text-gray-300" size={48} />
        </button>
      )}
    </div>
  )
}
