import { unstable_getServerSession } from 'next-auth'
import MessageList from '@/components/MessageList'
import ChatInput from '@/components/ChatInput'
import { AuthProviders } from '@/contexts/AuthProviders'
import { Message } from '@/typing'

async function Home() {
  const host =
    process.env.NODE_ENV === 'production'
      ? process.env.VERCEL_URL
      : process.env.DEV_URL
  const data = await fetch(`${host}/api/getMessages`).then((res) => res.json())

  const messages: Message[] = data.messages
  const session = await unstable_getServerSession()

  console.log('[Home]session:', session)

  return (
    <AuthProviders session={session}>
      <main>
        <MessageList initialMessages={messages}></MessageList>
        <ChatInput session={session}></ChatInput>
      </main>
    </AuthProviders>
  )
}

export default Home
