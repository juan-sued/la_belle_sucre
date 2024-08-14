import {
  DollarSignIcon,
  GoalIcon,
  HeadphonesIcon,
  ListVideoIcon,
  PaletteIcon,
  RefreshCcwIcon,
  RocketIcon,
} from 'lucide-react'
import { ReactNode } from 'react'

export interface ICertificate {
  description: string
  title: string
}
export interface ITecnologyItem {
  title: string
  description: string
  className: string
  svg: ReactNode
  certificates: ICertificate[]
}

export const tecnologiesList: ITecnologyItem[] = [
  {
    title: 'Robustez e Desempenho',
    description:
      'Nossa tecnologia avançada garante uma transmissão fluida e sem interrupções, permitindo que você desfrute de seus programas favoritos com a melhor qualidade de imagem e som.',

    svg: <RocketIcon />,
    className: 'left-[60px] -top-[8px]',
    certificates: [
      {
        description:
          'Utilizamos servidores de alta performance e tecnologias de última geração.',
        title: 'Tecnologia de ponta',
      },
      {
        description: 'Sistema de backup robusto para evitar interrupções.',
        title: 'Redundância',
      },
      {
        description: 'Supervisão 24/7 para garantir a máxima estabilidade.',
        title: 'Monitoramento Contínuo',
      },
    ],
  },

  {
    title: 'Variedade de Conteúdos',
    description:
      'Com uma coleção vasta e diversificada, oferecemos desde os canais mais populares até os filmes e séries mais recentes, tudo ao seu alcance.',

    svg: <ListVideoIcon />,
    className: 'right-[55px] -top-[10px]',
    certificates: [
      {
        description: 'Acesso a centenas de canais nacionais e internacionais.',
        title: 'Canais ao Vivo',
      },
      {
        description: 'Catálogo extenso de filmes de diversos gêneros e épocas.',
        title: 'Biblioteca de Filmes',
      },
      {
        description: 'Séries populares e exclusivas, atualizadas regularmente.',
        title: 'Séries Atualizadas',
      },
    ],
  },

  {
    title: 'Facilidade de Uso',
    description:
      'Nossa interface amigável e intuitiva torna a navegação simples e agradável, proporcionando uma experiência de usuário excepcional.',

    svg: <GoalIcon />,
    className: '-left-4 top-20',
    certificates: [
      {
        description: 'Navegação simples e organizada',
        title: 'Interface Intuitiva',
      },
      {
        description:
          ' Ferramenta de busca eficiente para encontrar rapidamente o que deseja.',
        title: 'Pesquisa Rápida',
      },
      {
        description: 'Visualização fácil dos programas em andamento e futuros.',
        title: 'Guia de Programação',
      },
    ],
  },

  {
    title: 'Suporte ao Cliente',
    description:
      'Estamos sempre prontos para ajudar. Nossa equipe de suporte está disponível 24/7 para garantir que você tenha a melhor experiência possível.',

    svg: <HeadphonesIcon />,
    className: '-right-4 top-20',
    certificates: [
      {
        description: 'Suporte técnico e ao cliente disponível a qualquer hora.',
        title: 'Disponibilidade 24/7',
      },
      {
        description: 'Suporte via chat, e-mail e telefone.',
        title: 'Atendimento Multicanal',
      },
      {
        description:
          'Profissionais treinados para resolver qualquer problema rapidamente.',
        title: 'Equipe Especializada',
      },
    ],
  },

  {
    title: 'Atualizações Constantes',
    description:
      'Estamos sempre atualizando e expandindo nossa biblioteca de conteúdos, garantindo que você tenha acesso às últimas novidades e lançamentos do mundo do entretenimento.',

    svg: <RefreshCcwIcon />,
    className: 'bottom-8 -left-0',
    certificates: [
      {
        description: 'Adição frequente de novos filmes e episódios de séries',
        title: 'Novos Lançamentos',
      },
      {
        description:
          'Atualizações regulares para aprimorar a qualidade e funcionalidade.',
        title: 'Melhorias Tecnológicas',
      },
      {
        description:
          'Integração de sugestões e melhorias baseadas no feedback dos clientes.',
        title: 'Feedback dos Usuários',
      },
    ],
  },

  {
    title: 'Personalização',
    description:
      'Oferecemos opções de personalização para que você possa adaptar a plataforma às suas preferências, tornando sua experiência de visualização ainda mais agradável e personalizada.',

    svg: <PaletteIcon />,
    className: 'bottom-8 -right-0',
    certificates: [
      {
        description:
          'Crie e gerencie suas próprias listas de conteúdos favoritos.',
        title: 'Listas de Favoritos',
      },
      {
        description: 'Diferentes perfis para cada membro da família.',
        title: 'Perfis de Usuário',
      },
      {
        description: 'Sugestões baseadas no seu histórico de visualização.',
        title: 'Recomendações Personalizadas',
      },
    ],
  },

  {
    title: 'Custo-Benefício',
    description:
      'Nossos planos são competitivos e oferecem uma excelente relação custo-benefício, permitindo que você tenha acesso a um serviço de alta qualidade por um preço acessível.',

    svg: <DollarSignIcon />,
    className: 'right-[43%] -bottom-6',
    certificates: [
      {
        description:
          'Várias opções de assinatura para se ajustar ao seu orçamento.',
        title: 'Planos Flexíveis',
      },
      {
        description: 'Ofertas especiais e descontos regulares para assinantes.',
        title: 'Promoções e Descontos',
      },
      {
        description:
          'Período de teste sem compromisso para experimentar o serviço.',
        title: 'Teste Gratuito',
      },
    ],
  },
]
