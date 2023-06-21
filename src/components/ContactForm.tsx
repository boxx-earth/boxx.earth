import {useForm} from 'react-hook-form'
import { ContactFormValues } from '@/types/form';

export default function ContactForm() {
  const {register, handleSubmit, formState: {errors}} = useForm<ContactFormValues>({
    defaultValues: {
      nickname: "",
      organization: "",
      email: "",
      message: "",
    }
  });

  console.log(errors)

  return (
    <div className="relative">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <img
          className="h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full"
          src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=2560&h=3413&&q=80"
          alt=""
        />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-32">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              お問合せフォーム
            </h1>
            <p className="mt-2 text-base leading-8  text-zinc-600 dark:text-zinc-400">
              お気軽にご連絡ください。
            </p>
            <form
            onSubmit={handleSubmit((data) => {
              console.log(data)
            })}
              action="https://formspree.io/f/xoqzgzkw"
              method="POST"
              className="mt-16"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="nickname"
                    className="block text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-400"
                  >
                    お名前
                  </label>
                  <div className="mt-2.5">
                    <input
                    {...register("nickname", {required: "お名前を入力してください."})}
                      type="text"
                      name="nickname"
                      id="nickname"
                      autoComplete="nickname"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <p className='ml-3 text-sm text-rose-600'>{errors.nickname?.message}</p>
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label
                      htmlFor="organization"
                      className="block font-semibold text-zinc-600 dark:text-zinc-400"
                    >
                      会社名
                    </label>
                    <p id="organization-description" className="text-gray-400">
                      オプション
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <input
                    {...register("organization")}
                      type="text"
                      name="organization"
                      id="organization"
                      autoComplete="organization"
                      aria-describedby="organization-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-400"
                  >
                    Email
                  </label>
                  <div className="mt-2.5">
                    <input
                    {...register("email", {required: "メールアドレスを入力してください."})}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                    <p className='ml-3 text-sm text-rose-600'>{errors.email?.message}</p>

                  </div>
                </div>

                <div className="sm:col-span-2">
                  <div className="flex justify-between text-sm leading-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-semibold leading-6 text-zinc-600 dark:text-zinc-400"
                    >
                      お問合せ内容
                    </label>
                    <p id="message-description" className="text-gray-400">
                      最大500文字
                    </p>
                  </div>
                  <div className="mt-2.5">
                    <textarea
                    {...register("message", {required: "お問合せ内容を入力してください.", maxLength: {value: 500, message: "500文字まででお願いします."}})}
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      defaultValue={''}
                    />
                    <p className='ml-3 text-sm text-rose-600'>{errors.message?.message}</p>

                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-end border-t border-gray-900/10 pt-8">
                <button
                  type="submit"
                  className="rounded-full bg-teal-500 px-5 py-2 text-center text-sm font-semibold tracking-widest text-white shadow-sm hover:bg-teal-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
