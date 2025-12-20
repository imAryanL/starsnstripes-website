import HeroSection from '@/components/home/herosection'
import ServicesSection from '@/components/home/servicessection'
import WhyChooseUs from '@/components/home/whychooseus'
import Testimonials from '@/components/home/testimonials'
import CTASection from '@/components/home/ctasection'




export default function Home() {
  return (
    <main>
      <HeroSection/>
      <ServicesSection/>
      <WhyChooseUs/>
      <Testimonials/>
      <CTASection/>
    </main>
  )
}