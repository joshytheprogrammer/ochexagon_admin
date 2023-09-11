const NextAuth = require("next-auth");
const CredentialsProvider = require("next-auth/providers/credentials");
const { signInWithEmailAndPassword } = require('firebase/auth');
const { auth } = require("@/app/firebase");

const authOptions = {
  // Configure one or more authentication providers
  pages: {
    signIn: '/'
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {},
      async authorize(credentials) {
        try {
          const userCredential = await signInWithEmailAndPassword(auth, credentials.email || '', credentials.password || '');
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
      }
    })
  ],
};

module.exports = NextAuth.default(authOptions);
