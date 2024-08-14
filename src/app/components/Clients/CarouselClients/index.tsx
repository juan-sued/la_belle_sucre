'use client'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'

import DoubleFaceHoverCard from '@/components/shared/Cards/DoubleFaceHoverCard/DoubleFaceHoverCard'
import { clientsList } from '@/data/clients'
import Autoplay from 'embla-carousel-autoplay'
import { useRef } from 'react'
export default function CarouselClients() {
  const plugin = useRef(Autoplay({ delay: 3000 }))

  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      plugins={[plugin.current]}
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.play}
      className=" w-[99.40vw]  "
    >
      <div className=" flex w-full justify-end gap-2 px-8 ">
        <CarouselPrevious />
        <CarouselNext />
      </div>

      <CarouselContent className=" py-12 pl-2 ">
        {clientsList.map((client, index) => (
          <CarouselItem
            key={index}
            className=" basis-80 sm:basis-1/2 md:basis-1/3 lg:basis-1/4  "
          >
            <div className="mx-5 h-full">
              <DoubleFaceHoverCard
                key={index}
                title={client.title}
                description={client.description}
                href={client.href}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
