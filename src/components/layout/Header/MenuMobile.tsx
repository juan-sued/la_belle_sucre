import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { contactList } from '@/data/contact'

import {
  HeartPulseIcon,
  HelpCircleIcon,
  HomeIcon,
  Menu,
  MessageCircleIcon,
} from 'lucide-react'
import Link from 'next/link'

export function MenuMobile() {
  return (
    <>
      <div className=" flex lg:hidden justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="  bg-transparent  hover:bg-transparent dark:bg-transparent  rounded-full   ">
              <Menu color="white" size={25} />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className=" w-56 " align="end" forceMount>
            <DropdownMenuGroup>
              <Link href="/">
                <DropdownMenuItem className="cursor-pointer">
                  <HomeIcon className="mr-2 h-4 w-4" />
                  <span>Início</span>
                </DropdownMenuItem>
              </Link>
              <Link href="#about-us">
                <DropdownMenuItem className="cursor-pointer">
                  <HelpCircleIcon className="mr-2 h-4 w-4" />
                  <span>Quem somos?</span>
                </DropdownMenuItem>
              </Link>
              <Link href="#services">
                <DropdownMenuItem className="cursor-pointer">
                  <HeartPulseIcon className="mr-2 h-4 w-4" />
                  <span>Serviços</span>
                </DropdownMenuItem>
              </Link>
              <Link href="#clients">
                <DropdownMenuItem className="cursor-pointer">
                  <MessageCircleIcon className="mr-2 h-4 w-4" />
                  <span>O que dizem de nós</span>
                </DropdownMenuItem>
              </Link>
            </DropdownMenuGroup>

            <DropdownMenuSeparator />

            <Link target="_blank" href={contactList[0].href}>
              <DropdownMenuItem className="cursor-pointer">
                <div className="flex gap-2">
                  {contactList[0].icon}
                  Entrar em contato
                </div>
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  )
}
