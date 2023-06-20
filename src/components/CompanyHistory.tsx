import { history } from './History'

export default function CompanyHistory() {
  return (
    <div className="mt-12 text-base text-zinc-600 dark:text-zinc-400">
      <h2 className="mb-6">沿革</h2>
      <div className="flow-root">
        <ul role="list" className="-mb-8">
          {history.map((event, eventIdx) => (
            <li key={event.id}>
              <div className="relative pb-8">
                {eventIdx !== history.length - 1 ? (
                  <span
                    className="absolute left-4 top-4 -ml-px h-full w-0.5 bg-gray-200"
                    aria-hidden="true"
                  />
                ) : null}
                <div className="relative flex items-center space-x-5">
                  <div>
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 ring-4 ring-zinc-100 dark:bg-zinc-200 dark:ring-zinc-200">
                      <event.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </span>
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col text-base text-zinc-600 dark:text-zinc-400">
                    <time className="text-xs" dateTime={event.datetime}>
                      {event.date}
                    </time>
                    <p className="text-base">{event.content}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
