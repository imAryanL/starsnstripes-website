import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Phone } from 'lucide-react'
import QuoteForm from '@/components/quote/QuoteForm'

export default function QuotePage() {
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
            <QuoteForm />
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
