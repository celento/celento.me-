import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-yellow-50">
      <Head>
        <title>Celento C George</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="description" content="Founder at Stackraft, Imeyou and Celensoft. Entrepreneur, Computer Programmer and Designer" />
    <meta name="keywords" content="celento,celentocg,celento c george, stackraft,celensoft,imeyou" />
    <meta name="robots" content="index, follow, noarchive" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-10 max-w-3xl">
        
        <p className="mt-3 text-2xl">
         <span className="text-yellow-500">Hola,</span>
         <p className="my-1">After years of procrastination, I finally decided to update this website. Hopefully, I will get it done sometime soon.</p>
         <p className="text-base my-2">Meanwhile, checkout my <a target="_blank" className=" text-yellow-500 hover:underline transition-all hover:opacity-80" href="https://www.twitter.com/celento">Twitter</a></p>

         <p className="italic text-base">You stay classy</p>
        </p>

       
      </main>

      <footer className="flex items-center text-sm justify-center w-full h-24 border-t ">
         <p className>© 2021 Celento C George </p>
      </footer>
    </div>
  )
}
