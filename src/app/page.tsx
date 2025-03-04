"use client"

import { signIn, signOut, useSession } from "next-auth/react";



export default function Home() {
  const { data: session} = useSession()
  return (
    <>
    { session ? (
      <>
        <h1>Welcome Back</h1>
        { JSON.stringify(session)}
        {session.user?.email}
        <button onClick={()=>signOut()}>Logout</button>
      </>

    ) : (
      <>
        <h1>You are not logged in </h1>
        <button onClick={()=>signIn("github")}>Sign in with github</button>
        <button onClick={()=>signIn("google")}>Sign in with google</button>
      </>
    )

    }
    </>
  );
}
