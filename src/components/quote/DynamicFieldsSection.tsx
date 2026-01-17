// Import the insurance configuration data (all 13 types and their fields)
import { insuranceTypes } from '@/lib/quote/insurance-config'
// Import the TypeScript type definition for a form field
import { FormField } from '@/lib/quote/types'

// This component only needs one prop: the insurance type selected by the user
interface DynamicFieldsSectionProps {
  insuranceType: string  // e.g. "Gas Station", "Restaurant", etc.
}

// MAP OF COLORS: Each insurance type has a color, this maps color names to Tailwind classes
// Example: if color is "red", use "bg-red-50 border-red-200" for the container
const colorClasses = {
  red: {
    container: "bg-red-50 border-red-200",
    text: "text-red-800",
    focus: "focus:ring-red-500"
  },
  orange: {
    container: "bg-orange-50 border-orange-200",
    text: "text-orange-800",
    focus: "focus:ring-orange-500"
  },
  blue: {
    container: "bg-blue-50 border-blue-200",
    text: "text-blue-800",
    focus: "focus:ring-blue-500"
  },
  purple: {
    container: "bg-purple-50 border-purple-200",
    text: "text-purple-800",
    focus: "focus:ring-purple-500"
  },
  green: {
    container: "bg-green-50 border-green-200",
    text: "text-green-800",
    focus: "focus:ring-green-500"
  },
  amber: {
    container: "bg-amber-50 border-amber-200",
    text: "text-amber-800",
    focus: "focus:ring-amber-500"
  },
  slate: {
    container: "bg-slate-100 border-slate-300",
    text: "text-slate-800",
    focus: "focus:ring-slate-500"
  },
  indigo: {
    container: "bg-indigo-50 border-indigo-200",
    text: "text-indigo-800",
    focus: "focus:ring-indigo-500"
  },
  teal: {
    container: "bg-teal-50 border-teal-200",
    text: "text-teal-800",
    focus: "focus:ring-teal-500"
  },
  sky: {
    container: "bg-sky-50 border-sky-200",
    text: "text-sky-800",
    focus: "focus:ring-sky-500"
  },
  yellow: {
    container: "bg-yellow-50 border-yellow-200",
    text: "text-yellow-800",
    focus: "focus:ring-yellow-500"
  },
  rose: {
    container: "bg-rose-50 border-rose-200",
    text: "text-rose-800",
    focus: "focus:ring-rose-500"
  }
}

export default function DynamicFieldsSection({ insuranceType }: DynamicFieldsSectionProps) {
  // Look up the configuration for this insurance type (e.g. "Gas Station" → fields, color, icon)
  const config = insuranceTypes[insuranceType]

  // If there's no config for this type (e.g. "Other"), don't show anything
  if (!config) return null

  // Get the icon component for this insurance type (e.g. Fuel icon for Gas Station)
  const Icon = config.icon
  // Get the color classes for this insurance type (e.g. red classes for Gas Station)
  const colors = colorClasses[config.color]

  // HELPER FUNCTION: Renders a single form field (either an input or a dropdown)
  // (field: FormField) means this function receives a field object with name, type, placeholder, etc.
  const renderField = (field: FormField) => {
    // Base Tailwind classes that ALL inputs share
    const baseInputClasses = "w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2"

    // If this field is a dropdown (select), render a <select> element
    if (field.type === "select") {
      return (
        <select
          name={field.name}
          // Template literal syntax: `${variable}` inserts the variable into the string
          className={`${baseInputClasses} ${colors.focus} bg-white`}
          defaultValue={field.defaultValue}
        >
          {/* Loop through all options and create an <option> for each */}
          {/* The "?" means "only do this if options exists" (optional chaining) */}
          {field.options?.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      )
    }

    // Otherwise, render a regular text/number input
    return (
      <input
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        className={`${baseInputClasses} ${colors.focus}`}
      />
    )
  }

  // RENDER THE COMPONENT: This is what gets displayed on the page
  return (
    // Colored container box (color depends on insurance type)
    <div className={`${colors.container} p-6 rounded-xl border space-y-4`}>
      {/* Header with icon and title (e.g. "🔥 Gas Station Details") */}
      <h4 className={`font-bold ${colors.text} flex items-center gap-2`}>
        <Icon className="w-5 h-5" /> {insuranceType} Details
      </h4>

      {/* Grid layout for the form fields (2 columns on desktop, 1 on mobile) */}
      <div className={`grid grid-cols-1 ${config.fields.length === 3 && config.fields[2].name === "Type of Work Performed" ? "md:grid-cols-2" : "md:grid-cols-2"} gap-4`}>
        {/* LOOP through all fields for this insurance type and render each one */}
        {/* .map() transforms each field object into JSX elements */}
        {config.fields.map((field, index) => {
          // Special case: "Type of Work Performed" should span 2 columns on desktop
          const isFullWidth = config.fields.length === 3 && index === 2 && field.name === "Type of Work Performed"

          return (
            // Each field gets its own container div
            <div key={field.name} className={isFullWidth ? "md:col-span-2" : ""}>
              {/* Label above the input (displays the field name) */}
              <label className="block text-xs font-bold text-slate-600 mb-1">
                {field.name}
              </label>
              {/* Render the actual input/select using our helper function */}
              {renderField(field)}
            </div>
          )
        })}
      </div>
    </div>
  )
}
