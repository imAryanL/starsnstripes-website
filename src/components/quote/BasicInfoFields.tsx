import { insuranceTypeNames } from '@/lib/quote/insurance-config'

interface BasicInfoFieldsProps {
  phone: string
  insuranceType: string
  onPhoneChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onInsuranceTypeChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  onNameInput: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function BasicInfoFields({
  phone,
  insuranceType,
  onPhoneChange,
  onInsuranceTypeChange,
  onNameInput
}: BasicInfoFieldsProps) {
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
