"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Mail, MapPin, Phone, Clock, Send, CheckCircle, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'


export default function ContactPage() {
    // STATE VARIABLES - These track what's happening in the form
    // isSubmitting: true when form is being sent, false otherwise (for loading spinner)
    const [isSubmitting, setIsSubmitting] = useState(false)
    // isSuccess: true when email was sent successfully (to show success message)
    const [isSuccess, setIsSuccess] = useState(false)
    // error: holds error message if something goes wrong, empty string if no error
    const [error, setError] = useState('')
    // State for phone number (needed for formatting)
    const [phone, setPhone] = useState('')



    // Handle name input - only allow letters, spaces, hyphens, and apostrophes
    // This prevents numbers and special characters in name fields
    const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Replace anything that's not a letter, space, hyphen, or apostrophe with nothing
        const value = e.target.value.replace(/[^a-zA-Z\s'-]/g, '')
        e.target.value = value
    }



    // Format phone number as user types: (555) 555-5555
    const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        // Remove all non-digit characters
        const digits = e.target.value.replace(/\D/g, '')

        // Limit to 10 digits
        const limitedDigits = digits.slice(0, 10)

        // Format the phone number
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


    
    // This function runs when the user clicks "Send Message"
    // async = this function will wait for things (like the API call)
    // e = the form event (contains info about the form submission)
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        // Prevent the default form behavior (which would refresh the page)
        e.preventDefault()
        // Show loading state - button will show spinner
        setIsSubmitting(true)
        // Clear any previous error messages
        setError('')

        // FormData is a built-in browser API that grabs all form field values
        // e.currentTarget is the form element itself
        const formData = new FormData(e.currentTarget)

        // Build an object with the form data to send to the API
        // formData.get('firstName') gets the value from the input with name="firstName"
        const data = {
            firstName: formData.get('firstName'),
            lastName: formData.get('lastName'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            message: formData.get('message'),
        }

        try {
            // fetch() sends an HTTP request to our API endpoint
            const response = await fetch('/api/contact', {
                method: 'POST',              // POST = sending data to server
                headers: { 'Content-Type': 'application/json' },  // Tell server we're sending JSON
                body: JSON.stringify(data),  // Convert our data object to JSON string
            })

            // response.ok is true if status is 200-299 (success)
            if (response.ok) {
                setIsSuccess(true)  // Show success message
            } else {
                setError('Something went wrong. Please try again.')
            }
        } catch {
            // catch runs if fetch() itself fails (network error, etc.)
            setError('Something went wrong. Please try again.')
        } finally {
            // finally alyways runs, whether success or error
            // Turn off the loading spinner
            setIsSubmitting(false)
        }
    }




    
    return (
        <main>
            {/* Header Section - Matching the About Page */}
            <section className="bg-blue-900 py-16 text-center text-white">
                <div className="container mx-auto px-8">
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                        Get in Touch
                    </h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Whether you are in Florida or anywhere else in the country, our expert agents are ready to help. Reach out for a quote or support.
                    </p>
                </div>
            </section>

            {/* Content Grid */}
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
                                            1560 Sawgrass Corporate Parkway<br />
                                            Sunrise, FL 33323
                                        </p>
                                        <p className="text-sm text-slate-400 mt-2 font-medium flex items-center gap-1">
                                            <Clock className="w-4 h-4" /> Mon-Fri: 9AM — 5PM EST
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Contact Form */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-slate-200">

                            {/* - If isSuccess is TRUE  → show the success message
                                - If isSuccess is FALSE → show the form 
                            */}
                            {isSuccess ? (
                                <div className="text-center py-12">
                                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                    <h3 className="text-2xl font-bold text-blue-900 mb-2">Message Sent!</h3>
                                    <p className="text-slate-600 mb-6">We'll get back to you within 24 hours.</p>
                                    <Button
                                        onClick={() => {
                                            setIsSuccess(false)
                                            setPhone('')  // Reset phone field
                                        }}
                                        className="bg-red-600 hover:bg-red-400 active:bg-red-800 text-white font-bold py-6 text-lg cursor-pointer"
                                    >
                                        <Send className="w-5 h-5" />
                                        Send Another Message
                                    </Button>
                                </div>
                            ) : (
                                // <> is a React Fragment - it can wrap multiple elements
                                // without adding an extra <div> to the HTML output
                                <>
                                    <h3 className="text-2xl font-bold text-blue-900 mb-6">
                                        Send Us a Message
                                    </h3>
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                    First Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    onChange={handleNameInput}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="Susan"
                                                    required
                                                />
                                            </div>
                                            <div>
                                                <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                    Last Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    onChange={handleNameInput}
                                                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                    placeholder="Roberts"
                                                    required
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="susanroberts@example.com"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Phone
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={phone}
                                                onChange={handlePhoneInput}
                                                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="(555) 555-5555"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-semibold text-slate-700 mb-2">
                                                Message
                                            </label>
                                            <textarea
                                                rows={4}
                                                name="message"
                                                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                                                placeholder="How can we help you?"
                                                required
                                            ></textarea>
                                        </div>

                                        {error && (
                                            <p className="text-red-600 text-sm">{error}</p>
                                        )}

                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-red-600 hover:bg-red-400 active:bg-red-800 text-white font-bold py-6 text-lg cursor-pointer"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center gap-2">
                                                    <Loader2 className="w-5 h-5 animate-spin" />
                                                    Sending...
                                                </span>
                                            ) : (
                                                <span className="flex items-center justify-center gap-2">
                                                    <Send className="w-5 h-5" />
                                                    Send Message
                                                </span>
                                            )}
                                        </Button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}