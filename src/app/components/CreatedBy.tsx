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
            className=" absolute top-0 left-0  w-full   h-[540px] bg-gradient-to-b  from-primaryTheme-500  via-primaryTheme-500/80 to-primaryTheme-500 "
          ></div>

          <Image
            src="/assets/sorriso.jpg"
            width="0"
            height="0"
            sizes="100vw"
            className=" mt-24 md:mt-0 w-full h-fit object-cover  md:max-w-[70%]  "
            alt=""
          />
        </div>
        <TitleSection title="Fundador" />
        <div className="grid md:flex  gap-10 p-4 md:p-20 ">
          <div className="grid justify-center gap-5 w-full  mt-20 ">
            <h1
              className={`text-3xl  font-bold opacity-0 ${
                isVisible ? 'animate__animated animate__fadeIn' : ''
              }`}
            >
              Luciano Colino
            </h1>
            <p
              className={`font-medium text-sm md:text-lg opacity-0 ${
                isVisible ? 'animate__animated animate__fadeIn delay-500' : ''
              }`}
            >
              Natural da cidade de Campos dos Goytacazes – RJ, Casado com
              Marcelle Colino, tem três filhos.
            </p>
            <p
              className={`font-medium text-sm md:text-lg opacity-0 ${
                isVisible ? 'animate__animated animate__fadeIn delay-700' : ''
              }`}
            >
              Graduado em Teologia pela FABERJ, atua como Pastor Evangélico,
              Fundador da Comunidade Evangélica Celebra Cristo RJ Teólogo,
              Estudante de Direito, Escritor, Capelão formado pela Ordem dos
              Capelães do Brasil, Radialista, Articulista , Conferencista,
              Palestrante, Presidente da Rádio Louvores Fm RJ.
            </p>
            <p
              className={`font-medium text-sm md:text-lg opacity-0 ${
                isVisible ? 'animate__animated animate__fadeIn delay-1000' : ''
              }`}
            >
              Fundador e Palestrante da Conferência IDEV “Instruindo Despertar
              Empreender Vidas” Criada para transformar vidas despertando-as ao
              propósitos.
            </p>

            <div className="flex justify-center">
              <Link
                target="_blank"
                href={contactList[2].href}
                className="w-full"
              >
                <Button
                  variant="ghost"
                  className="text-primaryTheme-500 w-full bg-brownTheme-500"
                >
                  SAIBA MAIS
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full grid justify-center  ">
            <div className="w-[280px] grid place-items-center">
              <Image
                src="/assets/palestra.jpeg"
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
