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
    Building2,
    CheckCircle,
    Send,
    Loader2
} from 'lucide-react'



export default function QuotePage() {
    
    
    // State Variables
    // Tracks which insurance type the user selected from dropdown
    const [insuranceType, setInsuranceType] = useState("")
    // Stores the formatted phone number
    const [phone, setPhone] = useState("")
    // True when form is being sent (shows loading spinner)
    const [isSubmitting, setIsSubmitting] = useState(false)
    // True when form was sent successfully (shows success message)
    const [isSuccess, setIsSuccess] = useState(false)
    // Stores error message if something goes wrong
    const [error, setError] = useState("")



    // Input Handlers for name and phone

    // Only allow letters, spaces, hyphens, apostrophes in name fields
    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value.replace(/[^a-zA-Z\s'-]/g, '')
        e.target.value = value
    }


    // Auto-format phone number as user types: (555) 555-5555
    const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Strip out everything except digits
        const digits = e.target.value.replace(/\D/g, '')
        // Only allow 10 digits max
        const limitedDigits = digits.slice(0, 10)

        // Build formatted string piece by piece
        let formatted = ''
        if (limitedDigits.length > 0) {
            formatted = '(' + limitedDigits.slice(0, 3)        
        }
        if (limitedDigits.length >= 3) {
            formatted += ') ' + limitedDigits.slice(3, 6)     
        }
        if (limitedDigits.length >= 6) {
            formatted += '-' + limitedDigits.slice(6, 10)      
        }

        setPhone(formatted)
    }


    // Form Submission
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // Stop page from refreshing
        e.preventDefault()
        // Show loading spinner
        setIsSubmitting(true)
        // Clear any previous errors
        setError("")

        // Grab all form values
        const formData = new FormData(e.currentTarget)

        // Dynamic fields = extra fields that change based on insurance type
        // Example: "Convenience Store Sales": "$500,000"
        // TypeScript type that means: "an object where both the keys and values are strings
        const dynamicFields: Record<string, string> = {}

        // Loop through all form fields and collect the dynamic ones
        // (anything that's not in the basic fields list)
        formData.forEach((value, key) => {
            if (!['firstName', 'lastName', 'email', 'phone', 'insuranceType', 'businessName', 'message'].includes(key)) {
                dynamicFields[key] = value.toString()
            }
        })

        // Build the data object to send to the API
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            insuranceType: formData.get('insuranceType'),
            businessName: formData.get('businessName'),
            message: formData.get('message'),
            dynamicFields  // Include all the extra fields
        }

        try {
            // fetch() sends an HTTP request to API
            // '/api/quote' = the URL (maps to src/app/api/quote/route.ts)
            const response = await fetch('/api/quote', {
                // POST = we're sending data TO the server (not just requesting data)
                method: 'POST',
                // Tell the server "I'm sending you JSON data"
                headers: { 'Content-Type': 'application/json' },
                // Convert our JavaScript object to a JSON string
                // Server can't read JS objects directly, only text/JSON
                body: JSON.stringify(data),
            })

            // Check if successful (status 200-299)
            if (response.ok) {
                setIsSuccess(true)
            } else {
                setError('Something went wrong. Please try again.')
            }
        } catch {
            // Network error or other failure
            setError('Something went wrong. Please try again.')
        } finally {
            // Always turn off loading spinner when done
            setIsSubmitting(false)
        }
    }


    // Reset Form
    // Called when user clicks "Request Another Quote" after success
    const resetForm = () => {
        setIsSuccess(false)
        setInsuranceType("")
        setPhone("")
        setError("")
    }
    
    
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

                         {isSuccess ? (
                            <div className="text-center py-12">
                                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                <h3 className="text-2xl font-bold text-blue-900 mb-2">Quote Request Sent!</h3>
                                <p className="text-slate-600 mb-6">We'll get back to you within 24 hours with a customized quote.</p>
                                <Button 
                                    onClick={resetForm}
                                    className="bg-red-600 hover:bg-red-400 active:bg-red-800 text-white font-bold py-6 text-lg cursor-pointer"
                                >
                                    <Send className="w-5 h-5 mr-2" />
                                    Request Another Quote
                                </Button>
                            </div>
                        ) : (
                            <>


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
                        <form onSubmit={handleSubmit} className="space-y-6">

                            
                            {/* Name Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                                        First Name <span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        required
                                        onChange={handleNameInput}
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
                                        name="lastName"
                                        required
                                        onChange={handleNameInput}
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
                                    name="email"
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
                                    name="phone"
                                    required
                                    value={phone}
                                    onChange={handlePhoneInput}
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
                                    name="insuranceType"
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





                            {/* DYNAMIC FIELDS */}

                            {/* Gas Station Fields */}
                            {insuranceType === "Gas Station" && (
                                <div className="bg-red-50 p-6 rounded-xl border border-red-200 space-y-4">
                                    <h4 className="font-bold text-red-800 flex items-center gap-2">
                                        <Fuel className="w-5 h-5" /> Gas Station Details
                                    </h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Annual Gallons Sold</label>
                                            <input type="text" name="Annual Gallons Sold" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="e.g. 1,000,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Convenience Store Sales ($)</label>
                                            <input type="text" name="Convenience Store Sales" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="e.g. $500,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you have a Car Wash?</label>
                                            <select name="Car Wash" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">24 Hour Operation?</label>
                                            <select name="24 Hour Operation" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
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
                                            <input type="text" name="Annual Food Sales" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="e.g. $800,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Annual Alcohol Sales ($)</label>
                                            <input type="text" name="Annual Alcohol Sales" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="e.g. $200,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Number of Employees</label>
                                            <input type="number" name="Number of Employees" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500" placeholder="e.g. 15" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you serve alcohol?</label>
                                            <select name="Serves Alcohol" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
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
                                            <input type="number" name="Number of Rooms" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. 50" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Number of Buildings</label>
                                            <input type="number" name="Number of Buildings" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="e.g. 2" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you have a Pool?</label>
                                            <select name="Has Pool" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you have a Restaurant?</label>
                                            <select name="Has Restaurant" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
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
                                            <input type="text" name="Total Square Footage" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="e.g. 25,000 sq ft" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Number of Tenants</label>
                                            <input type="number" name="Number of Tenants" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="e.g. 8" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Year Built</label>
                                            <input type="number" name="Year Built" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-purple-500" placeholder="e.g. 1995" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you have a Parking Lot?</label>
                                            <select name="Has Parking Lot" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
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
                                            <input type="text" name="Annual Sales" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-green-500" placeholder="e.g. $500,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you sell Gas?</label>
                                            <select name="Sells Gas" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">24 Hour Operation?</label>
                                            <select name="24 Hour Operation" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you sell Alcohol?</label>
                                            <select name="Sells Alcohol" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
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
                                            <input type="text" name="Annual Sales" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="e.g. $600,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Inventory Value ($)</label>
                                            <input type="text" name="Inventory Value" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="e.g. $100,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Number of Employees</label>
                                            <input type="number" name="Number of Employees" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="e.g. 5" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Security System?</label>
                                            <select name="Security System" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
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
                                            <input type="text" name="Annual Sales" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500" placeholder="e.g. $300,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Inventory Value ($)</label>
                                            <input type="text" name="Inventory Value" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-500" placeholder="e.g. $50,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you sell Vape Products?</label>
                                            <select name="Sells Vape Products" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="Yes">Yes</option>
                                                <option value="No">No</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you sell CBD Products?</label>
                                            <select name="Sells CBD Products" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
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
                                            <input type="text" name="Building Square Footage" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. 10,000 sq ft" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Average Weekly Attendance</label>
                                            <input type="number" name="Average Weekly Attendance" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g. 200" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you have a School?</label>
                                            <select name="Has School" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you have a Daycare?</label>
                                            <select name="Has Daycare" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
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
                                            <input type="text" name="Home Square Footage" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="e.g. 2,500 sq ft" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Year Built</label>
                                            <input type="number" name="Year Built" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="e.g. 2005" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Do you have a Pool?</label>
                                            <select name="Has Pool" className="w-full px-3 py-2 rounded-lg border border-slate-300 bg-white">
                                                <option value="No">No</option>
                                                <option value="Yes">Yes</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Roof Age (years)</label>
                                            <input type="number" name="Roof Age" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-teal-500" placeholder="e.g. 10" />
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
                                            <input type="number" name="Vehicle Year" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="e.g. 2022" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Vehicle Make</label>
                                            <input type="text" name="Vehicle Make" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="e.g. Toyota" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Vehicle Model</label>
                                            <input type="text" name="Vehicle Model" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="e.g. Camry" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Number of Vehicles</label>
                                            <input type="number" name="Number of Vehicles" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="e.g. 2" />
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
                                            <input type="number" name="Number of Employees" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="e.g. 10" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Annual Payroll ($)</label>
                                            <input type="text" name="Annual Payroll" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="e.g. $350,000" />
                                        </div>
                                        <div className="md:col-span-2">
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Type of Work Performed</label>
                                            <input type="text" name="Type of Work Performed" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" placeholder="e.g. Retail, Construction, Restaurant..." />
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
                                            <input type="text" name="Type of Business" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="e.g. Consulting, Retail..." />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Annual Revenue ($)</label>
                                            <input type="text" name="Annual Revenue" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="e.g. $500,000" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Number of Employees</label>
                                            <input type="number" name="Number of Employees" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="e.g. 5" />
                                        </div>
                                        <div>
                                            <label className="block text-xs font-bold text-slate-600 mb-1">Years in Business</label>
                                            <input type="number" name="Years in Business" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-rose-500" placeholder="e.g. 10" />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* END OF DYNAMIC FIELDS */}

                            {/* Business Name */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                    Business Name <span className="text-slate-400 font-normal">(if applicable)</span>
                                </label>
                                <input 
                                    type="text"
                                    name="businessName"
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
                                    name="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                    placeholder="Any other details you'd like to share..."
                                ></textarea>
                            </div>

                            
                                {/* Error Message */}
                                {error && (
                                    <p className="text-red-600 text-sm">{error}</p>
                                )}


                                {/* Submit Button */}
                                <Button 
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-red-600 hover:bg-red-400 active:bg-red-800 text-white font-bold py-6 text-lg cursor-pointer"
                                >
                                    {isSubmitting ? (
                                        <span className="flex items-center justify-center gap-2">
                                            <Loader2 className="w-5 h-5 animate-spin" />
                                            Submitting...
                                        </span>
                                    ) : (
                                        <>
                                            <Send className="w-5 h-5 mr-2" />
                                            Request My Free Quote
                                        </>
                                    )}
                                </Button>

                            {/* Trust Text */}
                            <p className="text-center text-sm text-slate-500">
                                No spam, no obligation. We typically respond within 24 hours.
                            </p>
                        </form>
                        </>
                        )}
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