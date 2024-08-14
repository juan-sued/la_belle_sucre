import LogoAndName from '../Header/LogoAndName'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { contactList } from '@/data/contact'
import { servicesList } from '@/data/services'

export default function Footer() {
  return (
    <footer>
      <div className="flex relative h-0 overflow-visible">
        <div className="animate-move-random delay-1000  w-[300px] h-[300px]  rounded-full bg-yellow-400" />
      </div>
      <section className="   border-t-2 gap-20 boder-slate-200 border-slate-900   backdrop-blur-md bg-primaryTheme-500 dark:bg-opacity-40   p-20 flex flex-col items-center  w-full">
        <div className="flex flex-col md:flex-row w-full">
          <div className=" flex flex-col gap-6 py-6 md:py-0 justify-between w-full text-white ">
            <LogoAndName />
            <div className="flex flex-wrap">
              {contactList.map((contact, index) => {
                return (
                  <Link key={index} target="_blank" href={contact.href}>
                    <Button variant="ghost" className="text-muted-foreground">
                      {contact.icon}
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col md:flex-row  gap-6  w-full justify-start">
            <ul className="w-full grid gap-4 transition-all">
              <li className=" w-fit text-lg font-medium text-white ">
                Serviços
              </li>
              {servicesList.map((service, index) => (
                <li
                  key={index}
                  className=" w-fit text-muted-foreground hover:font-bold cursor-pointer"
                >
                  <a target="_blank" href={service.href}>
                    {service.shortName}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="w-full h-fit grid gap-4 transition-all">
              <li className=" w-fit text-lg font-medium text-white ">
                Parceiros
              </li>
              <li className=" w-fit text-muted-foreground hover:font-bold cursor-pointer">
                <a href="#about-us">Nossos valores</a>
              </li>
              <li className=" w-fit text-muted-foreground hover:font-bold cursor-pointer">
                <a href="#about-us">Nossa missão</a>
              </li>
              <li className=" w-fit text-muted-foreground hover:font-bold cursor-pointer">
                <a href="#advertisements">O que há de novo?</a>
              </li>
            </ul>
            <ul className="grid w-full h-fit gap-4 transition-all">
              <li className=" w-fit text-lg font-medium text-white ">
                Recursos
              </li>
              <li className=" w-fit text-muted-foreground hover:font-bold cursor-pointer">
                <a href="#about-us">Dúvidas frequentes</a>
              </li>
              <li className=" w-fit text-muted-foreground hover:font-bold cursor-pointer">
                <a
                  href={contactList[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Atendimento ao consumidor
                </a>
              </li>
              <li className=" w-fit text-muted-foreground hover:font-bold cursor-pointer">
                <a
                  href={contactList[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Contato
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className=" text-white  gap-4 flex flex-col md:flex-row w-full pt-20 border-t-2 boder-slate-200">
          <div className="w-full flex flex-col md:flex-row justify-start items-center gap-2 ">
            <Link href={'/'}>
              <Button
                variant="link"
                className="w-fit text-white  cursor-pointer"
              >
                Política de Privacidade
              </Button>
            </Link>
            -
            <Link href={'/'}>
              <Button
                variant="link"
                className=" w-fit text-white  cursor-pointer"
              >
                Termos e condições
              </Button>
            </Link>
          </div>
          <div className="w-full flex justify-center md:justify-end md:items-center text-xs">
            Clínica da Alma. Todos os direitos reservados.
          </div>
        </div>
      </section>
    </footer>
  )
}
