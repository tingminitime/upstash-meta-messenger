// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Pusher from 'pusher'
import ClientPusher from 'pusher-js'

export const serverPusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  useTLS: true,
})

export const clientPusher = new ClientPusher(
  process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
  {
    cluster: 'ap3',
    forceTLS: true,
  }
)
