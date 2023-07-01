import Head from "next/head"
import { SimpleLayout } from '@/components/SimpleLayout'

export default function AnnouncementsIndex () {
    return (
        <>
      <Head>
        <title>boxxからのお知らせ - boxx</title>
        <meta
          name="description"
          content="boxxからのお知らせです。"
        />
      </Head>
      <SimpleLayout
        title="boxxからのお知らせ"
        intro="boxxからのお知らせや、ニュースリリースを掲載しています。"
      >
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
          {/* <div className="flex max-w-3xl flex-col space-y-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div> */}
        </div>
      </SimpleLayout>

        </>
    )
}