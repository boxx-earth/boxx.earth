import { MapPin } from "./Icons"

const stats = [
    { name: 'Total Subscribers', stat: '71,897' },
    { name: 'Avg. Open Rate', stat: '58.16%' },
    { name: 'Avg. Click Rate', stat: '24.57%' },
  ]

export const Stats = () => {   
    return (
        <div>
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
            <MapPin className="h-6 w-6" />
          <span className="ml-3">登録拠点数</span>
        </h2>
        <dl className="mt-5 grid grid-cols-1 gap-5">
          {stats.map((item) => (
            <div key={item.name} className="overflow-hidden rounded-lg bg-white px-4 py-5 shadow sm:p-6">
              <dt className="truncate text-sm font-medium text-gray-500">{item.name}</dt>
              <dd className="mt-1 text-3xl font-semibold tracking-tight text-gray-900">{item.stat}</dd>
            </div>
          ))}
        </dl>
      </div>
    )
  }
  
  