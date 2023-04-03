import { http } from "@/api/client";

type CreateTaskRequest = {
  title: string;
  taskBoardId: number;
};

type PatchTaskRequest = {
  title?: string;
  done?: boolean;
  recurrent?: boolean;
};

export const createTask = async (payload: CreateTaskRequest) => {
  return http.post("tasks", { ...payload, done: false, recurrent: false });
};

export const updateTask = async (id: number, payload: PatchTaskRequest) => {
  return http.patch(`tasks/${id}`, payload);
};

export const deleteTask = async (id: number) => {
  return http.delete(`tasks/${id}`);
};
