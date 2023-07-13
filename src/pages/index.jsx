import Head from 'next/head'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  TwitterIcon
} from '@/components/SocialIcons'

import { generateRssFeed } from '@/lib/generateRssFeed'
import { getAllArticles } from '@/lib/getAllArticles'
import { MainPhotos } from '@/components/MainPhotos'
import { Article } from '@/components/Article'
import { Stats } from '@/components/Stats'
import { AppDownloadLinks } from '@/components/AppDownloadLinks'
import { HomeSocialLink } from '@/components/HomeSocialLink'

export default function Home({ articles }) {
  return (
    <>
      <Head>
        <title>
          資源の回収ボックス検索プラットフォーム - boxx
        </title>
        <meta
          name="description"
          content="boxx（ボックス）は資源物の店頭回収ボックスに関する情報を提供するプラットフォームアプリです"
        />
      </Head>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            資源の回収ボックス検索アプリ - boxx
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            資源が効率的に回収、再利用される社会へ -
            boxx（ボックス）は資源物の店頭回収ボックスに関する情報を提供するプラットフォームアプリです。
          </p>
          <div className="mt-6 flex gap-6">
          <HomeSocialLink
              href="https://github.com"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
              target="_blank"
              rel="noopener noreferrer"
            />

            <HomeSocialLink
              href="https://twitter.com/boxx_earth"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
              target="_blank"
              rel="noopener noreferrer"
            />
            <HomeSocialLink
              href="https://instagram.com/boxx.earth/"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
              target="_blank"
              rel="noopener noreferrer"
          />
          </div>
        </div>
      </Container>
      <MainPhotos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24 order-first lg:order-last">
            <AppDownloadLinks />
            <Stats />
          </div>
        </div>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  if (process.env.NODE_ENV === 'production') {
    await generateRssFeed()
  }

  return {
    props: {
      articles: (await getAllArticles())
        .slice(0, 4)
        .map(({ component, ...meta }) => meta),
    },
  }
}
