export interface PomoTask {
  id: number
  description: string
  dateCreated: string
  dateFinished: string
}

export enum CountdownState {
  PLAYING,
  PAUSED,
  DEFAULT
}

export enum PomodoroState {
  WORK,
  BREAK
}
