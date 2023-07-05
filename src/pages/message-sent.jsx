import Head from 'next/head'
import Link from 'next/link'

import { SimpleLayout } from '@/components/SimpleLayout'
import { ChevronRightIcon } from '@/components/Icons'

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
                <Link href="/" className='inline-flex text-zinc-800 dark:text-zinc-200 hover:underline dark:hover:underline decoration-zinc-400transition hover:text-teal-500 dark:hover:text-teal-400'>
                <ChevronRightIcon className="h-4 w-4 stroke-current self-center" />ホームへ戻る
                </Link>
        }
      />
    </>
  )
}
