'use client'
import Aside from '@/components/aside'
import '@/styles/tailwind.css'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import GlobalClient from './GlobalClient'
import useCountDownTime from '@/hooks/useCountDownTime'
import { useEffect, useState } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

// export const metadata: Metadata = {
//   title: {
//     template: '%s - Mooni',
//     default: 'Mooni',
//   },
//   description:
//     'Mooni is a modern and elegant template for Next.js, Tailwind CSS, and TypeScript. It is designed to be simple and easy to use, with a focus on performance and accessibility.',
//   keywords: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Mooni', 'Headless UI', 'Fashion', 'E-commerce'],
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const targetDate = new Date("2026-01-15T00:00:00").getTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;
    if (difference <= 0) {
      return null;
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-200">
        <Aside.Provider>
          {/* {children} */}
         <div className="min-h-screen flex items-center justify-center bg-gradient-to-br 
from-blue-500 via-cyan-500 to-teal-500 
dark:from-blue-900 dark:via-cyan-900 dark:to-teal-900">
      <div className="text-center px-6 py-12 bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl max-w-md mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
          Coming Soon
        </h1>

        <p className="text-lg md:text-xl text-white/90 mb-8 drop-shadow-md">
          Something amazing is on the way. Stay tuned!
        </p>

        {timeLeft ? (
          <div className="grid grid-cols-4 gap-4 text-white mb-8">
            {Object.entries(timeLeft).map(([label, value]) => (
              <div
                key={label}
                className="bg-white/20 rounded-xl py-3 px-2"
              >
                <div className="text-2xl font-bold">
                  {String(value).padStart(2, "0")}
                </div>
                <div className="text-xs uppercase tracking-wide opacity-80">
                  {label}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-white text-xl font-semibold">
            🚀 We are live now!
          </p>
        )}

        <div className="animate-pulse">
          <div className="w-16 h-16 bg-white/20 rounded-full mx-auto flex items-center justify-center">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>

          {/* Client component: Toaster, ... */}
          <GlobalClient />

        </Aside.Provider>
      </body>
    </html>
  )
}
