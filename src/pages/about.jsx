import Head from 'next/head'
import Image from 'next/image'

import { Container } from '@/components/Container'

import portraitImage from '@/images/portrait.jpg'
import petBottle from '@/images/photos/image-1.jpg'
import petBottlePrepared from '@/images/photos/image-2.jpg'


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
              <div className='mt-8 text-base text-zinc-600 dark:text-zinc-400'>
              <p>
                boxx（ボックス）は、使用済みのペットボトル、プラスチック容器、空き缶、ダンボール箱など、資源物の店頭回収ボックスを地図上で簡単に検索できるアプリです。
                持続可能な社会の構築に不可欠な循環経済（サーキュラーエコノミー）の実現に向けて、私たちの日常から始めましょう。boxxを使って身近にある資源回収ボックスを見つけ、資源の循環を促進しましょう。
              </p>
              <p className='mt-4'>資源物を店頭回収ボックスに持ち込む際は、不要なものを取り除いたり、汚れを落としたりして、適切に保管、運搬そして再生が出来る状態にして下さい。
              また、持っていくお店などの案内も確認してください。</p>
              </div>
              <h2 className='mt-16 text-base font-semibold text-zinc-800 dark:text-zinc-100'>PETボトル</h2>
              <p className='mt-3 text-base text-zinc-600 dark:text-zinc-400'>中をすすいで、キャップやラベルは取り除いて下さい。</p>
              <div className='mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 justify-items-center'>
                <div className='relative aspect-[9/10] w-64 overflow-hidden rounded-xl grayscale -rotate-2 bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
                  <Image src={petBottle} alt='不要なPETボトル' className='absolute inset-0 h-full w-full object-cover' />
                </div>
                <div className='relative aspect-[9/10] w-64 overflow-hidden rounded-xl rotate-2 bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
                  <Image src={petBottlePrepared} alt='キャップを外し、ラベルを剥がしたPETボトル' className='absolute inset-0 h-full w-full object-cover' />
                </div>
              </div>

              <h2 className='mt-16 text-base font-semibold text-zinc-800 dark:text-zinc-100'>段ボール</h2>
              <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>ガムテープ、伝票などは取り除いて、たたんで下さい。</p>
              <h2 className='mt-8 text-base font-semibold text-zinc-800 dark:text-zinc-100'>紙パック</h2>
              <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>中を洗って、乾燥し、切り開いて下さい。</p>
              <h2 className='mt-8 text-base font-semibold text-zinc-800 dark:text-zinc-100'>食品トレイ</h2>
              <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>洗って乾かしくて下さい。</p>
              <h2 className='mt-8 text-base font-semibold text-zinc-800 dark:text-zinc-100'>空き缶</h2>
              <p className='mt-6 text-base text-zinc-600 dark:text-zinc-400'>中をすすいで下さい。</p>
          </div>
        </div>
      </Container>
    </>
  )
}
