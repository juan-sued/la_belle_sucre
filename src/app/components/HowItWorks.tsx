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
        className="     w-full flex flex-col items-center   gap-32 lg:gap-20"
      >
        <TitleSection title="3 passos simples" />
        <div className="flex justify-start w-[90%] max-w-scr relative h-0 overflow-visible">
          <div className=" relative top-16  md:right-[-95px]  mt-[-130px]    md:w-[400px] md:h-[400px] rounded-full ">
            <Image
              src="/assets/chef.svg"
              width="0"
              height="0"
              sizes="100vw"
              className="  w-[200px] h-[200px]  "
              alt=""
            />
          </div>
        </div>

        <div className=" flex justify-center items-center w-full ">
          <div
            className="h-full min-w-[470px] scale-[60%] md:scale-[80%] lg:md:scale-[100%]"
            ref={ref}
          >
            <div className="  w-full relative  right-[15px] top-10 flex justify-start  items-center gap-4 overflow-visible h-0 ">
              <div
                className=" w-14 h-14 font-bold grid place-items-center rounded-full  transition-all duration-5000  bg-brownTheme-500"
                style={{
                  transform: progress < 1 ? 'scale(0)' : 'scale(1)',
                  transition: 'transform 0.3s ease-in-out', // Adicione uma transição suave
                }}
              >
                1º
              </div>
              <div
                className="animate__animated animate__fadeIn delay-1000 text-xl font-bold drop-shadow "
                style={{
                  display: progress < 1 ? 'none' : 'grid',
                }}
              >
                Selecione e customize seu doce favorito.
              </div>
            </div>

            <div className="flex justify-start  items-center gap-4 relative right-4 top-[50%] text-lg transition-all duration-5000  ease-out">
              <div
                className=" w-14 h-14 font-bold grid place-items-center rounded-full  bg-brownTheme-500"
                style={{
                  transform: progress < 50 ? 'scale(0)' : 'scale(1)',
                  transition: 'transform 0.3s ease-in-out', // Adicione uma transição suave
                }}
              >
                2º
              </div>
              <div
                className="animate__animated animate__fadeIn delay-1000 text-xl font-bold drop-shadow"
                style={{
                  display: progress < 50 ? 'none' : 'grid',
                }}
              >
                Selecione o endereço.
              </div>
            </div>

            <div className="rounded-full containerProgress bg-white/10 p-1 h-[400px] w-6 ">
              <div
                className={
                  'progressBar rounded-full  transition-all duration-2000  ease-out  '
                }
                style={{
                  height: `${progress}%`,
                  backgroundColor:
                    progress < 50 ? 'rgba(255, 255, 255, 0.1)' : '#633603',
                }}
              />
            </div>

            <div className="relative  right-[15px] flex justify-start  items-center gap-4 overflow-visible h-0 ">
              <div
                className=" w-14 h-14 font-bold grid place-items-center rounded-full transition-all duration-5000  ease-out  bg-brownTheme-500"
                style={{
                  transform: progress < 100 ? 'scale(0)' : 'scale(1)',
                  transition: 'transform 0.3s ease-in-out', // Adicione uma transição suave
                }}
              >
                3º
              </div>
              <div
                className="animate__animated animate__fadeIn delay-1000 text-xl font-bold drop-shadow"
                style={{
                  display: progress < 100 ? 'none' : 'grid',
                }}
              >
                Receba em casa.
              </div>
            </div>
          </div>
        </div>

        <div className="  flex justify-end w-0 max-w-scr relative h-0 overflow-visible z-[-40] ">
          <div className=" relative    mt-[-150px]  md:mt-[-350px]   md:w-[400px] md:h-[400px]  rounded-full ">
            <Image
              src="/assets/options.svg"
              width="0"
              height="0"
              sizes="100vw"
              className="min-w-[200px] min-h-[200px] "
              alt=""
            />
          </div>
        </div>

        <div className="flex justify-start w-[90%] max-w-scr relative h-0 overflow-visible">
          <div className=" relative top-12  md:right-[-95px]  mt-[-130px]    md:w-[400px] md:h-[400px] rounded-full ">
            <Image
              src="/assets/delivery.svg"
              width="0"
              height="0"
              sizes="100vw"
              className="  w-[200px] h-[200px]  "
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  )
}
