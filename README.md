## Upstash Meta Messenger Demo

練習作品，來源 : [ Let’s build META Messenger 2.0 with Next.js 13 (Upstash, TypeScript, Redis, Tailwind, NextAuth)](https://www.youtube.com/live/T2jKJF4BZOY?feature=share)。

## 功能

使用 Facebook 帳號登入，進行聊天功能。
> 目前為所有人在同一群組聊天

![Imgur](https://i.imgur.com/PWkKxF8.png)
![Imgur](https://i.imgur.com/d4vB47M.png)
![Imgur](https://i.imgur.com/2VaeXxf.png)
![Imgur](https://i.imgur.com/eKPBLGm.png)

## 安裝

### 安裝套件

```bash
pnpm install
```

### 環境變數說明

請參考 [.env.example](https://github.com/tingminitime/upstash-meta-messenger/blob/main/.env.example) 檔案。

```env
NEXTAUTH_URL=http://127.0.0.1:3000
NEXT_PUBLIC_NEXTAUTH_URL=http://127.0.0.1:3000
REDIS_URL= # your Redis url
PUSHER_APP_ID= # your Pusher app id
PUSHER_CLUSTER= # your Pusher cluster name
PUSHER_APP_KEY= # your Pusher app key
PUSHER_APP_SECRET= # your Pusher app secret
NEXT_PUBLIC_PUSHER_APP_KEY= # your Pusher app key for client side
FACEBOOK_ID= # your facebook app id
FACEBOOK_SECRET= # your facebook app secret
NEXTAUTH_SECRET= # your next-auth secret
```

### 運行專案

```bash
pnpm run dev
```

## 專案技術

- React
- Next.js v13
- TypeScript
- ESLint
- SWR
- Tailwindcss
- NextAuth
- Upstash
- ioredis
- Pusher
- react-icons
- react-timeago
