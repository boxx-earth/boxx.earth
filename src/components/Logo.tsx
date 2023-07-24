import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
import logoImage from '@/images/logo.png'
import React from "react"

type LogoProps = {
  large?: boolean;
  className?: string;
}

export const Logo = ({ large = false, className, ...props }: LogoProps) => {
    return (
      <Link
        href="/"
        aria-label="Home"
        className={clsx(className, 'pointer-events-auto')}
        {...props}
      >
        <Image
          src={logoImage}
          alt=""
          sizes={large ? '4rem' : '2.25rem'}
          className={clsx(
            'rounded-full bg-white/90 object-cover',
            large ? 'h-16 w-16  shadow-lg ring-2 ring-zinc-900/5 backdrop-blur dark:ring-white/10' : 'h-9 w-9'
          )}
          priority
        />
      </Link>
    )
  }
