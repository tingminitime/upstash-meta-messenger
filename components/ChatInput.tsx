'use client'
import { Message } from '@/typing'
import React, { FormEvent, useState } from 'react'
import useSWR from 'swr'
import fetcher from '@/utils/fetchMessage'
import { Session } from 'next-auth'

type Props = {
  session: Session | null
}

function ChatInput({ session }: Props) {
  const [input, setInput] = useState('')
  const { data: messages, error, mutate } = useSWR('/api/getMessages', fetcher)

  async function addMessage(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!input || !session) return

    const messageToSend = input

    setInput('')

    const message: Message = {
      id: crypto.randomUUID(),
      message: messageToSend,
      created_at: Date.now(),
      username: session.user?.name || '',
      profilePic: session.user?.image || '/meta-logo.webp',
      email: session.user?.email || '',
    }

    const uploadMessageToUpstash = async () => {
      const data = await fetch('/api/addMessage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message,
        }),
      }).then((res) => res.json())

      return [...messages!, data.message]
    }

    await mutate(uploadMessageToUpstash, {
      optimisticData: [...messages!, message],
      rollbackOnError: true,
    })
  }

  return (
    <form
      onSubmit={addMessage}
      className="fixed bottom-0 z-50 flex w-full gap-x-2 border-t border-gray-100 bg-white px-10 py-5 dark:border-gray-500 dark:bg-slate-800"
    >
      <input
        type="text"
        value={input}
        disabled={!session}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter message here..."
        className="flex-grow rounded border px-4 py-3 line-clamp-1 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-blue-600 disabled:cursor-not-allowed disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={!input}
        className="rounded bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-blue-500"
      >
        Send
      </button>
    </form>
  )
}

export default ChatInput
