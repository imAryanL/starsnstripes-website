import { insuranceTypes } from '@/lib/quote/insurance-config'
import { FormField } from '@/lib/quote/types'

interface DynamicFieldsSectionProps {
  insuranceType: string
}

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
  const config = insuranceTypes[insuranceType]

  if (!config) return null

  const Icon = config.icon
  const colors = colorClasses[config.color]

  const renderField = (field: FormField) => {
    const baseInputClasses = "w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2"

    if (field.type === "select") {
      return (
        <select
          name={field.name}
          className={`${baseInputClasses} ${colors.focus} bg-white`}
          defaultValue={field.defaultValue}
        >
          {field.options?.map(option => (
            <option key={option} value={option}>{option}</option>
          ))}
        </select>
      )
    }

    return (
      <input
        type={field.type}
        name={field.name}
        placeholder={field.placeholder}
        className={`${baseInputClasses} ${colors.focus}`}
      />
    )
  }

  return (
    <div className={`${colors.container} p-6 rounded-xl border space-y-4`}>
      <h4 className={`font-bold ${colors.text} flex items-center gap-2`}>
        <Icon className="w-5 h-5" /> {insuranceType} Details
      </h4>

      <div className={`grid grid-cols-1 ${config.fields.length === 3 && config.fields[2].name === "Type of Work Performed" ? "md:grid-cols-2" : "md:grid-cols-2"} gap-4`}>
        {config.fields.map((field, index) => {
          const isFullWidth = config.fields.length === 3 && index === 2 && field.name === "Type of Work Performed"

          return (
            <div key={field.name} className={isFullWidth ? "md:col-span-2" : ""}>
              <label className="block text-xs font-bold text-slate-600 mb-1">
                {field.name}
              </label>
              {renderField(field)}
            </div>
          )
        })}
      </div>
    </div>
  )
}
