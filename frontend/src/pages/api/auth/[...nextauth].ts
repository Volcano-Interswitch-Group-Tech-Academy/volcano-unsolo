import axiosInstance from "@/services/api/axios"
import endpoints from "@/services/api/endpoints"
import { NextAuthOptions, User } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { UserAuth, UserToken } from "../../../../types/types";
import jwtDecode from "jwt-decode";
import NextAuth from "next-auth/next";

export const authOptions: NextAuthOptions = {
    providers: [
      CredentialsProvider({
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        // You can pass any HTML attribute to the <input> tag through the object.
        credentials: {
          email: { label: "Email", type: "text" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // You can also use the `req` object to obtain additional parameters
          // (i.e., the request IP address)
          const loginEndpoint = endpoints.user.login
          const res = await axiosInstance.post(loginEndpoint, credentials)
          if (res.status !== 200) {
            return null
          } 
          const user = res.data
        //   const decodedUser = jwtDecode(user.object) as UserToken
        //   decodedUser.id = decodedUser.sub
          // If no error and we have user data, return it
          if (user) {
            return user
          }
          // Return null if user data could not be retrieved
          return null
        }
      })
    ],
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt"
    },
    callbacks: {
        async jwt({token, user}) {
            if (user && user?.object) {
                token.user_token = user.object
            }
            console.log({token, user})
            return token
        },
        async session ({session, token}) {
            session.accessToken = undefined
            if (token.user_token) {
                const decodedUser: UserToken = jwtDecode(token.user_token)
                session.accessToken = token.user_token
                if (decodedUser.sub) {
                    session.user = decodedUser
                }
            }
            return session
        }
    }
}

export default NextAuth(authOptions)
