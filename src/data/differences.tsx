import { ChefHatIcon, GlobeIcon, SparklesIcon } from 'lucide-react'
import { ReactNode } from 'react'

export interface IDifferenceItem {
  icon: ReactNode
  title: string
  description: string
}
export const differencesList: IDifferenceItem[] = [
  {
    title: 'Doces Autênticos e Criativos',
    description:
      'Nossas criações são inspiradas em gastronomias de todo o mundo, especialmente a francesa.',
    icon: <GlobeIcon className="w-full h-full" />,
  },
  {
    title: 'Ingredientes de Máxima Qualidade',
    description:
      'Utilizamos apenas ingredientes selecionados, garantindo o sabor e a qualidade em cada doce.',
    icon: <SparklesIcon className="w-full h-full" />,
  },
  {
    title: 'Confeiteiros Altamente Capacitados',
    description:
      'Nossa equipe de confeiteiros é formada por profissionais especializados, prontos para criar as melhores sobremesas.',
    icon: <ChefHatIcon className="w-full h-full" />,
  },
]
