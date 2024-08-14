import Image from 'next/image'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { tecnologiesList } from '@/data/tecnologies'
import PopUpThreeDots from './Popup/PopUpThreeDots'

export default function Orbitals() {
  return (
    <div className=" w-100vw p-8 overflow-hidden ">
      <div className="relative h-fit rounded-full w-fit  flex items-center justify-center animate-spin-slow-right  ">
        <div className="  profileCard_container relative p-10 border-2 border-dashed rounded-full border-spacing-4 bg-transparent dark:border-gray-400/50 ">
          {tecnologiesList.map((tecnology, index) => (
            <PopUpThreeDots
              key={index}
              title={tecnology.title}
              description={tecnology.description}
              svg={tecnology.svg}
              className={tecnology.className}
              certificates={tecnology.certificates}
            />
          ))}

          <Dialog>
            <DialogTrigger asChild>
              <Button className="  profile_item bg-transparent hover:bg-transparent w-[200px] h-[200px] p-0 border-2 rounded-full  hover:border-4  dark:border-gray-400/50  cursor-pointer transition-colors duration-500 z-0">
                <div className="w-full bg-transparent h-full flex items-center justify-center p-2 rounded-full active:scale-90  object-cover  animate-spin-slow-left">
                  <div className="w-full h-full  flex justify-center items-center bg-black rounded-full  ">
                    <Image
                      alt="imagem de Juan Sued"
                      width="0"
                      height="0"
                      sizes="100vw"
                      className=" relative w-fit h-fit rounded-full"
                      src={'/assets/logo.png'}
                    />
                  </div>
                </div>
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[90vw] sm:max-w-[600px] ">
              <div className="flex w-full gap-2">
                <div className="rounded-full h-4 w-4 bg-green-500"></div>
                <div className="rounded-full h-4 w-4 bg-yellow-500"></div>
                <div className="rounded-full h-4 w-4 bg-red-500"></div>
              </div>
              <DialogHeader>
                <DialogTitle>
                  O que é a <strong>Horizon Play</strong>?
                </DialogTitle>
                <DialogDescription>É um prazer vê-lo aqui 👋</DialogDescription>
              </DialogHeader>
              <div className="contentDialog grid gap-2">
                <p>
                  Na <strong>Horizon Play</strong>, nossa missão é transformar a
                  maneira como nossos clientes consomem conteúdo digital.
                </p>
                <p>
                  Fundada com a visão de oferecer a melhor plataforma de IPTV no
                  Brasil, nos dedicamos a fornecer uma experiência premium,
                  marcada pela estabilidade e pela variedade de conteúdos.
                </p>
                <p>
                  Somos apaixonados por tecnologia e entretenimento, e
                  trabalhamos incansavelmente para garantir que nossos clientes
                  tenham acesso ao melhor dos dois mundos.
                </p>
                <p>
                  Nossa equipe de especialistas está constantemente inovando e
                  expandindo nossa biblioteca de conteúdos para oferecer sempre
                  as últimas novidades e os clássicos favoritos.
                </p>
                <p>
                  Acreditamos que assistir TV deve ser uma experiência agradável
                  e sem complicações. Por isso, investimos continuamente em
                  tecnologia de ponta e suporte ao cliente, assegurando que
                  nossos serviços estejam sempre à altura das expectativas de
                  nossos assinantes.
                </p>
                <p>
                  Na <strong>Horizon Play</strong>, estamos comprometidos em
                  proporcionar o melhor serviço de IPTV, elevando o padrão de
                  entretenimento no Brasil.
                </p>
                <p>
                  Junte-se a nós e descubra por que somos a escolha número um
                  para milhares de espectadores satisfeitos em todo o país.
                </p>
              </div>

              <DialogFooter>
                <a
                  href="https://wa.me/+5522999152641"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant={'sucess'}>Fale conosco</Button>
                </a>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
