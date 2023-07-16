import { MapPin } from "./Icons"

const stats = [
    { name: 'PETボトル回収ボックス', stat: '7,897' },
    { name: 'ダンボール・古紙回収ボックス', stat: '1,300' },
    { name: '食品トレー', stat: '1,000' },
    { name: 'その他', stat: '300' },
  ]

export const Stats = () => {   
    return (
        <div>
        <h2 className="mt-16 flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <MapPin className="h-6 w-6" />
          <span className="ml-3">登録拠点数</span>
        </h2>
        <dl className="mt-5 grid grid-cols-1 gap-5">
          {stats.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-2xl border border-zinc-100 p-6 shadow-md dark:shadow-zinc-700/40 dark:border-zinc-700/40">
              <dt className="truncate text-sm font-medium  text-zinc-600 dark:text-zinc-400">{item.name}</dt>
              <dd className="mt-1 ml-6 text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{item.stat}</dd>
            </div>
          ))}
        </dl>
      </div>
    )
  }
  
  