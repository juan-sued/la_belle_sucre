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
    href: 'https://wa.me/+5522999152641?text=Gostaria%20de%20solicitar%20uma%20informação.',
    description: 'Fale conosco pelo WhatsApp',
  },
  {
    icon: <Music2Icon size={20} />,
    title: 'TikTok',
    href: 'https://www.tiktok.com/@_horizonplay?lang=pt-BR',
    description: 'Sempre algo interessante.',
  },
  {
    icon: <InstagramIcon size={20} />,
    title: 'Instagram',
    href: 'https://www.instagram.com/luciano_colino',
    description: 'Fique por dentro de tudo.',
  },
  {
    icon: <MailIcon size={20} />,
    title: 'Email',
    description: 'lucianocolino@gmail.com',
    href: 'mailto:lucianocolino@gmail.com?subject=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20planos.',
  },
]
