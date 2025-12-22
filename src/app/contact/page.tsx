import { Mail, MapPin, Phone, Clock, Send } from 'lucide-react'
import { Button } from '@/components/ui/button'


export default function ContactPage() {
    return (
        <main>
            {/* 1. Header Section - Matching the About Page */}
            <section className="bg-blue-900 py-16 text-center text-white">
                <div className="container mx-auto px-8">
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Whether you are in Florida or anywhere else in the country, our expert agents are ready to help. Reach out for a quote or support.
                    </p>
                </div>
            </section>

            {/* 2. Content Grid */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-8 md:px-12 lg:px-32">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        
                        {/* LEFT COLUMN: Contact Info */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-extrabold text-blue-900 mb-6">
                                    Contact Information
                                </h2>
                                <p className="text-slate-600 text-lg mb-8">
                                    Have a question about a policy? Need a certificate of insurance? We are here to help during business hours.
                                </p>
                            </div>

                            {/* Info Cards */}
                            <div className="space-y-6">
                                {/* Phone */}
                                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                                    <div className="bg-blue-50 p-3 rounded-full">
                                        <Phone className="w-6 h-6 text-blue-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-blue-900 text-lg">Phone</h3>
                                        <p className="text-slate-600 mb-1">Speak to a live agent.</p>
                                        <a href="tel:9548027561" className="text-red-600 font-bold hover:underline text-lg">
                                            954-802-7561
                                        </a>
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                                    <div className="bg-blue-50 p-3 rounded-full">
                                        <Mail className="w-6 h-6 text-blue-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-blue-900 text-lg">Email</h3>
                                        <p className="text-slate-600 mb-1">For quotes and support.</p>
                                        <a href="mailto:amir@starnstripesins.com" className="text-red-600 font-bold hover:underline text-lg">
                                            amir@starnstripesins.com
                                        </a>
                                    </div>
                                </div>

                                {/* Office */}
                                <div className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-slate-200">
                                    <div className="bg-blue-50 p-3 rounded-full">
                                        <MapPin className="w-6 h-6 text-blue-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-blue-900 text-lg">Headquarters</h3>
                                        <p className="text-slate-600">
                                            2275 W. State Rd 84, Suite 105<br />
                                            Fort Lauderdale, FL 33312
                                        </p>
                                        <p className="text-sm text-slate-400 mt-2 font-medium flex items-center gap-1">
                                            <Clock className="w-4 h-4" /> Mon-Fri: 9AM — 4PM EST
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Contact Form */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-200">
                            <h3 className="text-2xl font-bold text-blue-900 mb-6">
                                Send Us a Message
                            </h3>
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            First Name
                                        </label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Bob"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                                            Last Name
                                        </label>
                                        <input 
                                            type="text" 
                                            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Roberts"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Email
                                    </label>
                                    <input 
                                        type="email" 
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="bobroberts@example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Phone
                                    </label>
                                    <input 
                                        type="tel" 
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="(555) 555-5555"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Message
                                    </label>
                                    <textarea 
                                        rows={4}
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>

                                <Button 
                                    type="submit" 
                                    className="w-full bg-red-600 hover:bg-red-400 active:bg-red-800 text-white font-bold py-6 text-lg cursor-pointer"
                                >
                                    Send Message
                                </Button>
                            </form>
                        </div>

                    </div>
                </div>
            </section>
        </main>
    )
}