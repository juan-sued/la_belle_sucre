import { Button } from '@/components/ui/button'
import {
  DialogHeader,
  Dialog,
  DialogTrigger,
  DialogContent,
} from '@/components/ui/dialog'
import { ICertificate, ITecnologyItem } from '@/data/tecnologies'
import { cn } from '@/lib/utils'

export default function PopUpThreeDots({
  title,
  description,
  className,
  svg,
  certificates,
}: ITecnologyItem) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={cn(
            ' w-fit h-fit  profile_item   absolute rounded-full bg-cover cursor-pointer border bg-transparent dark:border-gray-400/50 p-[2px] active:scale-90 hover:scale-95 ',
            className,
          )}
        >
          <span className="text-primaryTheme-500 flex justify-center items-center w-[40px] h-[40px]  rounded-full z-[2] bg-indigo-300 p-1 animate-spin-slow-left">
            {svg}
          </span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px] ">
        <DialogHeader className="  gap-4">
          <div className="flex w-fit gap-2">
            <div className="rounded-full h-4 w-4 bg-green-500"></div>
            <div className="rounded-full h-4 w-4 bg-yellow-500"></div>
            <div className="rounded-full h-4 w-4 bg-red-500"></div>
          </div>

          <div className="w-fit h-full flex justify-start items-center gap-2">
            <span className="shadow-inner shadow-slate-500 flex justify-center items-center text-primaryTheme-500 w-[40px] h-[40px]  rounded-full  bg-indigo-300 p-1 ">
              {svg}
            </span>
            <h2 className="font-bold">{title}</h2>
          </div>
        </DialogHeader>
        <div className="contentDialog grid gap-3 ">
          <p className="text-justify">{description}</p>

          <ul>
            {certificates.map((certificate, index) => (
              <CertificateItem
                key={index}
                title={certificate.title}
                description={certificate.description}
              />
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export function CertificateItem({ title, description }: ICertificate) {
  return (
    <Button
      variant="ghost"
      className=" p-0 pt-2 w-full h-fit flex justify-start rounded-none active:scale-100"
    >
      <div className="border-b-2 border-slate-600  grid gap-2  w-full pb-2">
        <div className=" flex w-fit justify-center items-center  gap-3 ">
          <div className=" w-fit h-fit bg-green-600 bg-opacity-25 p-1 rounded-full">
            <div className=" bg-green-400 w-2 h-2 rounded-full drop-shadow"></div>
          </div>
          <h2 className="font-medium">{title}</h2>
        </div>
        <p className=" w-fit text-xs text-muted-foreground">{description}</p>
      </div>
    </Button>
  )
}
