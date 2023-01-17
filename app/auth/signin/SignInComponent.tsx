'use client'
import { getProviders, signIn } from 'next-auth/react'

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>
}

function SignInComponent({ providers }: Props) {
  const signInHandler = (providerId: string) => {
    signIn(providerId, {
      callbackUrl: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    })
  }

  return (
    <div>
      {providers &&
        Object.values(providers!).map((provider) => (
          <div key={provider.name}>
            <button
              type="button"
              className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
              onClick={() => signInHandler(provider.id)}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
    </div>
  )
}

export default SignInComponent
