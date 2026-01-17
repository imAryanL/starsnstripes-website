// TypeScript type definitions for quote form components

import { LucideIcon } from 'lucide-react'

export type FieldType = 'text' | 'number' | 'select'

// Single form field configuration
export interface FormField {
  name: string
  type: FieldType
  placeholder?: string
  required?: boolean
  options?: string[]
  defaultValue?: string
}

// Configuration for one insurance type
export interface InsuranceTypeConfig {
  color: 'red' | 'orange' | 'blue' | 'purple' | 'green' | 'amber' | 'slate' | 'indigo' | 'teal' | 'sky' | 'yellow' | 'rose'
  icon: LucideIcon
  fields: FormField[]
}

// All insurance types configuration
export interface InsuranceTypesConfig {
  [key: string]: InsuranceTypeConfig
}

// Complete form submission data
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
