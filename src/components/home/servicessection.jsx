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
    Wine,
    Hotel
} from 'lucide-react'




// Data for each service card - will be mapped to display insurance offerings
const services = [

    {
        icon: Building2,
        title: "Commercial Insurance",
        description: "Protect your business with comprehensive coverage for property, liability, and more.",
        color: "text-blue-600" // Business Blue

    },
    {
        icon: Fuel,
        title: "Gas Stations" ,
        description: "Specialized coverage for gas station owners and operators.",
        color: "text-red-600" // Personal/Urgent Red

    },
    {
        icon: Utensils,
        title: "Restaurants" ,
        description: "Customized insurance solutions for restaurants and food service businesses.",
        color: "text-blue-600"

    },
    {
        icon: Car,
        title: "Auto Insurance" ,
        description: "Coverage for personal and commercial vehicles to keep you on the road.",
        color: "text-red-600" 

    },
    {
        icon: House,
        title: "Homeowners Insurance",
        description: "Safeguard your home and belongings against unexpected events.",
        color: "text-red-600"

    },
    {
        icon: Wine,
        title: "Liquor Stores",
        description: "Specific liability and property coverage for liquor inventory and alcohol sales.",
        color: "text-red-600"

    },
    {
        icon: Store,
        title: "Shopping Centers",
        description: "Property and liability protection for strip malls, retail plazas, and building owners.",
        color: "text-blue-600" 
    },
    {
        icon: HardHat,
        title: "Workers Compensation",
        description: "Protect your employees and your business from workplace injuries.",
        color: "text-red-600"
    },
        {
        icon: Cigarette,
        title: "Smoke Shops" ,
        description: "Customized inventory and liability coverage for tobacco and vape retailers.",
        color: "text-red-600"
    },
    {
        icon: Church,
        title: "Churches",
        description: "Property and liability protection for places of worship and non-profit organizations.",
        color: "text-red-600"
    },
    {
        icon: ShoppingBasket,
        title: "Convenience Stores",
        description: "High-traffic liability and inventory theft protection for retail operations.",
        color: "text-red-600"
    },
    {
        icon: Hotel, // NEW SECTION
        title: "Hotels & Motels",
        description: "Tailored protection for the hospitality industry, covering property, guests, and liability.",
        color: "text-blue-600"
    },
    
]



export default function ServicesSection(){
    return(
        <section className="bg-white py-16">
            <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32">

                <h2 className="text-3xl md:text-5xl font-bold text-center text-blue-900 mb-4">
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
                        // Added 'group' for hover effects
                        // Using bg-slate-200 as you did, with a slightly darker border
                        className="group bg-slate-200 rounded-2xl p-8 border border-slate-300 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                    >
                        {/* The White Icon Box - This is the secret to making slate-200 look high-end */}
                        <div className="mb-6 p-4 bg-white shadow-sm w-fit rounded-xl group-hover:scale-110 transition-transform duration-300">
                            <service.icon className={`w-10 h-10 ${service.color}`}/>
                        </div>
                        
                        <h3 className="text-lg font-extrabold text-blue-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                            {service.title}
                        </h3>
                        
                        <p className="text-slate-700 leading-relaxed font-medium">
                            {service.description}
                        </p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    )
}