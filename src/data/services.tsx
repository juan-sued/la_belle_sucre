import {
  CakeIcon,
  DessertIcon,
  GridIcon,
  IceCream,
  IceCream2Icon,
  LucideDonut,
  SandwichIcon,
  SoupIcon,
} from 'lucide-react'
import { ReactNode } from 'react'

export interface IServiceItem {
  id: number
  shortName: string
  icon: ReactNode
  title: string
  description: string
  href: string
}
export const servicesList: IServiceItem[] = [
  {
    id: 1,
    shortName: 'Cake Donuts',
    title: 'Cake Donuts Artesanais',
    description:
      'Desfrute de nossos cake donuts artesanais, feitos com ingredientes premium e sabores únicos.',
    icon: <LucideDonut className="w-full h-full" />,
    href: 'https://api.whatsapp.com/send?phone=5521984980723&text=Gostaria%20de%20saber%20mais%20sobre%20os%20cake%20donuts%20artesanais.',
  },
  {
    id: 2,
    shortName: 'Cone Trufado',
    title: 'Cones Trufados',
    description:
      'Experimente nossos cones trufados, recheados com sabores irresistíveis.',
    icon: <IceCream className="w-full h-full" />,
    href: 'https://api.whatsapp.com/send?phone=5521984980723&text=Gostaria%20de%20saber%20mais%20sobre%20os%20cones%20trufados.',
  },
  {
    id: 3,
    shortName: 'Fondue de Chocolates Nobres',
    title: 'Fondue de Chocolates Nobres',
    description:
      'Ideal para celebrações, nosso fondue de chocolate oferece uma experiência deliciosa.',
    icon: <SoupIcon className="w-full h-full" />,
    href: 'https://api.whatsapp.com/send?phone=5521984980723&text=Gostaria%20de%20saber%20mais%20sobre%20o%20fondue%20de%20chocolate.',
  },
  {
    id: 4,
    shortName: 'Waffles',
    title: 'Waffles',
    description:
      'Experimente nossos waffles frescos, servidos com coberturas deliciosas e variadas.',
    icon: <GridIcon className="w-full h-full" />,
    href: 'https://api.whatsapp.com/send?phone=5521984980723&text=Gostaria%20de%20saber%20mais%20sobre%20os%20waffles.',
  },

  {
    id: 5,
    shortName: 'Crepes Franceses',
    title: 'Crepes Franceses',
    description:
      'Deguste nossos crepes franceses autênticos, preparados na hora com recheios variados.',
    icon: <SandwichIcon className="w-full h-full" />,
    href: 'https://api.whatsapp.com/send?phone=5521984980723&text=Gostaria%20de%20saber%20mais%20sobre%20os%20crepes%20franceses.',
  },

  {
    id: 6,
    shortName: 'Bolos e Tortas',
    title: 'Bolos e Tortas',
    description:
      'Encomende bolos e tortas personalizadas, com sabores e decorações feitas sob medida.',
    icon: <CakeIcon className="w-full h-full" />,
    href: 'https://api.whatsapp.com/send?phone=5521984980723&text=Gostaria%20de%20saber%20mais%20sobre%20os%20bolos%20e%20tortas.',
  },
  {
    id: 7,
    shortName: 'Brigadeiros Gourmet',
    title: 'Brigadeiros Gourmet',
    description:
      'Encomende e saboreie nossos brigadeiros gourmet, elaborados com ingredientes de alta qualidade.',
    icon: <DessertIcon className="w-full h-full" />,
    href: 'https://api.whatsapp.com/send?phone=5521984980723&text=Gostaria%20de%20saber%20mais%20sobre%20os%20brigadeiros%20gourmet.',
  },
  {
    id: 8,
    shortName: 'Torre de Carolinas',
    title: 'Torre de Carolinas',
    description:
      'Encomende e aprecie nossas carolinas, com uma combinação perfeita de crocância e cremosidade.',
    icon: <IceCream2Icon className="w-full h-full" />,
    href: 'https://api.whatsapp.com/send?phone=5521984980723&text=Gostaria%20de%20saber%20mais%20sobre%20a%20torre%20de%20carolinas.',
  },
]
