import TitleSection from '@/components/shared/TitleSection'
import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <section
        id="about-us"
        className="pb-40 overflow-hidden   w-full flex flex-col items-center   gap-32 lg:gap-20"
      >
        <TitleSection title="O que é a Clínica da Alma?" />
        <div className="flex justify-start w-[90%] max-w-scr relative h-0 overflow-visible">
          <div className=" relative left-[-80px] mt-[-130px]  w-[400px] h-[400px]  rounded-full ">
            <Image
              src="/assets/medic-ilustrator.svg"
              width="0"
              height="0"
              sizes="100vw"
              className=" w-fit h-fit "
              alt=""
            />
          </div>
        </div>
        <div className="   w-[90%] max-w-[800px] bg-primaryTheme-500 dark:bg-opacity-30   p-2  backdrop-blur-3xl   rounded-3xl  border border-white border-opacity-10">
          <div className=" w-full h-full p-4 md:p-16 pb-6  blur-radial-gradient border rounded-2xl border-white border-opacity-10">
            <div className="w-full grid gap-4">
              <p className="text-xl">
                A <strong>Clínica da Alma</strong> é um projeto dedicado a
                oferecer suporte emocional, espiritual e físico de forma
                gratuita. Aqui, você encontrará psicólogos, nutricionistas,
                pastores e profissionais de diversas áreas prontos para ajudar
                você a alcançar o bem-estar completo.
              </p>

              <div className="w-full flex justify-end">
                <a
                  href="https://wa.me/+5522999152641"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full lg:w-fit"
                >
                  <Button variant="outline" className="w-full lg:w-fit">
                    Fale conosco
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end w-[90%] max-w-scr relative h-0 overflow-visible z-[-40]">
          <div className=" relative right-[-95px] mt-[-150px] md:mt-[-350px]  w-[400px] h-[400px]  rounded-full ">
            <Image
              src="/assets/doctors.svg"
              width="0"
              height="0"
              sizes="100vw"
              className=" w-fit h-fit "
              alt=""
            />
          </div>
        </div>
      </section>
    </>
  )
}
