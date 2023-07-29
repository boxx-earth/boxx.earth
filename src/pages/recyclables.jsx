import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function RecyclableSection({children, ...props}) {
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
      <SimpleLayout 
        title="循環利用される資源."
        intro={<>
          <p>家庭や事業所でのごみの分別は日本におけるリサイクルシステムの「重要なインフラ」となっており、可燃ごみ、不燃ごみ、資源ごみ、プラスチックごみ、ペットボトル、缶、紙、ガラスなど、さまざまなカテゴリーに分別され廃棄物として処理及びリサイクルが行われています。</p>
          <p className='mt-4'>日本のリサイクル・資源循環には法律や制度が重要な役割を果たしています。さらに、日本の文化や教育においては、人々のリサイクルに関する意識が高く、多くの人が関心を持っています。</p>
          <p className='mt-4'>boxxを使って資源の効率的な循環利用を促進させましょう!</p>
        </>}>
          <div className='space-y-20'>
            <RecyclableSection title="PETボトル">
              <RecyclableItem>
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center">
                  <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 ">回収率<sub>※1</sub></dt>
                    <dd className="text-3xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                      94.0<span className='text-base'>%</span>
                    </dd>
                  </div>
                  <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                    <dt className="text-base leading-7 ">リサイクル率<sub>※2</sub></dt>
                    <dd className="text-3xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                      86.0<span className='text-base'>%</span>
                    </dd>
                  </div>
                </dl>
              </div>
              
              <div className='my-10 sm:my-14'>
              2021年度の日本におけるPETボトルの回収率は94.0%で、回収量は54万6千トンです。
              またリサイクル率は86.0%です。<br />
              回収されたPETボトルは、卵パック、青果物トレイなどのシート（約34%）やPETボトル（ボトルtoボトル。約33%）にリサイクルされています。
              </div>
              <div>
              <small className='block'>※1 回収率（%）= 回収量/PETボトル販売量</small>
              <small className='block'>※2 リサイクル率（%）= リサイクル量/PETボトル販売量</small>
              <small className='block'>出典: <a href='https://www.petbottle-rec.gr.jp/' className='text-teal-500 hover:underline' target='_blank' rel='noopener noreferrer'>
                PETボトルリサイクル推進協議会</a>
                「PETボトルリサイクル年次報告書2022」
              </small>
              </div>
              </RecyclableItem>
                
            </RecyclableSection>
            <RecyclableSection title="古紙">
              <RecyclableItem>
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt className="text-base leading-7">古紙回収率<sub>※1</sub></dt>
                      <dd className="text-3xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        79.5<span className='text-base'>%</span>
                      </dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt className="text-base leading-7">回収量</dt>
                      <dd className="text-3xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        1,789<span className='text-base'>万トン</span>
                      </dd>
                    </div>
                  </dl>
                </div>
              <div className='my-10 sm:my-14'>
              2022年の日本における古紙回収率は79.5%で、回収量は1,789万トンです。<br />
              回収された古紙のほとんどは製紙原料としてふたたび紙（再生紙）にリサイクルされ利用されています。
              </div>
              <div className='mt-8'>
              <small className='block'>※1 古紙回収率（%）= 古紙回収量/紙・板紙消費量</small>
              <small className='block'>出典: <a href='http://www.prpc.or.jp/' className='text-teal-500 hover:underline' target='_blank' rel='noopener noreferrer'>
                （公財）古紙再生促進センター</a>
                「日本の紙リサイクル」
              </small>
              </div>
              </RecyclableItem>
            </RecyclableSection>

            <RecyclableSection title="アルミ缶">
              <RecyclableItem>
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt className="text-base leading-7">リサイクル率<sub>※1</sub></dt>
                      <dd className="text-3xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        93.9<span className='text-base'>%</span>
                      </dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt className="text-base leading-7">再生利用重量</dt>
                      <dd className="text-3xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        306,796<span className='text-base'>トン</span>
                      </dd>
                    </div>
                  </dl>
                </div>           
              <div className='my-10 sm:my-14'>
                2022年度の日本におけるアルミ缶のリサイクル率は93.9%、再生利用重量は306,796トンです。<br />
                70%強が再びアルミ缶にリサイクルされ、その他の利用用途は鋳物製造や製鉄所における製鋼過程でのアルミニウム添加剤（脱酸剤）です。
              </div>
              <div className='mt-8'>
              <small className='block'>※1 リサイクル率（%）= 再生利用重量/アルミ缶消費量</small>
              <small className='block'>出典: <a href='http://www.alumi-can.or.jp/' className='text-teal-500 hover:underline' target='_blank' rel='noopener noreferrer'>
                アルミ缶リサイクル協会</a>
                「2022年度 飲料用アルミ缶リサイクル率（再利用率）について」
              </small>

              </div>
              </RecyclableItem>    
            </RecyclableSection>

            <RecyclableSection title="スチール缶">
              <RecyclableItem>
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                  <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt className="text-base leading-7">リサイクル率<sub>※1</sub></dt>
                      <dd className="text-3xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        93.1<span className='text-base'>%</span>
                      </dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt className="text-base leading-7 ">再資源化量</dt>
                      <dd className="text-3xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        362,846<span className='text-base'>トン</span>
                      </dd>
                    </div>
                  </dl>                
                </div>           
              <div className='my-10 sm:my-14'>
              2021年度の日本におけるスチール缶のリサイクル率は93.1%で、再資源化量は362,846トンです。<br />
              製鉄メーカー（電炉、高炉、鋳物）がリサイクルし、再び鉄として再利用されます。              </div>
              <div className='mt-8'>
              <small className='block'>※1 リサイクル率（%）= 再資源化量/スチール缶消費量</small>
              <small className='block'>出典: <a href='https://steelcan.jp/' className='text-teal-500 hover:underline' target='_blank' rel='noopener noreferrer'>
                スチール缶リサイクル協会</a>
                「スチール缶リサイクル年次レポート2022」
              </small>
              </div>
              </RecyclableItem>    
            </RecyclableSection>

            <RecyclableSection title="プラスチック容器包装">
              <RecyclableItem>
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <dl className="grid grid-cols-2 gap-x-8 gap-y-16 text-center">
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt className="text-base leading-7">リサイクル率<sub>※1</sub></dt>
                      <dd className="text-3xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        66.4<span className='text-base'>%</span>
                      </dd>
                    </div>
                    <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                      <dt className="text-base leading-7">再商品化量</dt>
                      <dd className="text-3xl font-semibold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        503,547<span className='text-base'>トン</span>
                      </dd>
                    </div>
                </dl>
                </div>           
              <div className='my-10 sm:my-14'>
              （注）<a href='https://www.env.go.jp/recycle/yoki/a_1_recycle/' className='text-teal-500 hover:underline' target='_blank' rel='noopener noreferrer'>
                容器包装リサイクル法</a>対象のプラスチック容器包装のみです。<br />
              2021年度の日本におけるプラスチック容器包装のリサイクル率は66.4%で、再商品化量は503,547トンです。             
              </div>
              <div className='mt-8'>
              <small className='block'>※1 リサイクル率（%）= （再商品化量＋特定事業者の自主回収・リサイクル量）/（市町村回収量＋特定事業者の自主回収・リサイクル量）</small>
              <small className='block'>出典: <a href='https://www.pprc.gr.jp/index.html' className='text-teal-500 hover:underline' target='_blank' rel='noopener noreferrer'>
                プラスチック容器包装リサイクル推進協議会</a>
                「プラねっと2022」、
                <a href='https://www.jcpra.or.jp/' className='text-teal-500 hover:underline' target='_blank' rel='noopener noreferrer'>
                  （公財）日本容器包装リサイクル協会</a>
              </small>
              </div>
              </RecyclableItem>    
            </RecyclableSection>
            </div>
      </SimpleLayout>
    </>
  )
}
