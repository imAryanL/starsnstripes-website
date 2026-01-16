import Link from 'next/link'
import Image from 'next/image'







export default function Footer(){
    return (
        <footer className="bg-blue-900 text-white border-t border-blue-500">
            <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-32 py-12">


                {/* Footer grid style*/}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                


                    {/* Column 1: Logo & Description */}
                    <div>
                        <Image 
                        src="/updatedlogo.png" 
                        alt="Stars & Stripes Insurance" 
                        width={140} 
                        height={85}
                        className="mb-4"
                        />
                        <p className="text-blue-200">
                        Providing peace of mind for businesses and families across Florida, Texas, South Carolina, Oklahoma, Colorado, and Georgia.
                        </p>
                    </div>





                     {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                        <nav className="flex flex-col gap-2">

                            
                        <Link href="/" className="text-blue-200 hover:text-white transition-colors">
                            Home
                        </Link>


                        <Link href="/about" className="text-blue-200 hover:text-white transition-colors">
                            About
                        </Link>


                        <Link href="/services" className="text-blue-200 hover:text-white transition-colors">
                            Services
                        </Link>


                        <Link href="/contact" className="text-blue-200 hover:text-white transition-colors">
                            Contact
                        </Link>

                        <Link href="/quote" className="text-blue-200 hover:text-white transition-colors">
                            Get a Quote
                        </Link>
                        
                        </nav>
                    </div>





                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-4">Contact Us</h3>
                        <div className="flex flex-col gap-2 text-blue-200">
                        
                        <span className="font-semibold text-white">Address:</span><p>1560 Sawgrass Corporate Parkway</p>
                        <p>Sunrise, FL 33323</p>
                        <p>
                            <span className="font-semibold text-white">Phone:</span> 954-802-7561
                        </p>
                        <p>
                            <span className="font-semibold text-white">Fax:</span> 954-509-8952
                        </p>
                        <p>
                            <span className="font-semibold text-white">Email:</span> amir@starnstripesins.com
                        </p>
                        <p>
                            <span className="font-semibold text-white">Hours:</span> Mon-Fri 9AM-5PM
                        </p>
                        </div>
                    </div>
                </div>


                {/* Copyright Bar */}
                <div className="border-t border-blue-500 mt-8 pt-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-4">
                        <Link href="/privacy" className="text-blue-200 hover:text-white text-sm transition-colors">
                            Privacy Policy
                        </Link>
                    </div>
                    <p className="text-center text-blue-200 text-sm">
                        © 2026 Stars & Stripes Insurance. All rights reserved.
                    </p>
                </div>


            </div>
        </footer>
    )
}
