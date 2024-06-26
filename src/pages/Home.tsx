
import Faqs from '../components/Faqs'
import Hero from '../components/Hero'
import LaundaryServices from '../components/LaundaryServices'
import TransportServices from '../components/TransportServices'
import Welcome_Sawasdee from '../components/Welcome_Sawasdee'

const Home = () => {
  return (
    <div className='w-full flex flex-col gap-5'>
      <Hero/>
      <LaundaryServices/>
      <TransportServices/>
      <Welcome_Sawasdee/>
      <Faqs/>

       
    </div>
  )
}

export default Home
