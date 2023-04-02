export type Task = {
  id: number;
  title: string;
  done: boolean;
  recurrent: boolean;
};

export type TaskBoard = {
  id: number;
  title: string;
  tasks: Task[];
};
