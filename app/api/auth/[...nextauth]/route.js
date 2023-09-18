import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/userModel";
import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google"

export const authOptions = {
    providers:[
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            // profile(googleProfile){
            //   return {
            //     ...googleProfile,
            //     family : googleProfile.family_name,
            //   }
            // }
        }),
    ],
    callbacks:({
        async signIn({ user, account}) {
            if (account.provider === "google") {
              const { name, email} = user;
              try {
                //connect MongoDB Database
                await connectMongoDB()
                //check user Exist or not
                const userExists = await User.findOne({ email });
                //If user Not Exist save user data into database
                if (!userExists) {
                  const res = await fetch(process.env.NEXTAUTH_URL + "/api/user", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      name,
                      email,
                    }),
                  });
                  if (res.ok) {
                    return user;
                  }
                }
              } catch (error) {
                console.log(error);
              }
            }
            return user;
          },
        async session({session}){
            const email = session?.user.email
            if(email){
               //await connectMongoDB()
              const user =  await User.findOne({email})
              session.user.userId = user._id
            }
              return session
          },
    })
}

const handler = NextAuth(authOptions)
export {handler as GET, handler as POST }