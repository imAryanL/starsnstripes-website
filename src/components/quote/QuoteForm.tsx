// "use client" tells Next.js this component runs in the browser (not on the server)
// We need this because we're using React hooks like useState
"use client"

import { useState } from 'react'  // React hook for managing component state
import { Button } from '@/components/ui/button'
import { Loader2, Send } from 'lucide-react'  // Icons
import BasicInfoFields from './BasicInfoFields'
import DynamicFieldsSection from './DynamicFieldsSection'
import SuccessMessage from './SuccessMessage'

export default function QuoteForm() {
  // STATE MANAGEMENT: These variables track the form's current state
  // useState("") creates a variable with initial value "" and a function to update it
  // Example: [insuranceType, setInsuranceType] means:
  //   - insuranceType: current value (e.g. "Gas Station")
  //   - setInsuranceType: function to change the value
  const [insuranceType, setInsuranceType] = useState("")  // Currently selected insurance type
  const [phone, setPhone] = useState("")                  // Phone number (formatted)
  const [isSubmitting, setIsSubmitting] = useState(false) // Is form currently submitting?
  const [isSuccess, setIsSuccess] = useState(false)       // Was submission successful?
  const [error, setError] = useState("")                  // Error message (if any)

  // VALIDATION FUNCTION: Only allow letters, spaces, hyphens, apostrophes in name fields
  // (e: React.ChangeEvent<HTMLInputElement>) means this function receives an input change event
  const handleNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // .replace() removes any characters that aren't letters, spaces, hyphens, or apostrophes
    const value = e.target.value.replace(/[^a-zA-Z\s'-]/g, '')
    e.target.value = value  // Update the input with the cleaned value
  }

  // FORMATTING FUNCTION: Auto-format phone number as user types: (555) 555-5555
  const handlePhoneInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Step 1: Remove all non-digit characters (letters, spaces, etc.)
    const digits = e.target.value.replace(/\D/g, '')
    // Step 2: Limit to 10 digits maximum
    const limitedDigits = digits.slice(0, 10)

    // Step 3: Format the digits into (XXX) XXX-XXXX pattern
    let formatted = ''
    if (limitedDigits.length > 0) {
      formatted = '(' + limitedDigits.slice(0, 3)  // First 3 digits in parentheses
    }
    if (limitedDigits.length >= 3) {
      formatted += ') ' + limitedDigits.slice(3, 6)  // Next 3 digits after space
    }
    if (limitedDigits.length >= 6) {
      formatted += '-' + limitedDigits.slice(6, 10)  // Last 4 digits after hyphen
    }

    // Step 4: Update the phone state with the formatted value
    setPhone(formatted)
  }

  // FORM SUBMISSION HANDLER: Called when user clicks "Request My Free Quote"
  // "async" means this function can wait for API responses
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()  // Stop the form from doing a page reload (default browser behavior)
    setIsSubmitting(true)  // Show loading spinner
    setError("")  // Clear any previous errors

    // COLLECT FORM DATA: Get all the form field values
    // FormData is a browser API that automatically grabs all form inputs
    const formData = new FormData(e.currentTarget)

    // Create an object to store dynamic fields (insurance-specific fields)
    // Record<string, string> means an object like { "Annual Sales": "$500k", "Has Pool": "Yes" }
    const dynamicFields: Record<string, string> = {}

    // Loop through ALL form fields and separate dynamic fields from basic fields
    formData.forEach((value, key) => {
      // If this field ISN'T one of the basic fields, it's a dynamic field
      if (!['firstName', 'lastName', 'email', 'phone', 'insuranceType', 'businessName', 'message'].includes(key)) {
        dynamicFields[key] = value.toString()  // Add to dynamicFields object
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
      dynamicFields  // All the insurance-specific fields
    }

    // TRY-CATCH: Attempt to submit, handle errors if something goes wrong
    try {
      // Send data to the API route (/api/quote)
      // "await" means "wait for the response before continuing"
      const response = await fetch('/api/quote', {
        method: 'POST',  // POST means we're sending data
        headers: { 'Content-Type': 'application/json' },  // Tell server we're sending JSON
        body: JSON.stringify(data),  // Convert JavaScript object to JSON string
      })

      // Check if the request succeeded (status code 200-299)
      if (response.ok) {
        setIsSuccess(true)  // Show success message
      } else {
        setError('Something went wrong. Please try again.')  // Show error
      }
    } catch {
      // This runs if there's a network error or the request fails
      setError('Something went wrong. Please try again.')
    } finally {
      // This ALWAYS runs, whether success or failure
      setIsSubmitting(false)  // Hide loading spinner
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
