const CompanyProfile = () => {
  return (
    <div className="mt-12 text-base font-bold text-zinc-600 dark:text-zinc-400">
      <h2 className="font-light">概要</h2>
      <div className="mt-6 space-y-10">
        <p className="border-b border-zinc-100 dark:border-zinc-700/40">
          boxx合同会社
        </p>
        <p className="border-b border-zinc-100 dark:border-zinc-700/40">
          〒104-0051 東京都中央区佃二丁目
        </p>
        <p className="border-b border-zinc-100 dark:border-zinc-700/40">
          <span className="text-xs font-light">代表社員</span> 羽山和行
        </p>
        <p className="border-b border-zinc-100 dark:border-zinc-700/40">
          <span className="text-xs font-light">設立</span> 2023年6月2日
        </p>
      </div>
    </div>
  )
}

export default CompanyProfile
