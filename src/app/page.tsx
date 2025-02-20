"use client"

import { login } from "@/lib/action/auth";

export default function Home() {
  return (
    <div>
      {" "}
      <p>You are not signed in </p> <button onClick={login}> Sign in with github</button>
    </div>
  );
}
