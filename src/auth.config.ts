import type { NextAuthConfig } from "next-auth";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import { prisma } from "./lib/prisma";
import bcrypt from "bcryptjs";

export const authConfig = {
  pages: {
    signIn: "/auth/login",
    newUser: "/auth/new-account",
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (!parsedCredentials.success) {
          return null;
        }

        const { email, password } = parsedCredentials.data;

        // Buscar el correo
        const user = await prisma.user.findFirst({
          where: { email: email.toLowerCase() },
        });

        if (!user) return null;

        // Comparar contraseñas
        if (!bcrypt.compareSync(password, user.password)) return null;
        // Regresar el usuario

        const { email: userEmail, emailVerified, id, image, name, role } = user;

        return {
          email: userEmail,
          emailVerified,
          id,
          image,
          name,
          role,
        };
      },
    }),
  ],
} satisfies NextAuthConfig;

export const { signIn, signOut, auth } = NextAuth(authConfig);
