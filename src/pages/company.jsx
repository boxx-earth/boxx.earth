import Head from 'next/head'
import Image from 'next/image'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'
import CompanyProfile from '../components/CompanyProfile'
import CompanyHistory from '../components/CompanyHistory'
import { MailIcon } from '../components/Icons'
import SocialLink from '../components/SocialLink'
import Link from 'next/link'
import { MailIconFillNone } from '../components/Icons'

export default function Company() {
  return (
    <>
      <Head>
        <title>会社概要 | boxx合同会社</title>
        <meta
          name="description"
          content="会社概要 - boxxは、資源が効率的に利用される社会の構築に必要なサービスを提供する会社です。"
        />
      </Head>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={portraitImage}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              私たちは、資源が効率的に利用される社会の構築に必要なサービスを提供する会社です。
            </h1>
            <CompanyProfile />
            <CompanyHistory />
          </div>

          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink href="#" icon={TwitterIcon}>
                Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/boxx.earth/"
                icon={InstagramIcon}
                className="mt-4"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </SocialLink>
              <SocialLink href="#" icon={GitHubIcon} className="mt-4">
                GitHub
              </SocialLink>
              <SocialLink
                href="/contact"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
              >
                お問合せフォーム
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
    </>
  )
}
