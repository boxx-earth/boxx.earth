import Head from 'next/head'
import Image from 'next/image'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

import petBottles from '@/images/photos/petBottles.jpg'
import preparedPetBottles from '@/images/photos/preparedPetBottles.jpg'

import cardboard from '@/images/photos/cardboard.jpg'
import preparedCardboard from '@/images/photos/preparedCardboard.jpg'

import milkCartons from '@/images/photos/milkCartons.jpg'
import preparedMilkCartons from '@/images/photos/preparedMilkCartons.jpg'

import foamTrays from '@/images/photos/foamTrays.jpg'
import preparedFoamTrays from '@/images/photos/preparedFoamTrays.jpg'

import cans from '@/images/photos/cans.jpg'
import preparedCans from '@/images/photos/preparedCans.jpg'

function ItemSection({children, ...props}) {
  return(
    <Section {...props}>
      <div className='space-y-16'>{children}</div>
    </Section>

  )
}

function RecyclableItem({children}) {
  return (
    <Card as="article">
      <Card.Description>
        {children}
      </Card.Description>
    </Card>
  )
}

export default function About() {
  return (
    <>
      <Head>
        <title>boxxについて - boxx</title>
        <meta
          name="description"
          content="boxxは資源物の店頭回収ボックスに関する情報を提供するプラットフォームアプリです."
        />
      </Head>
      <SimpleLayout
        title="boxxは、資源の効率的な循環利用に関する情報を提供します."
        intro={<>
          <p>boxx（ボックス）は、使用済みのペットボトル、プラスチック容器、空き缶、ダンボール箱など、資源物の店頭回収ボックスを地図上で簡単に検索できるアプリです。
              持続可能な社会の構築に不可欠なサーキュラーエコノミーの実現に向けて、私たちの日常から始めましょう。boxxを使って身近にある資源回収ボックスを見つけ、資源の循環を促進しましょう。
          </p>
          <p className='mt-4'>資源物を店頭回収ボックスに持ち込む際は、不要なものを取り除いたり、汚れを落としたりして、適切に保管、運搬そして再生が出来る状態にして下さい。
              また、持っていくお店などの案内も確認してください。
          </p>
        </>}
         >
        <div className='space-y-20'>
          <ItemSection title="PETボトル">
            <RecyclableItem>
              <p>中をすすいで、キャップやラベルは取り除いて下さい。</p>
              <div className='mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 justify-items-center'>
                <div className='relative aspect-[9/10] w-64 overflow-hidden rounded-xl -rotate-2 bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
                  <Image src={petBottles} alt='PETボトル飲料の写真' className='absolute inset-0 h-full w-full object-cover' />
                </div>
                <div className='relative aspect-[9/10] w-64 overflow-hidden rounded-xl rotate-2 bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
                  <Image src={preparedPetBottles} alt='キャップを外し、ラベルを剥がしたPETボトル' className='absolute inset-0 h-full w-full object-cover' />
                </div>
              </div>
            </RecyclableItem>
          </ItemSection>
          <ItemSection title="ダンボール">
          <RecyclableItem>
              <p>ガムテープや伝票などは取り除いて、たたんで下さい。</p>
              <div className='mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 justify-items-center'>
                <div className='relative aspect-[9/10] w-64 overflow-hidden rounded-xl -rotate-2 bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
                  <Image src={cardboard} alt='ダンボール箱の写真' className='absolute inset-0 h-full w-full object-cover' />
                </div>
                <div className='relative aspect-[9/10] w-64 overflow-hidden rounded-xl rotate-2 bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
                  <Image src={preparedCardboard} alt='畳んだダンボール箱' className='absolute inset-0 h-full w-full object-cover' />
                </div>
              </div>
            </RecyclableItem>

          </ItemSection>
          <ItemSection title="紙パック">
          <RecyclableItem>
              <p>中を洗って、乾燥し、切り開いて下さい。</p>
              <div className='mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 justify-items-center'>
                <div className='relative aspect-[9/10] w-64 overflow-hidden rounded-xl -rotate-2 bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
                  <Image src={milkCartons} alt='紙・牛乳パックの写真' className='absolute inset-0 h-full w-full object-cover' />
                </div>
                <div className='relative aspect-[9/10] w-64 overflow-hidden rounded-xl rotate-2 bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
                  <Image src={preparedMilkCartons} alt='中をすすいで、乾燥し、開いた紙パックの写真' className='absolute inset-0 h-full w-full object-cover' />
                </div>
              </div>
            </RecyclableItem>
          </ItemSection>
          <ItemSection title="食品トレー">
          <RecyclableItem>
              <p>洗って乾かしくて下さい。</p>
              <div className='mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 justify-items-center'>
                <div className='relative aspect-[9/10] w-64 overflow-hidden rounded-xl -rotate-2 bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
                  <Image src={foamTrays} alt='発泡トレーの写真' className='absolute inset-0 h-full w-full object-cover' />
                </div>
                <div className='relative aspect-[9/10] w-64 overflow-hidden rounded-xl rotate-2 bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
                  <Image src={preparedFoamTrays} alt='洗って乾かした食品トレーの写真' className='absolute inset-0 h-full w-full object-cover' />
                </div>
              </div>
            </RecyclableItem>
          </ItemSection>
          <ItemSection title="飲料缶">
            <RecyclableItem>
            <p>中をすすいで下さい。</p>
              <div className='mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 justify-items-center'>
                <div className='relative aspect-[9/10] w-64 overflow-hidden rounded-xl -rotate-2 bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
                  <Image src={cans} alt='飲料缶の写真' className='absolute inset-0 h-full w-full object-cover' />
                </div>
                <div className='relative aspect-[9/10] w-64 overflow-hidden rounded-xl rotate-2 bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl'>
                  <Image src={preparedCans} alt='中をすすいだ飲料缶の写真' className='absolute inset-0 h-full w-full object-cover' />
                </div>
              </div>
            </RecyclableItem>
          </ItemSection>
        </div>
      </SimpleLayout>
    </>
  )
}
