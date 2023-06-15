import { FC, useState } from 'react'
import { CountdownControl } from './CountdownControl'
import { CountdownState } from '@defs/index'
import { useInterval } from '@renderer/hooks/useInterval'

const TWENTY_FIVE_MINUTES = 1500

export const Countdown: FC = () => {
  const [countdownState, setCountdownState] = useState<CountdownState>(
    CountdownState.DEFAULT
  )
  const [seconds, setSeconds] = useState<number>(TWENTY_FIVE_MINUTES)

  useInterval(
    () => {
      if (seconds > 0) {
        setSeconds(seconds - 1)
      }
    },
    countdownState === CountdownState.PLAYING ? 1000 : null
  )

  const onPlay = () => {
    setCountdownState(CountdownState.PLAYING)
  }

  const onPause = () => {
    setCountdownState(CountdownState.PAUSED)
  }

  const onReset = () => {
    setCountdownState(CountdownState.DEFAULT)
    setSeconds(TWENTY_FIVE_MINUTES)
  }

  const minuteRemaining = seconds / 60
  const secondsRemaining = seconds % 60

  const minutesStr = Math.floor(minuteRemaining).toString().padStart(2, '0')
  const secondsStr = secondsRemaining.toString().padStart(2, '0')

  return (
    <>
      <div className="text-6xl font-bold dark:text-gray-300 md:text-8xl">
        {minutesStr} : {secondsStr}
      </div>
      <CountdownControl
        countdownState={countdownState}
        onPlay={onPlay}
        onPause={onPause}
        onReset={onReset}
      />
    </>
  )
}
