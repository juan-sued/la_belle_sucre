'use client'

import TitleSection from '@/components/shared/TitleSection'
import { Button } from '@/components/ui/button'
import { contactList } from '@/data/contact'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function CreatedBy() {
  const { ref, inView } = useInView({
    delay: 500,
    threshold: 0.5,
  })
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])
  return (
    <>
      <section
        id="created-by"
        className=" mb-40   pt-14  w-full flex flex-col items-center "
      >
        <div className="flex relative overflow-visible h-0 w-full shadow-inner shadow-primaryTheme-500 z-[-50]">
          <div
            ref={ref}
            className=" absolute top-0 left-0  w-full  h-[540px]   md:h-[740px]  bg-gradient-to-b  from-primaryTheme-500  via-primaryTheme-500/80 to-primaryTheme-500 "
          ></div>

          <Image
            src="/assets/ale-juan-quadrado.jpeg"
            width="0"
            height="0"
            sizes="100vw"
            className=" mt-24 md:mt-0 w-full h-fit  md:max-w-[70%]  "
            alt=""
          />
        </div>
        <TitleSection title="Quem somos?" className="text-brownTheme-500" />
        <div className="grid md:flex  gap-10 p-4 md:p-20 ">
          <div className="grid justify-center gap-5 w-full  mt-20 ">
            <h1
              className={`text-3xl  font-bold opacity-0 text-brownTheme-500 ${
                isVisible ? 'animate__animated animate__fadeIn' : ''
              }`}
            >
              Olá! Somos Alê e Juan!
            </h1>
            <p
              className={`font-medium text-sm md:text-lg opacity-0  text-brownTheme-500 ${
                isVisible ? 'animate__animated animate__fadeIn delay-500' : ''
              }`}
            >
              Somos apaixonados por explorar novos sabores e criar doces
              irresistíveis que encantam!
            </p>
            <p
              className={`font-medium text-sm md:text-lg opacity-0 text-brownTheme-500 ${
                isVisible ? 'animate__animated animate__fadeIn delay-700' : ''
              }`}
            >
              Juan é programador e Alê é uma bióloga em formação, mas ambos
              compartilhamos o mesmo sonho: A confeitaria.
            </p>
            <p
              className={`font-medium text-sm md:text-lg opacity-0 text-brownTheme-500 ${
                isVisible ? 'animate__animated animate__fadeIn delay-1000' : ''
              }`}
            >
              Unindo inovações e os ingredientes mais naturais, criamos doces
              únicos e cheios de amor.
            </p>

            <div className="flex justify-center">
              <Link
                target="_blank"
                href={contactList[2].href}
                className="w-full"
              >
                <Button variant="ghost" className="text-brownTheme-500">
                  SAIBA MAIS
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full grid justify-center  ">
            <div className="w-[280px] grid place-items-center">
              <Image
                src="/assets/ale-juan-vertical.jpeg"
                width="0"
                height="0"
                sizes="100vw"
                className=" w-full h-fit  rounded-sm"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
