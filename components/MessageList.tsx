'use client'
import React, { useEffect } from 'react'
import useSWR from 'swr'
import fetcher from '@/utils/fetchMessage'
import { Message } from '@/typing'
import MessageComponent from './MessageComponent'
import { clientPusher } from '@/pusher'

type Props = {
  initialMessages: Message[]
}

function MessageList({ initialMessages }: Props) {
  const {
    data: messages,
    error,
    mutate,
  } = useSWR<Message[]>('/api/getMessages', fetcher)

  useEffect(() => {
    const channel = clientPusher.subscribe('messages')
    channel.bind('new-message', async (data: Message) => {
      // if you sent the message, no need to update cache
      if (messages?.find((message) => message.id === data.id)) return

      if (!messages) {
        mutate(fetcher)
      } else {
        mutate(fetcher, {
          optimisticData: [...messages!, data],
          rollbackOnError: true,
        })
      }
    })

    return () => {
      channel.unbind_all()
      channel.unsubscribe()
    }
  }, [messages, mutate, clientPusher])

  return (
    <div className="mx-auto max-w-2xl space-y-5 px-5 pt-8 pb-32 xl:max-w-4xl">
      {(messages || initialMessages).map((message) => (
        <MessageComponent
          key={message.id}
          message={message}
        ></MessageComponent>
      ))}
    </div>
  )
}

export default MessageList
