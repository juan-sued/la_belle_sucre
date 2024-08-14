'use client'
import { useEffect, useState } from 'react'
import { MenuMobile } from './MenuMobile'
import { cn } from '@/lib/utils'
import LogoAndName from './LogoAndName'
import { MenuDesktop } from './MenuDesktop'
import { Button } from '@/components/ui/button'
import { ArrowUpRightFromCircle } from 'lucide-react'

export default function Header() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const [scrollDirection, setScrollDirection] = useState('down')

  const handleScroll = () => {
    const currentPosition = window.scrollY

    if (currentPosition > scrollPosition) {
      setScrollDirection('down')
    } else {
      setScrollDirection('up')
    }

    setScrollPosition(currentPosition)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [scrollPosition])

  return (
    <>
      <header
        className={cn(
          'p-6 fixed top-0 left-0 w-full flex justify-between z-10 transition-all h-[96px] animate__animated animate__fadeInDown',
          scrollDirection === 'down' && scrollPosition > 0
            ? 'animate__animated animate__fadeOutUp'
            : scrollPosition === 0
              ? ''
              : ' bg-opacity-70 backdrop-blur-md dark:bg-opacity-90 ',
        )}
      >
        <LogoAndName />
        <MenuDesktop />
        <div className="bg-white text-zinc-500 hidden lg:flex relative w-0 right-[190px]">
          <Button className="w-fit whitespace-nowrap gap-2">
            Encomendar agora <ArrowUpRightFromCircle size={20} />
          </Button>
        </div>

        <MenuMobile />
      </header>
    </>
  )
}
