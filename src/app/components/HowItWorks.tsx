'use client'

import TitleSection from '@/components/shared/TitleSection'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

export default function HowItWorks() {
  const { ref, inView } = useInView({
    delay: 500,
    threshold: 0.5,
  })
  const [progress, setProgress] = useState<number>(0)

  useEffect(() => {
    if (inView && progress < 100) {
      const interval = setInterval(() => {
        setProgress((value) => {
          if (value >= 100) {
            clearInterval(interval)
            return 100
          }
          return value + 1
        })
      }, 20) // Ajuste o tempo de incremento conforme necessário (20ms neste exemplo)
    }
  }, [inView, progress])

  return (
    <>
      <section
        id="how-it-works"
        className=" px-20 md:px-40  mt-[-2px]  w-full flex flex-col  bg-brownTheme-500    "
      >
        <TitleSection title="Três passos" className="text-primaryTheme-500 " />
        <div className="w-full grid justify-center">
          <div
            ref={ref}
            className=" w-full justify-center  items-center flex gap-4"
          >
            <div className="containerText">
              <div
                className={`transition-all duration-1000 overflow-hidden delay-700 ${
                  progress < 1 ? 'w-0' : 'w-[300px] sm:w-[150px]'
                }`}
              >
                <h2 className="w-[150px] md:w-[300px] text-md lg:text-3xl font-bold drop-shadow">
                  Selecione ou crie seu doce favorito
                </h2>
              </div>
            </div>
            <Image
              src="/assets/chef.svg"
              width="0"
              height="0"
              sizes="100vw"
              className="  w-[100px] h-[100px] md:w-[200px] md:h-[200px]  "
              alt=""
            />
          </div>
          <div className=" w-full    items-center flex gap-4 justify-center">
            <Image
              src="/assets/options.svg"
              width="0"
              height="0"
              sizes="100vw"
              className="  w-[100px] h-[100px] md:w-[200px] md:h-[200px]  "
              alt=""
            />
            <div className="containerText">
              <div
                className={`transition-all duration-1000 overflow-hidden delay-700 ${
                  progress < 1 ? 'w-0' : 'w-[300px] sm:w-[150px]'
                }`}
              >
                <h2 className="w-[300px] sm:w-[150px] text-md lg:text-3xl font-bold drop-shadow">
                  Selecione seu endereço
                </h2>
              </div>
            </div>
          </div>
          <div className=" w-full    items-center flex gap-4 justify-center">
            <div className="containerText">
              <div
                className={`transition-all duration-1000 overflow-hidden delay-700 ${
                  progress < 1 ? 'w-0' : 'w-[300px] sm:w-[150px]'
                }`}
              >
                <h2 className="w-[150px]  md:w-[300px] text-md lg:text-3xl font-bold drop-shadow">
                  Receba em casa
                </h2>
              </div>
            </div>
            <Image
              src="/assets/delivery.svg"
              width="0"
              height="0"
              sizes="100vw"
              className="  w-[100px] h-[100px] md:w-[200px] md:h-[200px]  "
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-center w-[90%] max-w-scr relative h-0 overflow-visible">
          <div className=" relative top-16    mt-[-130px]    md:w-[400px] md:h-[400px] rounded-full "></div>
        </div>
      </section>
      <style jsx>{`
        @media (max-width: 640px) {
          .containerText h2 {
            width: 150px;
            backgroud-color: red;
          }
          .containerText div {
            width: ${progress < 1 ? '0px' : '150px'};
          }
        }
        @media (min-width: 640px) {
          .containerText h2 {
            width: 300px;
            backgroud-color: red;
          }
          .containerText div {
            width: ${progress < 1 ? '0px' : '300px'};
          }
        }
      `}</style>
    </>
  )
}
