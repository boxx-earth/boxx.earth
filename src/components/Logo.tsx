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
        <div className="relative">
          <div className="absolute inset-0 bg-teal-300 rounded-full blur"></div>
        <Image
          src={logoImage}
          alt=""
          sizes={large ? '4rem' : '2.25rem'}
          className={clsx(
            'relative rounded-full bg-white object-cover',
            large ? 'h-16 w-16' : 'h-9 w-9'
          )}
          priority
        />
        </div>

      </Link>
    )
  }
