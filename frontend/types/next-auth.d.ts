import { UserAuth, UserToken } from "./types"
import NextAuth, { DefaultSession } from "next-auth"

declare module "next-auth" {
    interface Session {
        accessToken?: string
        user: UserToken & DefaultSession["user"]
    }


    interface User {
        object: UserAuth["object"]
    }
}

declare module "next-auth/jwt" {
    interface JWT {
        user_token?: string;
    }
}