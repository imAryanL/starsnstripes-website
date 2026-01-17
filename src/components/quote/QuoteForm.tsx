"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Loader2, Send } from 'lucide-react'
import BasicInfoFields from './BasicInfoFields'
import DynamicFieldsSection from './DynamicFieldsSection'
import SuccessMessage from './SuccessMessage'

export default function QuoteForm() {
  const [insuranceType, setInsuranceType] = useState("")
  const [phone, setPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState("")

  // Only allow letters, spaces, hyphens, apostrophes in name fields
  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^a-zA-Z\s'-]/g, '')
    e.target.value = value
  }

  // Auto-format phone number as (555) 555-5555
  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '')
    const limitedDigits = digits.slice(0, 10)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    const formData = new FormData(e.currentTarget)
    const dynamicFields: Record<string, string> = {}

    // Separate dynamic insurance fields from basic fields
    formData.forEach((value, key) => {
      if (!['firstName', 'lastName', 'email', 'phone', 'insuranceType', 'businessName', 'message'].includes(key)) {
        dynamicFields[key] = value.toString()
      }
    })

    const data = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      insuranceType: formData.get('insuranceType'),
      businessName: formData.get('businessName'),
      message: formData.get('message'),
      dynamicFields
    }

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSuccess(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const resetForm = () => {
    setIsSuccess(false)
    setInsuranceType("")
    setPhone("")
    setError("")
  }

  if (isSuccess) {
    return <SuccessMessage onReset={resetForm} />
  }

  return (
    <>
      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-2">
          Request a Quote
        </h2>
        <p className="text-slate-600">
          Fill out the form below and we'll contact you with a customized quote.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <BasicInfoFields
          phone={phone}
          insuranceType={insuranceType}
          onPhoneChange={handlePhoneInput}
          onInsuranceTypeChange={(e) => setInsuranceType(e.target.value)}
          onNameInput={handleNameInput}
        />

        {insuranceType && insuranceType !== "Other" && (
          <DynamicFieldsSection insuranceType={insuranceType} />
        )}

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
              Submitting...
            </span>
          ) : (
            <>
              <Send className="w-5 h-5 mr-2" />
              Request My Free Quote
            </>
          )}
        </Button>

        <p className="text-center text-sm text-slate-500">
          No spam, no obligation. We typically respond within 24 hours.
        </p>
      </form>
    </>
  )
}
