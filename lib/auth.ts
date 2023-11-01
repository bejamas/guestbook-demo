import type {
	GetServerSidePropsContext,
	NextApiRequest,
	NextApiResponse,
} from 'next'
import type { NextAuthOptions } from 'next-auth'
import { getServerSession } from 'next-auth'
import GitHub from 'next-auth/providers/github'

// You'll need to import and pass this
// to `NextAuth` in `app/api/auth/[...nextauth]/route.ts`
export const authOptions = {
	providers: [
		GitHub({
			clientId: process.env.GITHUB_CLIENT_KEY as string,
			clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
		}),
	], // rest of your config
} satisfies NextAuthOptions

// Use it in server contexts
export function auth(
	...args:
		| [GetServerSidePropsContext['req'], GetServerSidePropsContext['res']]
		| [NextApiRequest, NextApiResponse]
		| []
) {
	return getServerSession(...args, authOptions)
}
