// Import the list of insurance types from our config file
import { insuranceTypeNames } from '@/lib/quote/insurance-config'

// TYPESCRIPT INTERFACE: This is like a contract that defines what props this component expects
// Think of it as a checklist - the parent component must provide all these items
interface BasicInfoFieldsProps {
  phone: string  // ← "string" means this is text (like "555-1234")
  insuranceType: string  // ← Another text value (like "Gas Station")

  // These are FUNCTIONS that get called when the user types/changes something
  // (e: React.ChangeEvent<HTMLInputElement>) means: "a function that receives a change event from an input field"
  // => void means: "this function doesn't return anything, it just does something"
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void  // Function to handle phone input
  onInsuranceTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void  // Function to handle dropdown change
  onNameInput: (e: React.ChangeEvent<HTMLInputElement>) => void  // Function to handle name input
}

// This component receives props from its parent (QuoteForm)
// The curly braces { } "unpack" the props object so we can use them directly
// ": BasicInfoFieldsProps" tells TypeScript to check that we're getting the right props
export default function BasicInfoFields({
  phone,              // Unpacking: phone value from parent
  insuranceType,      // Unpacking: selected insurance type
  onPhoneChange,      // Unpacking: function to call when phone changes
  onInsuranceTypeChange,  // Unpacking: function to call when dropdown changes
  onNameInput         // Unpacking: function to call when name changes
}: BasicInfoFieldsProps) {  // ← This says "make sure props match the interface above"
  return (
    <>
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
            onChange={onNameInput}
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
            onChange={onNameInput}
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
          onChange={onPhoneChange}
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
          onChange={onInsuranceTypeChange}
          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white cursor-pointer"
        >
          <option value="">Select insurance type...</option>
          {insuranceTypeNames.map(type => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>
    </>
  )
}
