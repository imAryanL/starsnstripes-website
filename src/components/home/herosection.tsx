import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShieldUser, Handshake, Star, BriefcaseBusiness, Phone, ArrowRight} from 'lucide-react'

export default function HeroSection() {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat h-auto md:h-[75vh] lg:h-[88vh] flex items-start pt-20 md:pt-32 pb-8 md:pb-0"
            style={{ backgroundImage: "url('/hero-bg3.jpg')" }}
        >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-blue-900/40"></div>
            

            {/* Content */}
            <div className="relative container mx-auto px-8 md:px-8 lg:px-12 xl:px-32 text-white">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">

                    {/* Left Side - Text Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
                            Protecting Businesses and Families Across 6 States
                        </h1>
                        
                        <p className="text-xl mb-8 max-w-2xl leading-relaxed" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)' }}>
                            Trusted insurance coverage for gas stations, restaurants, hotels, 
                            homeowners, and more. Get the protection you deserve.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-red-600 hover:bg-red-400 active:bg-red-800 text-white font-bold px-8 py-6 text-lg">
                                <Link href="/quote">
                                    Get a Free Quote
                                    <ArrowRight className="w-6 h-6"/>
                                </Link>
                            </Button>
                            
                            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-300 font-bold px-8 py-6 text-lg">
                                <Link href="tel:954-802-7561">
                                    <Phone className="w-5 h-5"/>
                                    Call: 954-802-7561
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Side - Trust Badges */}
                    <div className="flex flex-col gap-6 md:gap-8 bg-white/10 backdrop-blur-sm rounded-xl py-6 md:py-8 px-6 max-w-md mx-auto lg:mx-0 mt-8 lg:mt-0">
                        <div className="flex items-start justify-center gap-4">
                            <BriefcaseBusiness className="w-10 h-10 flex-shrink-0 mt-2"/>
                            <div>
                                <p className="text-3xl lg:text-4xl font-bold">20+</p>
                                <p className="text-blue-100 text-sm lg:text-lg">Years Experience</p>
                            </div>
                        </div>
                        <div className="flex items-start justify-center gap-4">
                            <ShieldUser className="w-10 h-10 flex-shrink-0 mt-2"/>
                            <div>
                                <p className="text-3xl lg:text-4xl font-bold">100+</p>
                                <p className="text-blue-100 text-sm lg:text-lg">Clients Protected</p>
                            </div>
                        </div>
                        <div className="flex items-start justify-center gap-4">
                            <Star className="w-10 h-10 flex-shrink-0 text-yellow-300 mt-2" fill="currentColor"/>
                            <div>
                                <p className="text-3xl lg:text-4xl font-bold">5-Star</p>
                                <p className="text-blue-100 text-sm lg:text-lg">Customer Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
