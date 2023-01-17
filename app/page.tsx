import { unstable_getServerSession } from 'next-auth'
import MessageList from '@/components/MessageList'
import ChatInput from '@/components/ChatInput'
import { AuthProviders } from '@/contexts/AuthProviders'
import { ThemeProvider } from '@/contexts/ThemeProviders'
import { Message } from '@/typing'
import redis from '@/redis'

async function Home() {
  // ! Cannot fetch internal api route, will broken when building.
  // const host = process.env.VERCEL_URL || 'http://localhost:3000'
  // const data = await fetch(`${host}/api/getMessages`).then((res) => res.json())
  // const messages: Message[] = messages

  const messagesRes = await redis.hvals('messages')
  const messages: Message[] = messagesRes
    .map((message) => JSON.parse(message))
    .sort((a, b) => a.created_at - b.created_at)

  const session = await unstable_getServerSession()

  return (
    <AuthProviders session={session}>
      <ThemeProvider>
        <main className="bg-white dark:bg-slate-900">
          <MessageList initialMessages={messages}></MessageList>
          <ChatInput session={session}></ChatInput>
        </main>
      </ThemeProvider>
    </AuthProviders>
  )
}

export default Home
