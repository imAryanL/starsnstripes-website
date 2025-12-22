import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
    Fuel, 
    Utensils, 
    Hotel, 
    Store, 
    ShoppingBasket, 
    Wine, 
    Cigarette, 
    Church,
    Home,
    Car,
    HardHat,
    Building2
} from 'lucide-react'

const commercialServices = [
    {
        icon: Fuel,
        title: "Gas Station Insurance",
        description: "Complete protection for gas station owners and operators.",
        coverages: ["Property & Liability", "Tank & Pump Coverage", "Business Interruption", "Workers Compensation"],
        color: "text-red-600",
        bgColor: "bg-red-50"
    },
    {
        icon: Utensils,
        title: "Restaurant Insurance",
        description: "Tailored coverage for restaurants and food service businesses.",
        coverages: ["Property & Liability", "Liquor Liability", "Food Spoilage", "Equipment Breakdown"],
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
    {
        icon: Hotel,
        title: "Hotel & Motel Insurance",
        description: "Comprehensive protection for the hospitality industry.",
        coverages: ["Property & Liability", "Guest Injury Coverage", "Business Interruption", "Pool & Spa Liability"],
        color: "text-red-600",
        bgColor: "bg-red-50"
    },
    {
        icon: Store,
        title: "Shopping Center Insurance",
        description: "Property and liability protection for retail plazas and strip malls.",
        coverages: ["Building Coverage", "General Liability", "Tenant Disputes", "Parking Lot Liability"],
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
    {
        icon: ShoppingBasket,
        title: "Convenience Store Insurance",
        description: "Coverage designed for high-traffic retail operations.",
        coverages: ["Property & Liability", "Theft Protection", "Employee Dishonesty", "Business Income"],
        color: "text-red-600",
        bgColor: "bg-red-50"
    },
    {
        icon: Wine,
        title: "Liquor Store Insurance",
        description: "Specialized coverage for liquor retailers and distributors.",
        coverages: ["Liquor Liability", "Inventory Protection", "Theft Coverage", "Property Damage"],
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
    {
        icon: Cigarette,
        title: "Smoke Shop Insurance",
        description: "Protection for tobacco and vape retail businesses.",
        coverages: ["Property & Liability", "Inventory Coverage", "Product Liability", "Theft Protection"],
        color: "text-red-600",
        bgColor: "bg-red-50"
    },
    {
        icon: Church,
        title: "Church Insurance",
        description: "Coverage for places of worship and religious organizations.",
        coverages: ["Property Coverage", "Liability Protection", "Directors & Officers", "Event Coverage"],
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
]

const personalServices = [
    {
        icon: Home,
        title: "Homeowners Insurance",
        description: "Protect your home and belongings from unexpected events.",
        coverages: ["Dwelling Coverage", "Personal Property", "Liability Protection", "Hurricane Coverage"],
        color: "text-red-600",
        bgColor: "bg-red-50"
    },
    {
        icon: Car,
        title: "Auto Insurance",
        description: "Coverage for personal and commercial vehicles.",
        coverages: ["Liability Coverage", "Collision & Comprehensive", "Uninsured Motorist", "Rental Reimbursement"],
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
]

const additionalServices = [
    {
        icon: HardHat,
        title: "Workers Compensation",
        description: "Protect your employees and your business from workplace injuries.",
        coverages: ["Medical Expenses", "Lost Wages", "Disability Benefits", "Legal Protection"],
        color: "text-red-600",
        bgColor: "bg-red-50"
    },
    {
        icon: Building2,
        title: "Commercial Insurance",
        description: "General business coverage for various industries.",
        coverages: ["General Liability", "Property Coverage", "Business Interruption", "Professional Liability"],
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
]

function ServiceCard({ service }: { service: typeof commercialServices[0] }) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col">
            {/* Icon */}
            <div className={`${service.bgColor} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
            </div>
            
            {/* Title & Description */}
            <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
            <p className="text-slate-600 mb-4">{service.description}</p>
            
            {/* Coverage List */}
            <ul className="space-y-2 mb-6 flex-grow">
                {service.coverages.map((coverage, index) => (
                    <li key={index} className="flex items-center gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                        {coverage}
                    </li>
                ))}
            </ul>
            
            {/* Button */}
            <Button asChild className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold">
                <Link href="/quote">Get a Quote</Link>
            </Button>
        </div>
    )
}

export default function ServicesPage() {
    return (
        <main>
            {/* Hero Banner */}
            <section className="bg-blue-900 py-16">
                <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Our Services
                    </h1>
                    <p className="text-xl text-blue-200 max-w-2xl mx-auto">
                        Comprehensive insurance solutions tailored to protect your business and family.
                    </p>
                </div>
            </section>

            {/* Commercial Insurance */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32">
                    <div className="text-center mb-12">
                        <p className="text-red-600 font-semibold tracking-wide uppercase mb-2">
                            Business Protection
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
                            Commercial Insurance
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Specialized coverage for businesses across various industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {commercialServices.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Personal Insurance */}
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32">
                    <div className="text-center mb-12">
                        <p className="text-red-600 font-semibold tracking-wide uppercase mb-2">
                            Personal Protection
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
                            Personal Insurance
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Protect what matters most — your home, your car, and your family.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        {personalServices.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* Additional Coverage */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32">
                    <div className="text-center mb-12">
                        <p className="text-red-600 font-semibold tracking-wide uppercase mb-2">
                            More Coverage Options
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900 mb-4">
                            Additional Coverage
                        </h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">
                            Extra protection to keep your business fully covered.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        {additionalServices.map((service, index) => (
                            <ServiceCard key={index} service={service} />
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-blue-900 py-20">
                <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32 text-center">
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Not Sure What Coverage You Need?
                    </h2>
                    <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
                        Our experts will help you find the perfect policy for your unique situation.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-red-600 hover:bg-red-500 text-white font-bold text-lg px-8 py-6">
                            <Link href="/quote">Get a Free Quote</Link>
                        </Button>
                        <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-bold text-lg px-8 py-6">
                            <Link href="tel:954-802-7561">Call: 954-802-7561</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </main>
    )
}