import {
  InstagramIcon,
  MailIcon,
  MessageCircleIcon,
  Music2Icon,
} from 'lucide-react'

export interface IContactItem {
  icon: React.ReactNode
  title: string
  href: string
  description: string
}
export const contactList: IContactItem[] = [
  {
    icon: <MessageCircleIcon size={20} />,
    title: 'WhatsApp',
    href: 'https://wa.me/+5521968289429?text=Gostaria%20de%20solicitar%20uma%20informação.',
    description: 'Fale conosco pelo WhatsApp',
  },
  {
    icon: <Music2Icon size={20} />,
    title: 'TikTok',
    href: 'https://www.tiktok.com/@_labellesucre?lang=pt-BR',
    description: 'Sempre algo interessante.',
  },
  {
    icon: <InstagramIcon size={20} />,
    title: 'Instagram',
    href: 'https://www.instagram.com/_labellesucre',
    description: 'Fique por dentro de tudo.',
  },
  {
    icon: <MailIcon size={20} />,
    title: 'Email',
    description: 'juansued19@gmail.com',
    href: 'mailto:juansued19@gmail.com?subject=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20doces.',
  },
]
