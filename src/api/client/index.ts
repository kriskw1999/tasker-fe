import { Endpoint } from "@/api/endpoint";
import { clientStore } from "@/stores/client";
import { getEnv } from "@/utils/env";

type APICallMethod = "GET" | "POST" | "PATCH" | "DELETE";

const startFetch =
  (method: APICallMethod) => async (endpoint: Endpoint, body?: any) => {
    const result = await fetch(getEnv().apiEndpoint + endpoint, {
      method,
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${clientStore.jwt.value}`,
      },
    });

    if (method !== "DELETE") {
      return await result.json();
    }
  };

/**
 * This is the client of the application that uses the fetch API
 * exposes all the needed methods:
 * - get
 * - post
 * - patch
 * - delete
 */
export const http = {
  get: startFetch("GET"),
  post: startFetch("POST"),
  patch: startFetch("PATCH"),
  delete: startFetch("DELETE"),
};
