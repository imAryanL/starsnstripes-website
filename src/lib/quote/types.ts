// TYPESCRIPT TYPE DEFINITIONS
// This file defines the "shape" of our data - like a blueprint for objects

import { LucideIcon } from 'lucide-react'

// TYPE: A field can only be one of these three types
// The | symbol means "OR" - so FieldType is either 'text' OR 'number' OR 'select'
export type FieldType = 'text' | 'number' | 'select'

// INTERFACE: Defines what a single form field looks like
// Example: { name: "Annual Gallons Sold", type: "text", placeholder: "e.g. 1,000,000" }
export interface FormField {
  name: string           // The label/name of the field (e.g. "Annual Sales")
  type: FieldType        // What kind of input (text, number, or select dropdown)
  placeholder?: string   // Text shown inside empty input (the "?" means optional)
  required?: boolean     // Is this field required? (optional property)
  options?: string[]     // For dropdowns: array of choices like ["Yes", "No"] (optional)
  defaultValue?: string  // Default selected value for dropdowns (optional)
}

// INTERFACE: Defines the configuration for one insurance type
// Example: Gas Station has color "red", icon Fuel, and 4 fields
export interface InsuranceTypeConfig {
  // Color can only be one of these 12 specific values (not just any string)
  color: 'red' | 'orange' | 'blue' | 'purple' | 'green' | 'amber' | 'slate' | 'indigo' | 'teal' | 'sky' | 'yellow' | 'rose'
  icon: LucideIcon       // The icon component from lucide-react library
  fields: FormField[]    // Array of form fields (the [] means "array of")
}

// INTERFACE: Defines the structure for ALL insurance types together
// [key: string] means "any string can be a key" (e.g. "Gas Station", "Restaurant")
// The value for each key must be an InsuranceTypeConfig object
export interface InsuranceTypesConfig {
  [key: string]: InsuranceTypeConfig  // e.g. { "Gas Station": {...}, "Restaurant": {...} }
}

// INTERFACE: Defines the complete form data when a user submits the quote form
export interface QuoteFormData {
  firstName: string
  lastName: string
  email: string
  phone: string
  insuranceType: string
  businessName: string
  message: string
  dynamicFields: Record<string, string>  // Record<string, string> means an object like { "Annual Sales": "$500k" }
}
