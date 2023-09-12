import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@utils/firebase/firebase";

const handler = NextAuth({
  pages: {
    signIn: "/",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        try {
          const userCredential = await signInWithEmailAndPassword(
            auth,
            credentials.email || "",
            credentials.password || ""
          );
          if (userCredential.user) {
            return userCredential.user;
          }
          return null;
        } catch (error) {
          console.error(error);
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        }
      },
    }),
  ],
  
});

export { handler as GET, handler as POST }