import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Shield, UserCheck, MapPin, Heart } from 'lucide-react'

const values = [
    {
        icon: Shield,
        title: "Integrity",
        description: "Honest advice and transparent pricing. No hidden fees, no surprises.",
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
    {
        icon: UserCheck,
        title: "Personal Service",
        description: "Work directly with real people who know your name, not a 1-800 call center.",
        color: "text-red-600",
        bgColor: "bg-red-50"
    },
    {
        icon: MapPin,
        title: "Local Expertise",
        description: "With nationwide expertise, we understand regional insurance needs across America.",
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
    {
        icon: Heart,
        title: "Client First",
        description: "Your protection is our priority. We work for you, not the insurance companies.",
        color: "text-red-600",
        bgColor: "bg-red-50"
    },
]

export default function AboutPage() {
    return (
        <main>
            {/* Hero Banner */}
            <section className="bg-blue-900 py-16">
                <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        About Stars & Stripes Insurance
                    </h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Protecting businesses and families nationwide for over 20 years.
                    </p>
                </div>
            </section>

            {/* Our Story / Meet Amir */}
            <section className="bg-white py-12">
                <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        
                        {/* Photo */}
                        <div className="flex justify-center">
                            <div className="w-72 h-72 md:w-80 md:h-80 bg-slate-200 rounded-2xl flex items-center justify-center">
                                {/* Placeholder - replace with actual image later */}
                                <p className="text-slate-500 text-center px-4">
                                    Photo of Amir<br />Coming Soon
                                </p>
                                {/* When you have the image, use this instead:
                                <Image 
                                    src="/amir.jpg" 
                                    alt="Amir Lakhani" 
                                    width={320} 
                                    height={320}
                                    className="rounded-2xl object-cover"
                                />
                                */}
                            </div>
                        </div>

                        {/* Bio */}
                        <div>
                            <p className="text-red-600 font-semibold tracking-wide uppercase mb-2">
                                Our Story
                            </p>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
                                Meet Amir Lakhani
                            </h2>
                            <p className="text-lg text-slate-500 mb-4">
                                Founder & Principal Agent
                            </p>
                            
                            <blockquote className="border-l-4 border-red-600 pl-4 italic text-slate-700 mb-6">
                                "At Stars & Stripes, we believe insurance should be personal. You're not just a policy number — you're a neighbor."
                            </blockquote>
                            
                            <p className="text-slate-600 leading-relaxed mb-4">
                                With over 20 years of experience in the insurance industry, Amir founded Stars & Stripes Insurance to provide businesses and families nationwide with the personalized service they deserve.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-4">
                                He specializes in commercial insurance for gas stations, restaurants, hotels, and more. Unlike big corporations, Amir works directly with every client to understand their unique needs and find the right coverage at the best price.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                When you call Stars & Stripes, you're not getting a call center — you're getting a trusted advisor who genuinely cares about protecting what matters most to you.
                            </p>
                        </div>

                    </div>
                </div>
            </section>

            {/* Our Values */}
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32">
                    
                    {/* Header */}
                    <div className="text-center mb-16">
                        <p className="text-red-600 font-semibold tracking-wide uppercase mb-2">
                            What We Stand For
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
                            Our Values
                        </h2>
                        <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                            The principles that guide everything we do.
                        </p>
                    </div>

                    {/* Values Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div 
                                key={index}
                                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className={`${value.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                                    <value.icon className={`w-7 h-7 ${value.color}`} />
                                </div>
                                <h3 className="text-xl font-bold text-blue-900 mb-2">{value.title}</h3>
                                <p className="text-slate-600">{value.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-900 py-20">
                <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32 text-center">
                    
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Ready to Work With Us?
                    </h2>
                    <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
                        Let's find the perfect coverage for your business or family.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-6">
                            <Link href="/quote">Get a Free Quote</Link>
                        </Button>
                        <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-bold text-lg px-8 py-6">
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>

                </div>
            </section>
        </main>
    )
}