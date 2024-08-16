import TitleSection from '@/components/shared/TitleSection'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { IServiceItem, servicesList } from '@/data/services'

export default function Services() {
  return (
    <>
      <section
        id="services"
        className="mt-[-2px] bg-wave-brown-to-transparent differences  w-full flex flex-col items-center  "
      >
        <TitleSection title="Menu" className="text-primaryTheme-500" />

        <Carousel
          opts={{
            align: 'start',
          }}
          className="  w-[99.40vw]  "
        >
          <div className=" flex w-full justify-end gap-2 px-8 ">
            <CarouselPrevious />
            <CarouselNext />
          </div>

          <CarouselContent className=" py-12 pl-2 md:pl-20 ">
            {servicesList.map((service, index) => (
              <CarouselItem
                key={index}
                className=" basis-80 sm:basis-1/2 md:basis-1/3 lg:basis-1/4 min-h-[400px] "
              >
                <div className="mx-5 h-full">
                  <CardService
                    key={index}
                    id={service.id}
                    shortName={service.shortName}
                    title={service.title}
                    icon={service.icon}
                    description={service.description}
                    href={service.href}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </>
  )
}

function CardService({ icon, title, description, href }: IServiceItem) {
  return (
    <Card className=" hover:-translate-y-11  p-6 w-full h-full   hover:shadow-2xl   transition-all duration-500">
      <figure className="flex flex-col h-full justify-between gap-2 ">
        <div className="p-6 text-brownTheme-500  dark:text-primaryTheme-500  bg-primaryTheme-500 dark:bg-brownTheme-500 w-fit rounded-full h-20">
          {icon}
        </div>

        <figcaption className="grid gap-2 ">
          <h3 className="text-brownTheme-500  text-lg font-semibold">
            {title}
          </h3>
          <p className="text-brownTheme-500/70">{description}</p>
        </figcaption>
        <a target="_blank" href={href}>
          <Button variant="sucess">Saiba mais</Button>
        </a>
      </figure>
    </Card>
  )
}
