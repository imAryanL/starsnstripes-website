// Component: Renders the basic contact info fields (Name, Email, Phone, Insurance Type dropdown)
import { insuranceTypeNames } from '@/lib/quote/insurance-config'

// Props interface: Defines what this component receives from its parent (QuoteForm)
interface BasicInfoFieldsProps {
  phone: string  // Current phone value (formatted as "(555) 555-5555")
  insuranceType: string  // Currently selected insurance type (e.g., "Gas Station")

  // Function handlers - these are passed down from QuoteForm and called when user types
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void  // Function that takes an input change event and returns nothing
  onInsuranceTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void  // Function that takes a select change event and returns nothing
  onNameInput: (e: React.ChangeEvent<HTMLInputElement>) => void  // Function that takes an input change event and returns nothing
}

// This component renders: First Name, Last Name, Email, Phone, and Insurance Type dropdown
// It receives values and handler functions from QuoteForm and passes them to the inputs
export default function BasicInfoFields({
  phone,                    // Unpack: current phone value
  insuranceType,            // Unpack: selected insurance type
  onPhoneChange,            // Unpack: function to call when phone changes
  onInsuranceTypeChange,    // Unpack: function to call when dropdown changes
  onNameInput               // Unpack: function to call when name changes
}: BasicInfoFieldsProps) {  // Type check: make sure we got all required props
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
