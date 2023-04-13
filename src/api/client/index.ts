import { Endpoint } from "@/api/endpoint";
import { clientStore } from "@/stores/client";
import { getEnv } from "@/utils/env";

const startFetch = (endpoint: string, method: string, body?: any) => {
  return fetch(getEnv().apiEndpoint + endpoint, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${clientStore.jwt.value}`,
    },
  });
};

export const http = {
  get: (endpoint: Endpoint) =>
    startFetch(endpoint, "GET").then((res) => res.json()),
  post: (endpoint: Endpoint, body: any) =>
    startFetch(endpoint, "POST", body).then((res) => res.json()),
  patch: (endpoint: Endpoint, body: any) =>
    startFetch(endpoint, "PATCH", body).then((res) => res.json()),
  delete: (endpoint: Endpoint) => startFetch(endpoint, "DELETE"),
};
