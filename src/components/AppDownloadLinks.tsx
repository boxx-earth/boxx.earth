import React from "react"
import { ArrowDownOnSquare } from "./Icons"

export const AppDownloadLinks: React.FC = (props) => {
    return (
      <div>
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <ArrowDownOnSquare className="h-6 w-6" />
          <span className="ml-3">boxxアプリをダウンロード</span>
        </h2>

        </div>
    )

}