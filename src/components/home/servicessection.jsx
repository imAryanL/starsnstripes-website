import Link from 'next/link'
import {
    Fuel, 
    Building2, 
    Utensils, 
    Car, 
    House,
    HardHat,
    Store,
    Cigarette,
    Church,
    ShoppingBasket,
    Wine
} from 'lucide-react'




// Data for each service card - will be mapped to display insurance offerings
const services = [

    {
        icon: Building2,
        title: "Commercial Insurance",
        description: "Protect your business with comprehensive coverage for property, liability, and more."

    },
    {
        icon: Fuel,
        title: "Gas Stations" ,
        description: "Specialized coverage for gas station owners and operators." 

    },
    {
        icon: Utensils,
        title: "Restaurants" ,
        description: "Customized insurance solutions for restuarants and food service businesses "

    },
    {
        icon: Car,
        title: "Auto Insurance" ,
        description: "Coverage for personal and commercial vehicles to keep you on the road."

    },
    {
        icon: House,
        title: "Homeowners Insurance",
        description: "Safeguard your home and belongings against unexpected events."

    },
    {
        icon: Wine,
        title: "Liquor Stores",
        description: "Specific liability and property coverage for liquor inventory and alcohol sales."

    },
    {
        icon: Store,
        title: "Shopping Centers",
        description: "Property and liability protection for strip malls, retail plazas, and building owners."
    },
    {
        icon: HardHat,
        title: "Workers Compensation",
        description: "Protect your employees and your business from workplace injuries."
    },
        {
        icon: Cigarette,
        title: "Smoke Shops" ,
        description: "Customized inventory and liability coverage for tobacco and vape retailers.",

    },
    {
        icon: Church,
        title: "Churches",
        description: "Property and liability protection for places of worship and non-profit organizations.",

    },
    {
        icon: ShoppingBasket,
        title: "Convenience Stores",
        description: "High-traffic liability and inventory theft protection for retail operations.",

    }
    
]



export default function ServicesSection(){
    return(
        <section className="bg-white py-16">
            <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32">

                <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-4">
                    What We Cover
                </h2>

                <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Comprehensive insurance solutions for businesses and families across South Florida.
                </p>

                {/* Service Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div 
                            key={index}
                            className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                        >
                            <service.icon className="w-12 h-12 text-blue-900 mb-4" />
                            <h3 className="text-xl font-bold text-blue-900 mb-2">{service.title}</h3>
                            <p className="text-gray-600">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}