import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      CLIENT_ID: process.env.CLIENT_ID,
      CLIENT_SECRET: process.env.CLIENT_SECRET,
      authorizationParams: {
        hd: "itbhu.ac.in",
      },
    }),
  ],
  callbacks: {
    async session({ session }) {
      return session;
    },

    async signIn({ profile }) {
      console.log(profile);

      try {
        await connect();
        console.log(profile.email);
        const emailPattern = /^[a-zA-Z]+\.[a-zA-Z]+\.mat\d{2}@itbhu\.ac\.in$/;
        if (!emailPattern.test(profile.email)) {
          console.log(
            "Invalid email format. You are not supposed to login here!"
          );
          // If the email doesn't match the desired pattern, return false
          return false;
        }

        const doesUserExist = await User.findOne({ email: profile.email });

        if (!doesUserExist) {
          const user = await User.create({
            email: profile.email,
            name: profile.name,
            img: profile.picture,
            about: "",
            yearOfJoining: "",
            github: "",
            linkedin: "",
            skills: "",
            resume: "",
          });
        }
        return true;
      } catch (err) {
        console.log(err);
      }
    },
  },
});

export { handler as GET, handler as POST };
