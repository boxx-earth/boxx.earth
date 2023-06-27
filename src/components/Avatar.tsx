import Link from "next/link"
import Image from "next/image"
import clsx from "clsx"
import avatarImage from '@/images/avatar.jpg'
import React from "react"

type AvatarProps = {
    large?: boolean;
    className?: string;

}

export const Avatar: React.FC<AvatarProps> = ({ large = false, className, ...props }) => {
    return (
      <Link
        href="/"
        aria-label="Home"
        className={clsx(className, 'pointer-events-auto')}
        {...props}
      >
        <Image
          src={avatarImage}
          alt=""
          sizes={large ? '4rem' : '2.25rem'}
          className={clsx(
            'rounded-full bg-zinc-100 object-cover dark:bg-zinc-800',
            large ? 'h-16 w-16' : 'h-9 w-9'
          )}
          priority
        />
      </Link>
    )
  }
  
  