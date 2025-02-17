// lib/action/auth.ts

import { signIn, signOut } from "next-auth/react";  // Import directly from next-auth/react

export const login = async () => {
  await signIn("github", { redirect: true});  // Sign in with GitHub and redirect after login
};

export const logout = async () => {
  await signOut({ redirect: true });  // Sign out and redirect after logout
};
