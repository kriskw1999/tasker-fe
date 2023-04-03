export type Endpoint =
  | "taskboards"
  | "tasks"
  | `tasks/${number}`
  | `taskboards/${number}`;
