import BackGroundVideo from '@/components/shared/BackGroundVideo'
import CatchPhrase from './components/CatchPhrase'
import Differences from './components/Differences'
import Services from './components/Services'
import Clients from './components/Clients/index'
import HowItWorks from './components/HowItWorks'
import CreatedBy from './components/CreatedBy'

export default function Home() {
  return (
    <>
      <BackGroundVideo nameVideo="minidonutpink.mp4" />

      <main className="grid   mt-[70px] sm:mt-16 w-full  ">
        <CatchPhrase />
        <Differences />
        <HowItWorks />
        <Services />
        <Clients />
        <CreatedBy />
      </main>
    </>
  )
}
