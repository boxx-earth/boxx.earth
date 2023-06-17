import Head from 'next/head'
import { Container } from '@/components/Container'

export default function Privacy() {
  return (
    <>
      <Head>
        <title>プライバシーポリシー | boxx</title>
        <meta name="description" content="boxxのプライバシーポリシー" />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="">
          <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            プライバシーポリシー
          </h1>
          <div className="mt-8 text-base text-zinc-600 dark:text-zinc-400">
            <p className="">
              boxx合同会社（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下,「本サービス」といいます。）における，
              ユーザーの個人情報の取扱いについて，以下のとおりプライバシーポリシー（以下，「本ポリシー」といいます。）を定めます。
            </p>
            <h2 className="mb-2 mt-8 text-lg font-bold tracking-tight">
              1. 個人情報
            </h2>
            <p>
              「個人情報」とは，個人情報保護法にいう「個人情報」を指すものとし，生存する個人に関する情報であって，当該情報に含まれる氏名，生年月日，住所，電話番号，連絡先その他の記述等により特定の個人を識別できる情報及び容貌，指紋，声紋にかかるデータ，及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
            </p>
            <h2 className="mb-2 mt-8 text-lg font-bold tracking-tight">
              2. 個人情報の収集方法
            </h2>
            <p>
              当社は，ユーザーが利用登録をする際に氏名，生年月日，住所，電話番号，メールアドレス，銀行口座番号，クレジットカード番号，運転免許証番号などの個人情報をお尋ねすることがあります。また，ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を,当社の提携先（情報提供元，広告主，広告配信先などを含みます。以下，｢提携先｣といいます。）などから収集することがあります。
            </p>
            <h2 className="mb-2 mt-8 text-lg font-bold tracking-tight">
              3. 個人情報を収集・利用する目的
            </h2>
            <p>当社が個人情報を収集・利用する目的は，以下のとおりです。</p>
            <ol className="mt-3 list-inside list-decimal">
              <li className="">当社サービスの提供・運営のため</li>
              <li>
                ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）
              </li>
              <li>
                ユーザーが利用中のサービスの新機能，更新情報，キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため
              </li>
              <li>メンテナンス，重要なお知らせなど必要に応じたご連絡のため</li>
              <li>
                利用規約に違反したユーザーや，不正・不当な目的でサービスを利用しようとするユーザーの特定をし，ご利用をお断りするため
              </li>
              <li>
                ユーザーにご自身の登録情報の閲覧や変更，削除，ご利用状況の閲覧を行っていただくため
              </li>
              <li>有料サービスにおいて，ユーザーに利用料金を請求するため</li>
              <li>上記の利用目的に付随する目的</li>
            </ol>
            <h2 className="mb-2 mt-8 text-lg font-bold tracking-tight">
              4. 利用目的の変更
            </h2>
            <ol className="mt-3 list-inside list-decimal">
              <li>
                当社は，利用目的が変更前と関連性を有すると合理的に認められる場合に限り，個人情報の利用目的を変更するものとします。
              </li>
              <li>
                利用目的の変更を行った場合には，変更後の目的について，当社所定の方法により，ユーザーに通知し，または本ウェブサイト上に公表するものとします。
              </li>
            </ol>
          </div>
        </div>
      </Container>
    </>
  )
}
