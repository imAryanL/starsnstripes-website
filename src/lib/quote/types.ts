import { LucideIcon } from 'lucide-react'

export type FieldType = 'text' | 'number' | 'select'

export interface FormField {
  name: string
  type: FieldType
  placeholder?: string
  required?: boolean
  options?: string[]
  defaultValue?: string
}

export interface InsuranceTypeConfig {
  color: 'red' | 'orange' | 'blue' | 'purple' | 'green' | 'amber' | 'slate' | 'indigo' | 'teal' | 'sky' | 'yellow' | 'rose'
  icon: LucideIcon
  fields: FormField[]
}

export interface InsuranceTypesConfig {
  [key: string]: InsuranceTypeConfig
}

export interface QuoteFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  insuranceType: string
  businessName: string
  message: string
  dynamicFields: Record<string, string>
}
