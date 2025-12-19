import HeroSection from '@/components/home/herosection'
import ServicesSection from '@/components/home/servicessection'
import WhyChooseUs from '@/components/home/whychooseus'
import Testimonials from '@/components/home/testimonials'





export default function Home() {
  return (
    <main>
      <HeroSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <Testimonials/>
    </main>
  )
}