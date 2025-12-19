import {
        MapPin,
        ShieldCheck,
        Trophy,
        UserCheck,
        Zap,
        UsersRound,

       } from 'lucide-react'
       


// Creating data/topics of the Why Choose Us section
const reasons = [
    {
        icon: MapPin,
        title: "Nationwide Coverage",
        description: "Headquartered in Fort Lauderdale and serving clients across all 50 states — wherever you are, we've got you covered.",
    },
    {
        icon: ShieldCheck,
        title: "Independent Advantage",
        description: "We work for you, not the insurance companies. We shop 50+ A-rated carriers to find you the best rates.",
    },
    {
        icon: Trophy,
        title: "20+ Years Expertise",
        description: "Two decades of industry experience providing high-level guidance for complex commercial and personal insurance.",
    },
    {
        icon: UserCheck,
        title: "Personalized Service",
        description: "No 1-800 call centers here. You'll work directly with a dedicated agent who knows your name and your business.",
    },
    {
        icon: Zap,
        title: "Fast, Free Quotes",
        description: "We respect your time. Expect a customized insurance proposal within 24 hours with no obligation and no pressure.",
    },
    {
        icon: UsersRound, 
        title: "Top-Rated Carriers",
        description: "We only partner with the most stable, A-rated insurance companies to ensure your coverage is secure when it matters most.",
    },
]



export default function WhyChooseUs() {
    return (
        <section className="bg-white py-16 border-t border-slate-200">
            <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32">

                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-red-600 font-semibold tracking-wide uppercase mb-2">
                        Why Stars & Stripes
                    </p>
                                                                                   
                     <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">
                        The Difference Is Clear
                    </h2>

                    <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                    We're not just another insurance agency. Here's why clients nationwide trust us.
                    </p>
                </div>
                {/* Column Grid */}
                <div className="max-w-4xl mx-auto space-y-8">
                    {reasons.map((item, index) => (
                        <div 
                            key={index} 
                            className="flex flex-col md:flex-row items-center md:items-start gap-6 p-6"
                        >
                            {/* The Icon Box */}
                            <div className="flex-shrink-0 p-4">
                                <item.icon className="w-11 h-11 text-blue-900" />
                            </div>

                            {/* Topic and Explanation */}
                            <div className="text-center md:text-left">
                                <h3 className="text-xl font-extrabold text-blue-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 leading-relaxed font-medium">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}