"use client"

import { signIn, useSession } from "next-auth/react";



export default function Home() {
  const { data: session} = useSession()
  return (
    <>
    { session ? (
      <>
        <h1>Welcome Back</h1>
        { JSON.stringify(session)}
        {session.user?.email}
      </>

    ) : (
      <>
        <h1>You are not logged in </h1>
        <button onClick={()=>signIn("github")}>Sign in with github</button>
      </>
    )

    }
    </>
  );
}
