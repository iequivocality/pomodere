import { CountdownState } from '@defs/index';
import { FC } from 'react';
import { RxPlay, RxReload, RxPause } from "react-icons/rx";

interface CountdownControlProps {
  countdownState: CountdownState
  onPlay: () => void
  onPause: () => void
  onReset: () => void
}

export const CountdownControl : FC<CountdownControlProps> = (props) => {
  const { onPlay, onPause, onReset, countdownState } = props;

  return (
    <div className="w-56 flex justify-between mt-8">
      {countdownState !== CountdownState.PLAYING && <button onClick={onPlay}>
        <RxPlay size={75}/>
      </button>}
      {countdownState !== CountdownState.PAUSED && <button onClick={onPause}>
        <RxPause size={75}/>
      </button>}
      {countdownState !== CountdownState.DEFAULT && <button onClick={onReset}>
        <RxReload size={75}/>
      </button>}
    </div>
  );
};