// page.tsx
"use client"; // Add this line at the top

import { useSession } from "next-auth/react";
import Image from "next/image";

export default function HomePage() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return <div>You are not logged in</div>;
  }

  return (
    <div>
      <h1>Welcome {session.user?.name}</h1>
      <p>Email: {session.user?.email}</p>
      <Image src={session.user?.image || "/default-avatar.png"} alt="Avatar" />
    </div>
  );
}
