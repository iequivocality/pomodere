export interface PomoTask {
  id: string
  description: string
  dateCreated: string
  dateFinished: string
}

export enum CountdownState {
  PLAYING,
  PAUSED,
  DEFAULT
}

export enum PomodoroTimerType {
  WORK,
  BREAK
}
