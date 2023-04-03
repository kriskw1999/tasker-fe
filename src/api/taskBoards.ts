import { http } from "@/api/client";

export const getTaskBoards = () => {
  return http.get("taskboards");
};
