import React from 'react'
import { Message } from '@/typing'
import Image from 'next/image'
import { useSession } from 'next-auth/react'
import TimeAgo from 'react-timeago'
import TwString from 'react-timeago/lib/language-strings/zh-TW'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'

type Props = {
  key: string
  message: Message
}

const formatter = buildFormatter(TwString)

function MessageComponent({ message }: Props) {
  const { data: session } = useSession()
  const isUser = session?.user?.email === message.email

  return (
    <div className={`flex w-fit ${isUser && 'ml-auto'}`}>
      <div
        className={`mx-2 h-12 w-12 flex-shrink-0 overflow-hidden rounded-full ${
          isUser && 'order-2'
        }`}
      >
        <Image
          src={message.profilePic}
          className="h-full w-full object-cover object-center"
          alt="Profile avatar"
          height={50}
          width={50}
        ></Image>
      </div>

      <div className={`${isUser && 'order-1'}`}>
        <p
          className={`px-[2px] pb-[2px] text-[0.65rem] ${
            isUser ? 'text-right text-blue-400' : 'text-left text-red-400'
          }`}
        >
          {message.username}
        </p>
        <div className="flex items-end">
          <div
            className={`w-fit rounded-lg px-3 py-2 text-white ${
              isUser ? 'order-2 bg-blue-400' : 'order-1 bg-red-400'
            }`}
          >
            <p>{message.message}</p>
          </div>
          <p
            className={`px-2 text-[0.65rem] italic text-gray-300 ${
              isUser ? 'order-1 text-right' : 'order-2 text-left'
            }`}
          >
            {/* {new Date(message.created_at).toLocaleString(undefined, {
              year: 'numeric',
              month: '2-digit',
              day: '2-digit',
              hour: 'numeric',
              minute: 'numeric',
            })} */}
            <TimeAgo
              date={new Date(message.created_at)}
              minPeriod={10}
              formatter={formatter}
            ></TimeAgo>
          </p>
        </div>
      </div>
    </div>
  )
}

export default MessageComponent
