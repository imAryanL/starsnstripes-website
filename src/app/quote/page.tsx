"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
    Phone, 
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



export default function QuotePage() {
    
    // Tracks the selected insurance type from the dropdown
    const [insuranceType, setInsuranceType] = useState("")
    
    
    return (
        <main>
            {/* Hero Banner */}
            <section className="bg-blue-900 py-12">
                <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32 text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
                        Get a Free Quote
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Tell us about your insurance needs and our team will get back to you within 24 hours.
                    </p>
                </div>
            </section>

            {/* Quote Form Section */}
            <section className="bg-slate-50 py-20">
                <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32">
                    <div className="max-w-2xl mx-auto bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-slate-200">
                        {/* Form Header */}
                        <div className="mb-8">
                            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
                                Request a Quote
                            </h2>
                            <p className="text-slate-600">
                                Fill out the form below and we'll contact you with a customized quote.
                            </p>
                        </div>


                         {/* Form */}
                        <form className="space-y-6">

                            
                            {/* Name Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        First Name <span className="text-red-600">*</span>
                                    </label>
                                    <input 
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Susan"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        Last Name <span className="text-red-600">*</span>
                                    </label>
                                    <input 
                                        type="text"
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="Roberts"
                                    />
                                </div>
                            </div>


                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Email <span className="text-red-600">*</span>
                                </label>
                                <input 
                                    type="email"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="susanroberts@example.com"
                                />
                            </div>


                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Phone <span className="text-red-600">*</span>
                                </label>
                                <input 
                                    type="tel"
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="(555) 555-5555"
                                />
                            </div>



                            {/* Insurance Type Dropdown */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Insurance Type <span className="text-red-600">*</span>
                                </label>
                                <select 
                                    required
                                    value={insuranceType}
                                    onChange={(e) => setInsuranceType(e.target.value)}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer"
                                >
                                    <option value="">Select insurance type...</option>
                                    <option value="Gas Station">Gas Station</option>
                                    <option value="Restaurant">Restaurant</option>
                                    <option value="Hotel / Motel">Hotel / Motel</option>
                                    <option value="Shopping Center">Shopping Center</option>
                                    <option value="Convenience Store">Convenience Store</option>
                                    <option value="Liquor Store">Liquor Store</option>
                                    <option value="Smoke Shop">Smoke Shop</option>
                                    <option value="Church">Church</option>
                                    <option value="Homeowners">Homeowners</option>
                                    <option value="Auto">Auto</option>
                                    <option value="Workers Compensation">Workers Compensation</option>
                                    <option value="Commercial Insurance">Commercial Insurance</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>





                            {/* ============ DYNAMIC FIELDS ============ */}

                            {/* Gas Station Fields */}
                            {insuranceType === "Gas Station" && ( 
                                <div className="bg-red-50 p-6 rounded-xl border border-red-200 space-y-4">
                                    <h4 className="font-bold text-red-800 flex items-center gap-2">
                                        <Fuel className="w-5 h-5" /> Gas Station Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Annual Gallons Sold</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="e.g. 1,000,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Convenience Store Sales ($)</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="e.g. $500,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you have a Car Wash?</label>
                                            <select className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">24 Hour Operation?</label>
                                            <select className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}




                            {/* Restaurant Fields */}
                            {insuranceType === "Restaurant" && (
                                <div className="bg-orange-50 p-6 rounded-xl border border-orange-200 space-y-4">
                                    <h4 className="font-bold text-orange-800 flex items-center gap-2">
                                        <Utensils className="w-5 h-5" /> Restaurant Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Annual Food Sales ($)</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="e.g. $800,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Annual Alcohol Sales ($)</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="e.g. $200,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Number of Employees</label>
                                            <input type="number" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="e.g. 15" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you serve alcohol?</label>
                                            <select className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}




                            {/* Hotel / Motel Fields */}
                            {insuranceType === "Hotel / Motel" && (
                                <div className="bg-blue-50 p-6 rounded-xl border border-blue-200 space-y-4">
                                    <h4 className="font-bold text-blue-800 flex items-center gap-2">
                                        <Hotel className="w-5 h-5" /> Hotel / Motel Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Number of Rooms</label>
                                            <input type="number" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. 50" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Number of Buildings</label>
                                            <input type="number" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. 2" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you have a Pool?</label>
                                            <select className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you have a Restaurant?</label>
                                            <select className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}




                            {/* Shopping Center Fields */}
                            {insuranceType === "Shopping Center" && (
                                <div className="bg-purple-50 p-6 rounded-xl border border-purple-200 space-y-4">
                                    <h4 className="font-bold text-purple-800 flex items-center gap-2">
                                        <Store className="w-5 h-5" /> Shopping Center Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Total Square Footage</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="e.g. 25,000 sq ft" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Number of Tenants</label>
                                            <input type="number" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="e.g. 8" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Year Built</label>
                                            <input type="number" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="e.g. 1995" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you have a Parking Lot?</label>
                                            <select className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}




                            {/* Convenience Store Fields */}
                            {insuranceType === "Convenience Store" && (
                                <div className="bg-green-50 p-6 rounded-xl border border-green-200 space-y-4">
                                    <h4 className="font-bold text-green-800 flex items-center gap-2">
                                        <ShoppingBasket className="w-5 h-5" /> Convenience Store Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Annual Sales ($)</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="e.g. $500,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you sell Gas?</label>
                                            <select className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">24 Hour Operation?</label>
                                            <select className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you sell Alcohol?</label>
                                            <select className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}




                            {/* Liquor Store Fields */}
                            {insuranceType === "Liquor Store" && (
                                <div className="bg-amber-50 p-6 rounded-xl border border-amber-200 space-y-4">
                                    <h4 className="font-bold text-amber-800 flex items-center gap-2">
                                        <Wine className="w-5 h-5" /> Liquor Store Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Annual Sales ($)</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="e.g. $600,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Inventory Value ($)</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="e.g. $100,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Number of Employees</label>
                                            <input type="number" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="e.g. 5" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Security System?</label>
                                            <select className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}



                            {/* Smoke Shop Fields */}
                            {insuranceType === "Smoke Shop" && (
                                <div className="bg-slate-100 p-6 rounded-xl border border-slate-300 space-y-4">
                                    <h4 className="font-bold text-slate-800 flex items-center gap-2">
                                        <Cigarette className="w-5 h-5" /> Smoke Shop Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Annual Sales ($)</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500" placeholder="e.g. $300,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Inventory Value ($)</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500" placeholder="e.g. $50,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you sell Vape Products?</label>
                                            <select className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you sell CBD Products?</label>
                                            <select className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}



                            {/* Church Fields */}
                            {insuranceType === "Church" && (
                                <div className="bg-indigo-50 p-6 rounded-xl border border-indigo-200 space-y-4">
                                    <h4 className="font-bold text-indigo-800 flex items-center gap-2">
                                        <Church className="w-5 h-5" /> Church Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Building Square Footage</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. 10,000 sq ft" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Average Weekly Attendance</label>
                                            <input type="number" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. 200" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you have a School?</label>
                                            <select className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you have a Daycare?</label>
                                            <select className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            )}




                            {/* Homeowners Fields */}
                            {insuranceType === "Homeowners" && (
                                <div className="bg-teal-50 p-6 rounded-xl border border-teal-200 space-y-4">
                                    <h4 className="font-bold text-teal-800 flex items-center gap-2">
                                        <Home className="w-5 h-5" /> Home Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Home Square Footage</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="e.g. 2,500 sq ft" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Year Built</label>
                                            <input type="number" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="e.g. 2005" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you have a Pool?</label>
                                            <select className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Roof Age (years)</label>
                                            <input type="number" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="e.g. 10" />
                                        </div>
                                    </div>
                                </div>
                            )}




                            {/* Auto Fields */}
                            {insuranceType === "Auto" && (
                                <div className="bg-sky-50 p-6 rounded-xl border border-sky-200 space-y-4">
                                    <h4 className="font-bold text-sky-800 flex items-center gap-2">
                                        <Car className="w-5 h-5" /> Vehicle Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Vehicle Year</label>
                                            <input type="number" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="e.g. 2022" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Vehicle Make</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="e.g. Toyota" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Vehicle Model</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="e.g. Camry" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Number of Vehicles</label>
                                            <input type="number" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="e.g. 2" />
                                        </div>
                                    </div>
                                </div>
                            )}




                            {/* Workers Compensation Fields */}
                            {insuranceType === "Workers Compensation" && (
                                <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200 space-y-4">
                                    <h4 className="font-bold text-yellow-800 flex items-center gap-2">
                                        <HardHat className="w-5 h-5" /> Employee Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Number of Employees</label>
                                            <input type="number" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="e.g. 10" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Annual Payroll ($)</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="e.g. $350,000" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Type of Work Performed</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="e.g. Retail, Construction, Restaurant..." />
                                        </div>
                                    </div>
                                </div>
                            )}




                            {/* Commercial Insurance Fields */}
                            {insuranceType === "Commercial Insurance" && (
                                <div className="bg-rose-50 p-6 rounded-xl border border-rose-200 space-y-4">
                                    <h4 className="font-bold text-rose-800 flex items-center gap-2">
                                        <Building2 className="w-5 h-5" /> Business Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Type of Business</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="e.g. Consulting, Retail..." />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Annual Revenue ($)</label>
                                            <input type="text" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="e.g. $500,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Number of Employees</label>
                                            <input type="number" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="e.g. 5" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Years in Business</label>
                                            <input type="number" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="e.g. 10" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* END OF DUNAMIC FIELDS */}

                            {/* Business Name */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Business Name <span className="text-slate-400 font-normal">(if applicable)</span>
                                </label>
                                <input 
                                    type="text"
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Your Business Name"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Additional Information
                                </label>
                                <textarea 
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    placeholder="Any other details you'd like to share..."
                                ></textarea>
                            </div>

                            {/* Submit Button */}
                            <Button 
                                type="submit"
                                className="w-full bg-red-600 hover:bg-red-400 active:bg-red-800 text-white font-bold py-6 text-lg cursor-pointer rounded-xl"
                            >
                                Request My Free Quote
                            </Button>

                            {/* Trust Text */}
                            <p className="text-center text-sm text-slate-500">
                                No spam, no obligation. We typically respond within 24 hours.
                            </p>
                        </form>
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="bg-blue-900 py-16">
                <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32 text-center">
                    
                    <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
                        Prefer to Talk?
                    </h2>

                    <p className="text-xl text-blue-200 mb-8">
                        Give us a call and speak directly with an agent.
                    </p>

                    <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-gray-100 font-bold text-lg px-8 py-6 rounded-xl">
                        <Link href="tel:954-802-7561" className="flex items-center gap-2">
                            <Phone className="w-5 h-5" />
                            Call: 954-802-7561
                        </Link>
                    </Button>

                </div>
            </section>
        </main>

    )
}