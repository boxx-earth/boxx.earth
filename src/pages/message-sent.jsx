import Head from 'next/head'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { ChevronRight } from '@/components/Icons'

export default function MessageSent() {
  return (
    <>
      <Head>
        <title>You’re subscribed - Spencer Sharp</title>
        <meta
          name="description"
          content="Thanks for subscribing to my newsletter."
        />
      </Head>
      <SimpleLayout
        title="メッセージを送信しました."
        intro="お問合せありがとうございます.近日中に担当者よりご連絡差し上げますので少々お待ちください."        
        children={
                <Link href="/" className='group flex items-center hover:underline dark:hover:underline decoration-zinc-400'>
                <ChevronRight className="h-4 w-4 fill-zinc-500 dark:fill-zinc-400" />
                <p className='text-zinc-600 dark:text-zinc-400'>ホームへ戻る</p>
                </Link>
        }
      />
    </>
  )
}
