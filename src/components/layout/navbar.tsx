"use client"; // Client component that I need for creating useStates, Effect, other interactivites

// Link allows instant navigation between pages without a full refresh
//It pre-loads the next page in the background for better speed.
import Link from "next/link";
import Image from "next/image"
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'








export default function Navbar() {

    // Creating a constant and useState for having a Mobile Hamburger Icon Menu when on mobile device screen layout
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    // State to track if the Services dropdown menu is open (true) or closed (false)
    // This controls whether the dropdown menu appears when hovering over "Services"
    const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)

    return (
        <header className="w-full bg-white border-b-4 sticky top-0 z-50">
            <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32 h-28 flex items-center justify-between">
                {/*Logo of company*/}
                <Link href="/" className="flex items-center gap-2">
                    <Image
                      src="/updatedlogo.png"
                      alt="Stars & Stripes Insurance Logo"
                      width={160}
                      height={100}
                    />
                </Link>
 
          

                    {/* Navigation Links */}
                    <nav className="hidden md:flex items-center gap-5">
                    <Link
                        href="/"
                        className="text-medium font-bold text-blue-900 px-3 py-2 duration-100 hover:underline underline-offset-4 decoration-3 decoration-red-700"
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        className="text-medium font-bold text-blue-900 px-3 py-2 duration-100 hover:underline underline-offset-4 decoration-3 decoration-red-700"
                    >
                        About
                    </Link>

                    {/* Services Dropdown Wrapper */}
                    {/* "relative" positioning allows the dropdown to position itself relative to this div */}
                    {/* onMouseEnter: Triggers when mouse hovers over - sets dropdown state to true (open) */}
                    {/* onMouseLeave: Triggers when mouse leaves - sets dropdown state to false (closed) */}
                    <div
                        className="relative"
                        onMouseEnter={() => setIsServicesDropdownOpen(true)}
                        onMouseLeave={() => setIsServicesDropdownOpen(false)}
                    >
                        {/* The main "Services" link */}
                        <Link
                            href="/services"
                            className="text-medium font-bold text-blue-900 px-3 py-2 duration-100 hover:underline underline-offset-4 decoration-3 decoration-red-700"
                        >
                            Services
                        </Link>

                        {/* Dropdown Menu */}
                        {/* Only renders when isServicesDropdownOpen is true */}
                        {isServicesDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 bg-white border-2 border-slate-200 rounded-xl shadow-xl p-6 w-[600px] z-50">

                                {/* Grid with 3 columns for organizing services */}
                                <div className="grid grid-cols-3 gap-6">

                                    {/* Column 1: Commercial Services */}
                                    <div>
                                        <h3 className="text-sm font-bold text-blue-900 mb-3 uppercase tracking-wide">Commercial</h3>
                                        <div className="flex flex-col gap-2">
                                            {/* Each link uses deep linking (hash #) to jump to specific service section */}
                                            <Link href="/services#gas-stations" className="text-sm text-slate-700 hover:text-red-600 hover:underline">Gas Stations</Link>
                                            <Link href="/services#restaurants" className="text-sm text-slate-700 hover:text-red-600 hover:underline">Restaurants</Link>
                                            <Link href="/services#hotels-motels" className="text-sm text-slate-700 hover:text-red-600 hover:underline">Hotels & Motels</Link>
                                            <Link href="/services#shopping-centers" className="text-sm text-slate-700 hover:text-red-600 hover:underline">Shopping Centers</Link>
                                            <Link href="/services#convenience-stores" className="text-sm text-slate-700 hover:text-red-600 hover:underline">Convenience Stores</Link>
                                            <Link href="/services#liquor-stores" className="text-sm text-slate-700 hover:text-red-600 hover:underline">Liquor Stores</Link>
                                            <Link href="/services#smoke-shops" className="text-sm text-slate-700 hover:text-red-600 hover:underline">Smoke Shops</Link>
                                            <Link href="/services#churches" className="text-sm text-slate-700 hover:text-red-600 hover:underline">Churches</Link>
                                        </div>
                                    </div>

                                    {/* Column 2: Personal Services */}
                                    <div>
                                        <h3 className="text-sm font-bold text-blue-900 mb-3 uppercase tracking-wide">Personal</h3>
                                        <div className="flex flex-col gap-2">
                                            <Link href="/services#homeowners-insurance" className="text-sm text-slate-700 hover:text-red-600 hover:underline">Homeowners</Link>
                                            <Link href="/services#auto-insurance" className="text-sm text-slate-700 hover:text-red-600 hover:underline">Auto Insurance</Link>
                                        </div>
                                    </div>

                                    {/* Column 3: Additional Services */}
                                    <div>
                                        <h3 className="text-sm font-bold text-blue-900 mb-3 uppercase tracking-wide">Additional</h3>
                                        <div className="flex flex-col gap-2">
                                            <Link href="/services#workers-compensation" className="text-sm text-slate-700 hover:text-red-600 hover:underline">Workers Comp</Link>
                                            <Link href="/services#commercial-insurance" className="text-sm text-slate-700 hover:text-red-600 hover:underline">Commercial Insurance</Link>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )}
                    </div>

                    <Link
                        href="/contact"
                        className="text-medium font-bold text-blue-900 px-3 py-2 duration-100 hover:underline underline-offset-4 decoration-3 decoration-red-700"
                    >
                        Contact
                    </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                      className="md:hidden p-2 rounded-md active:bg-blue-100 transition-colors"
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                      {isMenuOpen ? (
                        <X className="w-6 h-6 text-blue-900" strokeWidth={4} />
                      ) : (
                        <Menu className="w-6 h-6 text-blue-900" strokeWidth={4} />
                      )}
                    </button>


                    {/* Call to Action button which is "Get a Quote" */}
                    <a 
                      href="/quote" 
                      className="hidden md:block bg-blue-800 hover:bg-blue-700 active:bg-blue-800 text-white font-bold px-6 py-3 rounded-md active:scale-95 transition-all duration-100"
                    >
                      Get a Quote
                    </a>

            </div>



            {/* Mobile Menu Dropdown - It only shows when the menu is open on mobile screen */}
            {isMenuOpen && (
              <nav className="md:hidden border-t bg-white">
                <div className="container mx-auto px-4 py-4 flex flex-col gap-3">

                  <Link 
                    href="/" 
                    className="text-blue-900 font-bold py-2 hover:bg-blue-50 px-3 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Home
                  </Link>

                  <Link 
                    href="/about" 
                    className="text-blue-900 font-bold py-2 hover:bg-blue-50 px-3 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >About
                  </Link>

                  <Link 
                    href="/services" 
                    className="text-blue-900 font-bold py-2 hover:bg-blue-50 px-3 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </Link>

                  <Link 
                    href="/contact" 
                    className="text-blue-900 font-bold py-2 hover:bg-blue-50 px-3 rounded-md"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </Link>

                  <Button asChild className="bg-blue-900 hover:bg-blue-700 text-white font-bold w-full">
                    <Link href="/quote" onClick={() => setIsMenuOpen(false)}>Get a Quote</Link>
                  </Button>
                </div>
              </nav>
            )}
        </header>
    )
}


