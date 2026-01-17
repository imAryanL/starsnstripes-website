// WHAT THIS FILE DOES:
// Defines TypeScript "shapes" (interfaces) for our quote form data
// templates or blueprints that say "this object must have these properties"

import { LucideIcon } from 'lucide-react'

// TYPE: What kind of form field is it?
export type FieldType = 'text' | 'number' | 'select'

// INTERFACE: Blueprint for a single form field
// Example: { name: "Annual Sales", type: "text", placeholder: "e.g. $500,000" }
export interface FormField {
  name: string          // Label for the field (e.g., "Annual Sales")
  type: FieldType       // Type of input: 'text', 'number', or 'select'
  placeholder?: string  // Hint text inside input (the ? means optional)
  required?: boolean    // Is this field required?
  options?: string[]    // For dropdowns: ["Yes", "No"]
  defaultValue?: string // Default selected value for dropdowns
}

// INTERFACE: Blueprint for one insurance type's configuration
// Example: Gas Station has color "red", Fuel icon, and 4 fields
export interface InsuranceTypeConfig {
  color: 'red' | 'orange' | 'blue' | 'purple' | 'green' | 'amber' | 'slate' | 'indigo' | 'teal' | 'sky' | 'yellow' | 'rose'  // Must be one of these colors
  icon: LucideIcon      
  fields: FormField[]   // Array of form fields for this insurance type
}

// INTERFACE: Blueprint for ALL insurance types together
// This is like a dictionary: { "Gas Station": {...}, "Restaurant": {...} }
export interface InsuranceTypesConfig {
  [key: string]: InsuranceTypeConfig  // Any string key → InsuranceTypeConfig value
}

// INTERFACE: Blueprint for the complete form data when submitted
export interface QuoteFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  insuranceType: string
  businessName: string
  message: string
  dynamicFields: Record<string, string>  // Object like { "Annual Sales": "$500k", "Has Pool": "Yes" }
}
