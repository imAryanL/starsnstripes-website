import { Star } from 'lucide-react'

const reviews = [
    {
        name: "Imran A.",
        role: "Commercial Client",
        location: "Houston, TX",
        quote: "I was amazed at the prompt response I got and how quickly the claim was processed. I will highly recommend Stars and Stripes Insurance to everyone!!",
    },
    {
        name: "Dennis R.",
        role: "Gas Station Owner",
        location: "Miami, FL",
        quote: "I came across Stars and Stripes through a friend and he recommended me for my Gas Station. It was amazing service provided by the staff, very friendly and helpful.",
    },
    {
        name: "Alen S.",
        role: "Motel Owner",
        location: "Atlanta, GA",
        quote: "If you are looking for insurance for a motel, this is the place to be. Excellent staff and hospitality. I would grade their service 5 stars.",
    }
]

export default function Testimonials() {
    return (
        <section className="bg-white py-16 border-t border-slate-200">
            <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-red-600 font-semibold tracking-wide uppercase mb-2">
                    Client Success Stories              
                    </p>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-blue-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        Join the hundreds of business owners across FL, TX, SC, OK, CO, and GA who trust Stars & Stripes for their protection.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow">
                            <div>
                                {/* 5 Star Rating matching */}
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-slate-700 italic leading-relaxed mb-8">
                                    "{review.quote}"
                                </p>
                            </div>

                            <div className="border-t border-slate-100 pt-6">
                                <p className="font-bold text-blue-900 text-lg">{review.name}</p>
                                <div className="flex justify-between items-center mt-1">
                                    <p className="text-sm text-red-600 font-semibold uppercase tracking-wider">
                                        {review.role}
                                    </p>
                                    <p className="text-xs text-slate-400 font-bold uppercase">
                                        {review.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}