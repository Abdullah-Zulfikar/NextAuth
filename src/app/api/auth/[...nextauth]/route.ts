// src/app/api/auth/[...nextauth]/route.ts

import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

// Define NextAuth configuration
const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.AUTH_GITHUB_ID || "",
      clientSecret: process.env.AUTH_GITHUB_SECRET || ""
    })
  ],
  pages: {
    signIn: '/', // Optional: Custom sign-in page
    error: '/error', // Optional: Custom error page
  }
});

// Use the handler as the default export
export { handler as GET, handler as POST };
