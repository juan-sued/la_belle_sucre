import { Button } from '@/components/ui/button'
import './DoubleFaceHoverCard.css'
import { useInView } from 'react-intersection-observer'
import { useState, useEffect } from 'react'

export interface IDoubleFaceHoverCard {
  title: string
  description: string
  href: string
}

export default function DoubleFaceHoverCard({
  title,
  description,
  href,
}: IDoubleFaceHoverCard) {
  const { ref, inView } = useInView({
    delay: 1000,
    threshold: 0.5,
  })
  const [isVisible, setIsVisible] = useState<boolean>(false)

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }, [inView])

  return (
    <div className={`card-container ${isVisible ? 'visible' : ''}`} ref={ref}>
      <div className="card backdrop-blur-md">
        <div className="front-content p-6">
          <p>{title}</p>
        </div>
        <div className="content ">
          <p className="heading">{title}</p>
          <p>{description}</p>
          <a href={href} target="_blank" rel="noopener noreferrer">
            <Button variant="ghost" className="hover:bg-red-200">
              Saiba mais
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
