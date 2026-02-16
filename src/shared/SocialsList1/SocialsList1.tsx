import facebook from '@/images/socials/facebook.svg'
import instra from '@/images/socials/intra.svg'
import tiktok from '@/images/socials/tiktok.svg'
import youtube from '@/images/socials/youtube.svg'
import clsx from 'clsx'
import Image from 'next/image'
import { FC } from 'react'
import { Link } from '../link'

interface SocialsList1Props {
  className?: string
}

const socials = [
  { name: 'Facebook', icon: facebook, href: 'https://www.facebook.com/moonibd' },
  { name: 'Youtube', icon: youtube, href: 'https://www.youtube.com/@moonibd' },
  { name: 'TikTok', icon: tiktok, href: 'https://tiktok.com/@moonibd' },
  { name: 'Instagram', icon: instra, href: 'https://www.instagram.com/mooni_bd' },
]

const SocialsList1: FC<SocialsList1Props> = ({ className }) => {
  return (
    <div className={clsx('flex justify-between gap-20 gap-y-3', className)}>
      {socials.map((item, index) => (
        <Link
          target="_blank"
          href={item.href}
          className="flex items-center gap-x-2 text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white"
          key={index}
        >
          <Image
            sizes="40px"
            className="h-auto w-5 shrink-0"
            width={40}
            height={40}
            src={item.icon || ''}
            alt={item.name}
          />
          <span className="text-sm/6">{item.name}</span>
        </Link>
      ))}
    </div>
  )
}

export default SocialsList1
