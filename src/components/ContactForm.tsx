import {useForm} from 'react-hook-form'
import { ContactFormValues } from '@/types/form';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function ContactForm() {
  const {register, handleSubmit, reset, formState: {errors}} = useForm<ContactFormValues>({
    defaultValues: {
      nickname: "",
      organization: "",
      email: "",
      message: "",
    }
  });

  const [isDisabled, setIsDisabled] = useState(false);
  const router = useRouter();

  const handleFormSubmit = async (data: ContactFormValues) => {
    setIsDisabled(true);

    try {
      const response = await fetch(process.env.NEXT_PUBLIC_CONTACTFORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        router.push("/message-sent");
      
      } else {
        alert('フォームの送信に失敗しました.時間をおいて再度お試しください.');
      }

    } catch (error) {
      alert('フォームの送信に失敗しました.時間をおいて再度お試しください.')
    }

    setIsDisabled(false);

  }

  const handleReset = () => {
    reset();
  }

  return (
    <div className="relative">
      <div className="lg:absolute lg:inset-0 lg:left-1/2">
        <Image src="/post-photo.jpg" alt='郵便ポストの写真' width={1324} height={2000}
         className='h-64 w-full bg-gray-50 object-cover sm:h-80 lg:absolute lg:h-full' />
      </div>
      <div className="pb-24 pt-16 sm:pb-32 sm:pt-24 lg:mx-auto lg:grid lg:max-w-7xl lg:grid-cols-2 lg:pt-24">
        <div className="px-6 lg:px-8">
          <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
            <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
              boxxへのご連絡・お問合せ
            </h1>
            <p className="mt-2 text-base leading-8  text-zinc-600 dark:text-zinc-400">
              こちらのフォームからお気軽にご連絡ください。
            </p>

            <form
            onSubmit={handleSubmit(handleFormSubmit)}
              className="mt-12"
            >
              <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label
                    htmlFor="nickname"
                    className="block text-sm font-semibold text-zinc-600 dark:text-zinc-400"
                  >
                    お名前
                  </label>
                  <div>
                    <input
                    {...register("nickname", {required: "お名前を入力してください."})}
                      type="text"
                      name="nickname"
                      id="nickname"
                      autoComplete="nickname"
                      className="block w-full px-3 py-1 text-gray-900 shadow-sm border-0 border-b border-gray-300
                      caret-teal-500 placeholder:text-gray-400 dark:text-zinc-300
                      focus:border-b-2 focus:border-b-teal-500 focus:ring-0 sm:text-sm sm:leading-6 dark:bg-zinc-900"
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
                  <div>
                    <input
                    {...register("organization")}
                      type="text"
                      name="organization"
                      id="organization"
                      autoComplete="organization"
                      aria-describedby="organization-description"
                      className="block w-full px-3 py-1 text-gray-900 shadow-sm border-0 border-b border-gray-300
                      caret-teal-500 placeholder:text-gray-400 dark:text-zinc-300
                      focus:border-b-2 focus:border-b-teal-500 focus:ring-0 sm:text-sm sm:leading-6 dark:bg-zinc-900"
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
                  <div>
                    <input
                    {...register("email", {required: "メールアドレスを入力してください."})}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full px-3 py-1 text-gray-900 shadow-sm border-0 border-b border-gray-300
                      caret-teal-500 placeholder:text-gray-400 dark:text-zinc-300
                      focus:border-b-2 focus:border-b-teal-500 focus:ring-0 sm:text-sm sm:leading-6 dark:bg-zinc-900"
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
                  <div>
                    <textarea
                    {...register("message", {required: "お問合せ内容を入力してください.", maxLength: {value: 500, message: "500文字まででお願いします."}})}
                      id="message"
                      name="message"
                      rows={4}
                      aria-describedby="message-description"
                      className="block w-full px-3 py-1 text-gray-900 shadow-sm border-0 border-b border-gray-300
                      caret-teal-500 placeholder:text-gray-400 dark:text-zinc-300
                      focus:border-b-2 focus:border-b-teal-500 focus:ring-0 sm:text-sm sm:leading-6 dark:bg-zinc-900"
                      defaultValue={''}
                    />
                    <p className='ml-3 text-sm text-rose-600'>{errors.message?.message}</p>

                  </div>
                </div>
              </div>
              <div className="mt-10 flex justify-between pt-8">
              <button
                  type="button"
                  className="rounded-full px-5 py-2 text-center text-sm font-semibold tracking-widest text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
                  onClick={handleReset}
                >
                  入力取り消し
                </button>

                <button
                  type="submit"
                  className="rounded-full border border-zinc-500 px-5 py-2 text-center text-sm font-semibold tracking-widest text-zinc-600 shadow-sm shadow-teal-300 hover:border-teal-400 dark:text-zinc-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600"
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
