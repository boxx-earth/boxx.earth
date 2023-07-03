import Head from 'next/head'

import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllTopics } from '../../lib/getAllTopics'

import { Topic } from '@/components/Topic'

export default function TopicsIndex({ topics }) {
  return (
    <>
      <Head>
        <title>トピックス - boxx</title>
        <meta
          name="description"
          content="トピックス - boxxからのお知らせ、資源の循環利用に関する政策、技術、そして企業などによる取組みに関する情報をご紹介します。"
        />
      </Head>
      <SimpleLayout
        title="トピックス"
        intro="boxxからのお知らせ、資源の循環利用に関する政策、技術、そして企業などによる取組みに関する情報をご紹介します。"
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          <div className="flex max-w-3xl flex-col space-y-16">
            {topics.map((topic) => (
              <Topic key={topic.slug} topic={topic} />
            ))}
          </div>
        </div>
      </SimpleLayout>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      topics: (await getAllTopics()).map(({ component, ...meta }) => meta),
    },
  }
}
