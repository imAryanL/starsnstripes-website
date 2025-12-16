import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function HeroSection() {
    return (
        <section 
            className="relative bg-cover bg-center bg-no-repeat py-20 md:py-32"
            style={{ backgroundImage: "url('/hero-bg3.jpg')" }}
        >
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-blue-900/40"></div>
            








            {/* Content */}
            <div className="relative container mx-auto px-8 md:px-8 lg:px-12 xl:px-32 text-white">
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    
                    {/* Left Side - Text Content */}
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{ textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)' }}>
                            Protecting South Florida Businesses and Families
                        </h1>
                        
                        <p className="text-xl mb-8 max-w-2xl" style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.6)' }}>
                            Trusted insurance coverage for gas stations, restaurants, hotels, 
                            homeowners, and more. Get the protection you deserve.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="bg-red-600 hover:bg-red-400 active:bg-red-800 text-white font-bold">
                                <Link href="/quote">Get a Free Quote</Link>
                            </Button>
                            
                            <Button asChild size="lg" className="bg-white text-black hover:bg-gray-300 font-bold">
                                <Link href="tel:954-802-7561">Call: 954-802-7561</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Side - Trust Badges */}
                    <div className="lg:flex flex-col gap-8 bg-white/10 backdrop-blur-sm rounded-xl py-8 max-w-md lg:mx-0">
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl lg:text-5xl font-bold">20+</p>
                            <p className="text-blue-100">Years Experience</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl lg:text-5xl font-bold">500+</p>
                            <p className="text-blue-100">Clients Protected</p>
                        </div>
                        <div className="text-center">
                            <p className="text-3xl md:text-4xl lg:text-5xl font-bold">5-Star</p>
                            <p className="text-blue-100">Customer Service</p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    )
}