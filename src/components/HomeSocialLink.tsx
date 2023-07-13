import React from "react";

type HomeSocialLinkProps = {
    href: string;
    'aria-label': string;
    icon: React.ElementType;
    target?: string;
    rel?: string;
}

export const HomeSocialLink = ({ icon: Icon, ...props }: HomeSocialLinkProps) => {
    return (
      <a className="group -m-1 p-1" {...props}>
        <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      </a>
    )
  }
