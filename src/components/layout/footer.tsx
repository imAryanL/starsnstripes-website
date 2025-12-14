import Link from 'next/link'
import Image from 'next/image'







export default function Footer(){
    return (
        <footer className="bg-blue-900 text-white">
            <div className="container mx-auto px-8 md:px-8 lg:px-12 xl:px-20 py-12">


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
                        Providing peace of mind for South Florida businesses and families since day one.
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
                        <p>2275 W. State Rd 84, Suite 105</p>
                        <p>Fort Lauderdale, FL 33312</p>
                        <p className="mt-2">
                            <span className="font-semibold text-white">Phone:</span> 954-802-7561
                        </p>
                        <p>
                            <span className="font-semibold text-white">Fax:</span> 954-802-7561
                        </p>
                        <p>
                            <span className="font-semibold text-white">Email:</span> alakhani0101@gmail.com
                        </p>
                        </div>
                    </div>
                




                </div>


                {/* Copyright Bar */}
                <div className="border-t border-blue-700 mt-8 pt-6">
                    <p className="text-center text-blue-200 text-sm">
                        © 2025 Stars & Stripes Insurance. All rights reserved.
                    </p>
                </div>


            </div>
        </footer>
    )
}
