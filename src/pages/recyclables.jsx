import Head from 'next/head'
import Image from 'next/image'

import { Container } from '@/components/Container'

import petBottle from '@/images/photos/image-1.jpg'
import petBottlePrepared from '@/images/photos/image-2.jpg'

export default function Recyclables() {
  return (
    <>
      <Head>
        <title>循環する資源 - boxx</title>
        <meta
          name="description"
          content="boxxは資源物の店頭回収ボックスに関する情報を提供するプラットフォームアプリです。"
        />
      </Head>
      <Container className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
              <header className="flex flex-col">
                <h1 className="text-4xl font-bold whitespace-pre text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                  循環利用されている資源.
                </h1>
              </header>
              <div className='mt-8 text-base text-zinc-600 dark:text-zinc-400'>
              <p>
              日本はリサイクルと資源循環において世界的に注目される国であり、持続可能な未来の実現に向けた積極的な取り組みを行っています。家庭や事業所におけるごみの分別は日本のリサイクルシステムの基盤となっており、可燃ごみ、不燃ごみ、資源ごみ、プラスチックごみ、ペットボトル、缶、紙、ガラスなど、さまざまなカテゴリーに分けて廃棄物の処理及びリサイクルをしています。
              </p>
              <p className='mt-4'>日本のリサイクル・資源循環には法律や制度が重要な役割を果たしています。さらに、日本の文化や教育においては、人々のリサイクルに関する意識が高く、多くの人が関心を持っています。
              boxxを使って資源の効率的な循環利用を促進させましょう。
              </p>
              </div>

              <article className='mt-16 text-base text-zinc-600 dark:text-zinc-400'>
              <h2 className='text-base font-semibold text-zinc-800 dark:text-zinc-100'>PETボトル</h2>
              <div className="py-10 sm:py-14">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt className="text-base leading-7 text-gray-600">回収率<sub>※1</sub></dt>
                      <dd className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        94.0%
                      </dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt className="text-base leading-7 text-gray-600">リサイクル率<sub>※2</sub></dt>
                      <dd className="text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                        86.0%
                      </dd>
                    </div>
                  </dl>
                </div>
              </div>
              
              <p className='mt-3'>
              2021年度の日本におけるPETボトルの回収率は94.0%で、回収量は54万6千トンです。
              またリサイクル率は86.0%です。<br />
              回収されたPETボトルは、卵パック、青果物トレイなどのシート（約34%）やPETボトル（ボトルtoボトル。約33%）にリサイクルされています。
              </p>
              <div className='mt-8'>
              <small className='block'>※1 回収率（%）= 回収量/PETボトル販売量</small>
              <small className='block'>※2 リサイクル率（%）= リサイクル量/PETボトル販売量</small>
              <small className='block'>出典: <a href='https://www.petbottle-rec.gr.jp/' className='text-teal-500 hover:underline' target='_blank' rel='noopener noreferrer'>
                PETボトルリサイクル推進協議会</a>
                「PETボトルリサイクル年次報告書2022」
              </small>

              </div>
              </article>
              
          </div>
        </div>
      </Container>
    </>
  )
}
