import { createCookie } from "@remix-run/node";

export const userCookie = createCookie("user", {
  secure: process.env.NODE_ENV === "production",
  path: "/",
  httpOnly: true,
  maxAge: 604_800,
  sameSite: "lax",
});
