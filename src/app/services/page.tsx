import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
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

// DATA SECTIONS

const commercialServices = [
    {
        icon: Fuel,
        title: "Gas Station Insurance",
        description: "Running a gas station comes with unique risks — from underground storage tanks to high customer traffic. We provide comprehensive coverage designed specifically for fuel retailers, including convenience store operations, car washes, and repair services.",
        coverages: ["Property & Liability", "Tank & Pollution Coverage", "Business Interruption", "Equipment Breakdown", "Workers Compensation", "Commercial Auto"],
        idealFor: ["Gas stations with convenience stores", "Car wash facilities", "Stations with repair shops"],
        color: "text-red-600",
        bgColor: "bg-red-50"
    },
    {
        icon: Utensils,
        title: "Restaurant Insurance",
        description: "From food spoilage to customer injuries, restaurants face risks every day. Our tailored policies protect your investment, your employees, and your customers so you can focus on what you do best — serving great food.",
        coverages: ["Property & Liability", "Liquor Liability", "Food Spoilage Coverage", "Equipment Breakdown", "Workers Compensation", "Business Interruption"],
        idealFor: ["Full-service restaurants", "Fast food establishments", "Bars and nightclubs", "Catering companies"],
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
    {
        icon: Hotel,
        title: "Hotel & Motel Insurance",
        description: "The hospitality industry requires specialized coverage for guest safety, property protection, and liability concerns. We understand the unique challenges hotels and motels face and provide comprehensive solutions.",
        coverages: ["Property Coverage", "General Liability", "Guest Injury Protection", "Pool & Spa Liability", "Business Interruption", "Employee Theft"],
        idealFor: ["Hotels and motels", "Bed and breakfasts", "Extended stay properties", "Resort facilities"],
        color: "text-red-600",
        bgColor: "bg-red-50"
    },
    {
        icon: Store,
        title: "Shopping Center Insurance",
        description: "Protect your retail property investment with coverage designed for shopping centers and strip malls. We cover everything from building damage to tenant-related liability issues.",
        coverages: ["Building Coverage", "General Liability", "Parking Lot Liability", "Tenant Disputes", "Property Damage", "Business Income Loss"],
        idealFor: ["Strip malls", "Retail plazas", "Mixed-use properties", "Commercial landlords"],
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
    {
        icon: ShoppingBasket,
        title: "Convenience Store Insurance",
        description: "Convenience stores operate around the clock and face unique risks including theft, robbery, and high customer traffic. Our policies are designed to keep your business protected 24/7.",
        coverages: ["Property & Liability", "Theft & Robbery Coverage", "Employee Dishonesty", "Business Income", "Equipment Breakdown", "Workers Compensation"],
        idealFor: ["24-hour convenience stores", "Mini marts", "Corner stores", "Gas station c-stores"],
        color: "text-red-600",
        bgColor: "bg-red-50"
    },
    {
        icon: Wine,
        title: "Liquor Store Insurance",
        description: "Selling alcohol comes with specific liability concerns. We provide specialized coverage that protects your inventory, your business, and addresses the unique risks of alcohol retail.",
        coverages: ["Liquor Liability", "Inventory Protection", "Theft Coverage", "Property Damage", "General Liability", "Business Interruption"],
        idealFor: ["Liquor stores", "Wine shops", "Beer distributors", "Alcohol retailers"],
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
    {
        icon: Cigarette,
        title: "Smoke Shop Insurance",
        description: "Tobacco and vape retailers need coverage that addresses product liability, inventory protection, and the specific regulations of the industry. We've got you covered.",
        coverages: ["Property & Liability", "Product Liability", "Inventory Coverage", "Theft Protection", "Business Income", "Equipment Coverage"],
        idealFor: ["Tobacco shops", "Vape stores", "Cigar lounges", "Smoke accessory retailers"],
        color: "text-red-600",
        bgColor: "bg-red-50"
    },
    {
        icon: Church,
        title: "Church Insurance",
        description: "Places of worship need protection for their property, their congregation, and their community activities. We provide compassionate coverage designed for religious organizations.",
        coverages: ["Property Coverage", "General Liability", "Directors & Officers", "Event Coverage", "Volunteer Coverage", "Vehicle Coverage"],
        idealFor: ["Churches and temples", "Mosques and synagogues", "Religious schools", "Non-profit organizations"],
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
]

const personalServices = [
    {
        icon: Home,
        title: "Homeowners Insurance",
        description: "Your home is your biggest investment. Protect it with comprehensive coverage that shields you from storms, theft, liability, and the unexpected. We'll help you find the right policy for your needs and budget.",
        coverages: ["Dwelling Coverage", "Personal Property", "Liability Protection", "Hurricane Coverage", "Flood Insurance", "Additional Living Expenses"],
        idealFor: ["Homeowners", "Condo owners", "Landlords", "First-time buyers"],
        color: "text-red-600",
        bgColor: "bg-red-50"
    },
    {
        icon: Car,
        title: "Auto Insurance",
        description: "Whether you need personal auto coverage or a commercial fleet policy, we'll find you the best rates from top-rated carriers. Stay protected on the road without breaking the bank.",
        coverages: ["Liability Coverage", "Collision & Comprehensive", "Uninsured Motorist", "Medical Payments", "Rental Reimbursement", "Roadside Assistance"],
        idealFor: ["Personal vehicles", "Commercial fleets", "Rideshare drivers", "Classic cars"],
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
]

const additionalServices = [
    {
        icon: HardHat,
        title: "Workers Compensation",
        description: "Protect your employees and your business from the financial impact of workplace injuries. Workers comp coverage is required in most states and essential for any business with employees.",
        coverages: ["Medical Expenses", "Lost Wages", "Disability Benefits", "Rehabilitation Costs", "Legal Protection", "Death Benefits"],
        idealFor: ["Small businesses", "Contractors", "Restaurants", "Retail stores"],
        color: "text-red-600",
        bgColor: "bg-red-50"
    },
    {
        icon: Building2,
        title: "Commercial Insurance",
        description: "Every business has unique risks. We offer comprehensive commercial packages that can be customized to fit your specific industry and needs. Let us build a policy that protects your livelihood.",
        coverages: ["General Liability", "Property Coverage", "Business Interruption", "Professional Liability", "Cyber Liability", "Umbrella Coverage"],
        idealFor: ["Small businesses", "Startups", "Professional services", "Contractors"],
        color: "text-blue-600",
        bgColor: "bg-blue-50"
    },
]

// COMPONENT: Single Service Section
// This function creates the design for ONE single service row.
// Instead of copy-pasting this HTML 12 times, I will write it in one entire file.
// The main function sends data (Title, Icon, Description) into this "template".
function ServiceSection({ service }: { service: typeof commercialServices[0] }) {
    return (
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 items-start py-14 border-b border-slate-300 last:border-b-0">

            {/* Icon Side - Fixed Width */}
            <div className="flex-shrink-0 pt-2">
                <div className={`${service.bgColor} w-20 h-20 lg:w-24 lg:h-24 rounded-2xl flex items-center justify-center shadow-sm`}>
                    <service.icon className={`w-10 h-10 lg:w-14 lg:h-14 ${service.color}`} />
                </div>
            </div>


            {/* Content Side of the Information for each Insurance Type */}
            <div className="flex-grow">
                
                {/* Header */}
                <h3 className="text-2xl lg:text-2xl font-extrabold text-blue-900 mb-4">
                    {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-slate-600 text-lg leading-relaxed mb-8 max-w-4xl">
                    {service.description}
                </p>


                {/* Details Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-8">
                    {/* List 1: Coverages */}
                    <div>
                        <h4 className="font-bold text-lg text-blue-900 mb-4 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-red-600 rounded-full"></span>
                        What's Covered
                        </h4>

                        <ul className="space-y-3">
                            {service.coverages.map((coverage, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-700">
                                    <span className="mt-2 w-1.5 h-1.5 bg-slate-500 rounded-full flex-shrink-0"></span>
                                    {coverage}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* List 2: Ideal For Part*/}
                    <div>
                        <h4 className="font-bold text-lg text-blue-900 mb-4 flex items-center gap-2">
                            <span className="w-1.5 h-6 bg-blue-600 rounded-full"></span>
                            Ideal For
                        </h4>
                        <ul className="space-y-3">
                            {service.idealFor.map((item, index) => (
                                <li key={index} className="flex items-start gap-3 text-slate-700">
                                    <span className="mt-2 w-1.5 h-1.5 bg-slate-500 rounded-full flex-shrink-0"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* CTA Button - Specific to the service */}
                <Button asChild className="bg-red-600 hover:bg-red-400 active:bg-red-800 border-2 border-red-600 text-white font-bold py-6 px-6 text-base rounded-xl transition-all">
                    <Link href="/quote">
                        Get a {service.title.replace(' Insurance', '')} Quote
                    </Link>
                </Button>      
            </div>
        </div>
    )
}




// MAIN PAGE COMPONENT
export default function ServicesPage() {
    return (
        <main>
            {/* Hero Banner */}
            <section className="bg-blue-900 py-16">
                <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32 text-center">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                        Our Services
                    </h1>
                    <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                        Detailed insurance solutions tailored to protect your business and family. We shop 50+ carriers to find you the best coverage at the best price.
                    </p>
                </div>
            </section>


            {/* Commercial Insurance Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32">
                    
                    {/* Section Header */}
                    <div className="mb-10 border-l-8 border-red-600 pl-3">
                        <p className="text-slate-500 font-bold tracking-wide uppercase mb-1">
                            Business Protection
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
                            Commercial Insurance
                        </h2>
                    </div>

                    {/* Services List */}
                    <div>
                        {commercialServices.map((service, index) => (
                            <ServiceSection key={index} service={service} />
                        ))}
                    </div>
                </div>
            </section>



            {/* Personal Insurance Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32">
                    
                    {/* Section Header */}
                    <div className="mb-10 border-l-8 border-blue-600 pl-6">
                        <p className="text-slate-500 font-bold tracking-wide uppercase mb-1">
                            Personal Protection
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
                            Personal Insurance
                        </h2>
                    </div>

                    {/* Services List */}
                    <div>
                        {personalServices.map((service, index) => (
                            <ServiceSection key={index} service={service} />
                        ))}
                    </div>
                </div>
            </section>


            {/* Additional Coverage Section */}
            <section className="bg-white py-20">
                <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32">
                    
                    {/* Section Header */}
                    <div className="mb-10 border-l-8 border-slate-400 pl-6">
                        <p className="text-slate-500 font-bold tracking-wide uppercase mb-1">
                            More Options
                        </p>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-blue-900">
                            Additional Coverage
                        </h2>
                    </div>

                    {/* Services List */}
                    <div>
                        {additionalServices.map((service, index) => (
                            <ServiceSection key={index} service={service} />
                        ))}
                    </div>
                </div>
            </section>



            {/* Final CTA */}
            <section className="bg-blue-900 py-24">
                <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32 text-center">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
                        Not Sure What Coverage You Need?
                    </h2>
                    <p className="text-xl text-blue-200 mb-10 max-w-2xl mx-auto">
                        Give us a call. We'll help you understand your options and find the perfect policy — no pressure, no obligation.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <Button asChild size="lg" className="bg-red-600 hover:bg-red-400 active:bg-red-800 text-white font-bold text-xl px-10 py-8 rounded-2xl shadow-lg shadow-blue-900/50">
                            <Link href="/quote">Get a Free Quote</Link>
                        </Button>
                        <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-bold text-xl px-10 py-8 rounded-2xl shadow-lg shadow-blue-900/50">
                            <Link href="tel:954-802-7561" className="flex items-center gap-3">
                                <Phone className="w-6 h-6" />
                                Call: 954-802-7561
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

        </main>
    )
}
