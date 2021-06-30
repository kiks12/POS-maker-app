/* 
next auth google authentication
dependencies
*/
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

/* authentication providers function */
export default NextAuth({
  /* configuration of one or more authentication providers */
  Providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
});
