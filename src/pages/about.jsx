import Head from 'next/head'

import { Container } from '@/components/Container'

export default function About() {
  return (
    <>
      <Head>
        <title>boxxについて - boxx</title>
        <meta
          name="description"
          content="boxx（ボックス）は資源物の店頭回収ボックスに関する情報を提供するプラットフォームです。"
        />
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
              <header className="flex flex-col">
                <h1 className="text-4xl font-bold whitespace-pre text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  使う、
                  戻す、
                  循環させる。
                </h1>
              </header>
              <p className='mt-8 text-base text-zinc-600 dark:text-zinc-400'>
                boxx（ボックス）は、使用済みのペットボトル、プラスチック容器、空き缶、ダンボールなど、資源物の店頭回収ボックスを地図上で簡単に検索できるアプリです。
                持続可能な社会の構築に不可欠な循環経済（サーキュラーエコノミー）の実現に向けて、私たちの日常から始めましょう。boxxを使って身近にある資源回収ボックスを見つけ、資源の循環を促進しましょう。
              </p>
              <h2 className='mt-8 text-base font-semibold text-zinc-800 dark:text-zinc-100'>増え続ける物質採取量</h2>
              <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore enim maxime quis amet minima rem neque dolor. Corporis, tempora accusantium! Doloremque expedita libero asperiores rem explicabo repudiandae incidunt corrupti molestiae.</p>
              <h2 className='mt-8 text-base font-semibold text-zinc-800 dark:text-zinc-100'>増え続ける物質採取量</h2>
              <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore enim maxime quis amet minima rem neque dolor. Corporis, tempora accusantium! Doloremque expedita libero asperiores rem explicabo repudiandae incidunt corrupti molestiae.</p>
              <h2 className='mt-8 text-base font-semibold text-zinc-800 dark:text-zinc-100'>増え続ける物質採取量</h2>
              <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore enim maxime quis amet minima rem neque dolor. Corporis, tempora accusantium! Doloremque expedita libero asperiores rem explicabo repudiandae incidunt corrupti molestiae.</p>

          </div>
        </div>
      </Container>
    </>
  )
}
