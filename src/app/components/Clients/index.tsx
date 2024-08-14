import TitleSection from '@/components/shared/TitleSection'

import CarouselClients from './CarouselClients'
import BackGroundVideo from '@/components/shared/BackGroundVideo'

export default function Clients() {
  return (
    <>
      <section
        id="clients"
        className=" pb-14  differences  w-full flex flex-col items-center "
      >
        <BackGroundVideo nameVideo="dunutcomercial1.mp4" />

        <div className="contentClients grid  pt-10">
          <TitleSection title="O que dizem sobre nós" />
          <CarouselClients />
        </div>
      </section>
    </>
  )
}
