import Link from 'next/link'
import { Button } from '@/components/ui/button'





export default function HeroSection() {
    return (
        <section className="bg-blue-900 text-white py-20">
            <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32">
                <h1 className="text-4xl md:text5x1 font-bold mb-4">
                    Protecting South Businesses and Families
                </h1>
                
                <p className="text-xl text-blue-200 mb-8 max-w-2xl">
                    Trusted insurance coverage for gas stations, restaurants, hotels, 
                    homeowners, and more. Get the protection you deserve.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="bg-red-600 hover:bg-orange-600 text-white font-bold">
                        <Link href="/quote">Get a Free Quote</Link>
                    </Button>
                    
                    <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-300 font-bold">
                        <Link href="tel:954-802-7561">Call: 954-802-7561</Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}