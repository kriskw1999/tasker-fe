import { http } from "@/api/client";

type PatchTaskBoardRequest = {
  title?: string;
};

type PostTaskBoardRequest = {
  title: string;
};

export const getTaskBoards = () => {
  return http.get("taskboards");
};

export const patchTaskBoard = (id: number, payload: PatchTaskBoardRequest) => {
  return http.patch(`taskboards/${id}`, payload);
};

export const deleteBoard = (id: number) => {
  return http.delete(`taskboards/${id}`);
};

export const postTaskBoard = (payload: PostTaskBoardRequest) => {
  return http.post("taskboards", payload);
};
