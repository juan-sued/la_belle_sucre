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
      <section className="   border-t-[1px] gap-20 boder-slate-200 border-brownTheme-500/20   backdrop-blur-md bg-primaryTheme-500 bg-opacity-40   p-20 flex flex-col items-center  w-full">
        <div className="flex flex-col md:flex-row w-full">
          <div className=" flex flex-col gap-6 py-6 md:py-0 justify-between w-full text-brownTheme-500 ">
            <LogoAndName />
            <div className="flex flex-wrap">
              {contactList.map((contact, index) => {
                return (
                  <Link key={index} target="_blank" href={contact.href}>
                    <Button variant="ghost" className="text-brownTheme-500/70">
                      {contact.icon}
                    </Button>
                  </Link>
                )
              })}
            </div>
          </div>
          <div className="flex flex-col md:flex-row  gap-6  w-full justify-start">
            <ul className="w-full grid gap-4 transition-all">
              <li className=" w-fit text-lg font-medium text-brownTheme-500 ">
                Serviços
              </li>
              {servicesList.map((service, index) => (
                <li
                  key={index}
                  className=" w-fit text-brownTheme-500/70 hover:font-bold cursor-pointer"
                >
                  <a target="_blank" href={service.href}>
                    {service.shortName}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="w-full h-fit grid gap-4 transition-all">
              <li className=" w-fit text-lg font-medium text-brownTheme-500 ">
                Parceiros
              </li>
              <li className=" w-fit text-brownTheme-500/70 hover:font-bold cursor-pointer">
                <a href="#created-by">Nossos valores</a>
              </li>
              <li className=" w-fit text-brownTheme-500/70 hover:font-bold cursor-pointer">
                <a href="#created-by">Nossa missão</a>
              </li>
              <li className=" w-fit text-brownTheme-500/70 hover:font-bold cursor-pointer">
                <a href="#services">O que há de novo?</a>
              </li>
            </ul>
            <ul className="grid w-full h-fit gap-4 transition-all">
              <li className=" w-fit text-lg font-medium text-brownTheme-500 ">
                Recursos
              </li>
              <li className=" w-fit text-brownTheme-500/70 hover:font-bold cursor-pointer">
                <a href="#about-us">Dúvidas frequentes</a>
              </li>
              <li className=" w-fit text-brownTheme-500/70 hover:font-bold cursor-pointer">
                <a
                  href={contactList[0].href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Atendimento ao consumidor
                </a>
              </li>
              <li className=" w-fit text-brownTheme-500/70 hover:font-bold cursor-pointer">
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
        <div className=" text-brownTheme-500  gap-4 flex flex-col md:flex-row w-full pt-20 border-t-2 boder-slate-200">
          <div className="w-full flex flex-col md:flex-row justify-start items-center gap-2 ">
            <Link href={'/'}>
              <Button
                variant="link"
                className="w-fit text-brownTheme-500  cursor-pointer"
              >
                Política de Privacidade
              </Button>
            </Link>
            -
            <Link href={'/'}>
              <Button
                variant="link"
                className=" w-fit text-brownTheme-500  cursor-pointer"
              >
                Termos e condições
              </Button>
            </Link>
          </div>
          <div className="w-full flex justify-center md:justify-end md:items-center text-xs">
            La Belle Sucré. Todos os direitos reservados.
          </div>
        </div>
      </section>
    </footer>
  )
}
