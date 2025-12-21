import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone, ArrowRight } from 'lucide-react'

export default function FinalCTA() {
    return (
        <section className="bg-blue-900 py-20">
            <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32">
                
                <div className="text-center max-w-3xl mx-auto">
                    
                    {/* Headline */}
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                        Ready to Protect What Matters?
                    </h2>
                    
                    {/* Subtext */}
                    <p className="text-xl text-blue-200 mb-10">
                        Get your free, no-obligation quote in minutes. Our expert team is standing by to help you find the perfect coverage.
                    </p>
                    
                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-red-600 hover:bg-red-400 active:bg-red-800 text-white font-bold text-lg px-8 py-6">
                            <Link href="/quote" className="flex items-center gap-2">
                                Get a Free Quote
                                <ArrowRight className="w-5 h-5"/>
                            </Link>
                        </Button>
                        
                        <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-bold text-lg px-8 py-6">
                            <Link href="tel:954-802-7561" className="flex items-center gap-2">
                                <Phone className="w-5 h-5"/>
                                Call: 954-802-7561
                            </Link>
                        </Button>
                    </div>
                    
                </div>
                
            </div>
        </section>
    )
}