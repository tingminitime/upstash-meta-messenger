'use client'
import { getProviders, signIn } from 'next-auth/react'

type Props = {
  providers: Awaited<ReturnType<typeof getProviders>>
}

function SignInComponent({ providers }: Props) {
  const signInHandler = (providerId: string) => {
    signIn(providerId, {
      callbackUrl:
        process.env.NODE_ENV === 'production'
          ? process.env.NEXT_PUBLIC_VERCEL_URL
          : process.env.NEXT_PUBLIC_DEV_URL,
    })
  }

  return (
    <div className="">
      {Object.values(providers!).map((provider) => (
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
