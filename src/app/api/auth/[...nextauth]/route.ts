import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

import { User as NextAuthUser } from "next-auth";

interface NextAuthUserWithStringId extends NextAuthUser {
  id: string;
  username: string;
}
declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      username?: string | null;  // Add the username property
    };
  }
}

interface Profile {
  id: string;
  name: string;
  email: string;
  avatar_url: string;
  login: string;
}


export const auth = NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
      profile(profile) {
        return {
          id: profile.id.toString(),  // Convert GitHub ID to string
          name: profile.name || profile.login,
          email: profile.email,
          image: profile.avatar_url,
          username: profile.login,  // Using GitHub's login as the username
        } as NextAuthUserWithStringId;
      },
    }),
  ],
  callbacks: {
    jwt({ token, user, profile }) {
      if (user) token.user = user;  // Add user info to the JWT token
      if (profile) token.profile = profile;  // Add profile info to the JWT token
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        // Add the username from the token profile to the session
        session.user = {
          ...session.user,
          username: (token.profile as Profile ).login,
        };
      }
      return session;
    },
  },
});
