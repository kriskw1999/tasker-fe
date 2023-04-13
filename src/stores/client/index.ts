import { signal } from "@preact/signals-react";

export const clientStore = {
  jwt: signal<string | undefined>(undefined),
  setJwt: function (jwt: string) {
    this.jwt.value = jwt;
  },
  isAuthenticated: function () {
    return this.jwt.value !== undefined;
  },
};
