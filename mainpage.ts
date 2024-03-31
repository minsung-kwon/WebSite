// pages/index.js
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>컴퓨터 네트워크 블로그</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* 첫 메인 화면 UI */}
      <div key="1" className="flex flex-col min-h-[100vh]">
        <main className="flex-1">
          <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container flex flex-col items-center justify-center space-y-4 px-4 md:px-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Computer Network Map
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  자세한 설명을 위해서는 이미지 위에 커서를 올려주세요 만든 사람에 대해 알아보시려면 스크롤을 내려주세요
                </p>
              </div>
              <div className="space-x-4">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                  href="#"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </section>
        </main>
      </div>

      {/* 자기소개 페이지 */}
      <div className="grid gap-4 md:gap-8 items-start max-w-4xl mx-auto px-4 md:px-6">
      <div className="flex flex-col gap-1.5 items-center space-y-1.5 text-center">
        <img
          alt="Minsung Kwon"
          className="rounded-full"
          height="160"
          src="/placeholder.svg"
          style={{
            aspectRatio: "160/160",
            objectFit: "cover",
          }}
          width="160"
        />
        <div className="space-y-1.5 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Minsung Kwon</h1>
          <p className="text-gray-500 dark:text-gray-400">Dankook Univ. Student</p>
        </div>
      </div>
      <p className="max-w-prose text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto dark:text-gray-400">
        2004/12/02 단국대학교 소프트웨어학과
      </p>
      <div className="flex justify-center items-center space-x-4">
        <Link className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800" href="#">
          <LinkedinIcon className="h-4 w-4" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Link className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800" href="#">
          <TwitterIcon className="h-4 w-4" />
          <span className="sr-only">Twitter</span>
        </Link>
        <Link className="rounded-full p-2 hover:bg-gray-100 dark:hover:bg-gray-800" href="#">
          <GithubIcon className="h-4 w-4" />
          <span className="sr-only">GitHub</span>
        </Link>
      </div>
    </div>
  )
}
