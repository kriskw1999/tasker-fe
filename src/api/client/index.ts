import { Endpoint } from "@/api/endpoint";

const API_ENDPOINT = process.env.NEXT_PUBLIC_API_ENDPOINT!;

const startFetch = (endpoint: string, method: string, body?: any) => {
  return fetch(API_ENDPOINT + endpoint, {
    method,
    body: JSON.stringify(body),
    headers: {
      "Content-Type": "application/json",
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