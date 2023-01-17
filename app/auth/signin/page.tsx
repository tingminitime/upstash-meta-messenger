import React from 'react'
import { getProviders } from 'next-auth/react'
import Image from 'next/image'
import SignInComponent from './SignInComponent'

async function SignInPage() {
  const providers = await getProviders()
  return (
    <div className="flex flex-col items-center gap-y-12 py-12">
      <div>
        <Image
          className="h-28 w-28 object-cover object-center"
          width={500}
          height={500}
          src="https://upload.wikimedia.org/wikipedia/commons/b/be/Facebook_Messenger_logo_2020.svg"
          alt="Messenger logo"
        ></Image>
      </div>

      <SignInComponent providers={providers}></SignInComponent>
    </div>
  )
}

export default SignInPage
