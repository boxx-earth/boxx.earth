import React from "react"
import Image from "next/image"
import { ArrowDownOnSquare } from "./Icons"

export const AppDownloadLinks: React.FC = (props) => {
    return (
      <div>
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <ArrowDownOnSquare className="h-6 w-6" />
          <span className="ml-3">boxxアプリをダウンロード</span>
        </h2>
        <ul className="flex mt-5 h-12">
          <li className="basis-1/2 bg-red-100 relative">
            {/* <Image src="/Download_on_the_App_Store_Badge_JP_RGB_blk_100317.svg"
             fill 
             style={{objectFit: "contain"}} 
             alt="App Storeでboxxアプリをダウンロードする." /> */}
          </li>
          <li className="basis-1/2 bg-blue-200 relative">
            <Image src="/google-play-badge.png" 
            fill
            style={{objectFit: "contain"}}
            alt="Google Playでboxxアプリをダウンロードする." />
          </li>
        </ul>

        </div>
    )

}