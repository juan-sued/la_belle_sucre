import { Button } from '@/components/ui/button'

export default function CatchPhrase() {
  return (
    <>
      <section className="titleIntroduction w-full flex flex-col items-center justify-center  gap-6  md:gap-14  pt-36 md:pt-28">
        <h1 className="drop-shadow text-xl md:text-7xl    animate__animated animate__fadeInUp duration-500 delay-5duration-500">
          Une expérience <strong>La Belle Sucré</strong>
        </h1>
        <h2 className=" font-medium drop-shadow text-[10px] md:text-3xl animate__animated animate__fadeInUp duration-700 delay-duration-700">
          Abertos à encomendas
        </h2>

        <Button
          className="animate__animated animate__fadeIn duration-1000 delay-1000 text-xsm  md:text-xl w-fit h-fit  dark:text-white font-medium"
          variant="sucess"
        >
          Clique aqui para ver o menu
        </Button>
      </section>
    </>
  )
}
