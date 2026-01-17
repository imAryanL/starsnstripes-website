// DATA CONFIGURATION FILE
// This file contains ALL the insurance types and their specific form fields
// Instead of hardcoding 13 conditional blocks in your component, we define the data here

// Import icons from lucide-react library (these are React components)
import {
  Fuel,         // Gas pump icon
  Utensils,     // Fork & knife icon for restaurants
  Hotel,        // Building icon
  Store,        // Store front icon
  ShoppingBasket,
  Wine,         // Wine bottle icon
  Cigarette,    // Cigarette icon
  Church,       // Church icon
  Home,         // House icon
  Car,          // Car icon
  HardHat,      // Construction hat icon
  Building2     // Office building icon
} from 'lucide-react'
import { InsuranceTypesConfig } from './types'

// MAIN CONFIGURATION OBJECT
// Each insurance type has: a color, an icon, and an array of form fields
// To add a new insurance type, just add another entry here - no component changes needed!
export const insuranceTypes: InsuranceTypesConfig = {
  // Example: Gas Station insurance type
  "Gas Station": {
    color: "red",      // Uses red color theme (bg-red-50, text-red-800, etc.)
    icon: Fuel,        // Shows the gas pump icon
    fields: [          // Array of 4 fields to show when user selects "Gas Station"
      {
        name: "Annual Gallons Sold",     // Label displayed to user
        type: "text",                    // Text input field
        placeholder: "e.g. 1,000,000"    // Hint text inside the input
      },
      {
        name: "Convenience Store Sales",
        type: "text",
        placeholder: "e.g. $500,000"
      },
      {
        name: "Car Wash",
        type: "select",                  // This is a dropdown menu
        options: ["No", "Yes"],          // Options in the dropdown
        defaultValue: "No"               // Default selected option
      },
      {
        name: "24 Hour Operation",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No"
      }
    ]
  },
  "Restaurant": {
    color: "orange",
    icon: Utensils,
    fields: [
      {
        name: "Annual Food Sales",
        type: "text",
        placeholder: "e.g. $800,000"
      },
      {
        name: "Annual Alcohol Sales",
        type: "text",
        placeholder: "e.g. $200,000"
      },
      {
        name: "Number of Employees",
        type: "number",
        placeholder: "e.g. 15"
      },
      {
        name: "Serves Alcohol",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No"
      }
    ]
  },
  "Hotel / Motel": {
    color: "blue",
    icon: Hotel,
    fields: [
      {
        name: "Number of Rooms",
        type: "number",
        placeholder: "e.g. 50"
      },
      {
        name: "Number of Buildings",
        type: "number",
        placeholder: "e.g. 2"
      },
      {
        name: "Has Pool",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No"
      },
      {
        name: "Has Restaurant",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No"
      }
    ]
  },
  "Shopping Center": {
    color: "purple",
    icon: Store,
    fields: [
      {
        name: "Total Square Footage",
        type: "text",
        placeholder: "e.g. 25,000 sq ft"
      },
      {
        name: "Number of Tenants",
        type: "number",
        placeholder: "e.g. 8"
      },
      {
        name: "Year Built",
        type: "number",
        placeholder: "e.g. 1995"
      },
      {
        name: "Has Parking Lot",
        type: "select",
        options: ["Yes", "No"],
        defaultValue: "Yes"
      }
    ]
  },
  "Convenience Store": {
    color: "green",
    icon: ShoppingBasket,
    fields: [
      {
        name: "Annual Sales",
        type: "text",
        placeholder: "e.g. $500,000"
      },
      {
        name: "Sells Gas",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No"
      },
      {
        name: "24 Hour Operation",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No"
      },
      {
        name: "Sells Alcohol",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No"
      }
    ]
  },
  "Liquor Store": {
    color: "amber",
    icon: Wine,
    fields: [
      {
        name: "Annual Sales",
        type: "text",
        placeholder: "e.g. $600,000"
      },
      {
        name: "Inventory Value",
        type: "text",
        placeholder: "e.g. $100,000"
      },
      {
        name: "Number of Employees",
        type: "number",
        placeholder: "e.g. 5"
      },
      {
        name: "Security System",
        type: "select",
        options: ["Yes", "No"],
        defaultValue: "Yes"
      }
    ]
  },
  "Smoke Shop": {
    color: "slate",
    icon: Cigarette,
    fields: [
      {
        name: "Annual Sales",
        type: "text",
        placeholder: "e.g. $300,000"
      },
      {
        name: "Inventory Value",
        type: "text",
        placeholder: "e.g. $50,000"
      },
      {
        name: "Sells Vape Products",
        type: "select",
        options: ["Yes", "No"],
        defaultValue: "Yes"
      },
      {
        name: "Sells CBD Products",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No"
      }
    ]
  },
  "Church": {
    color: "indigo",
    icon: Church,
    fields: [
      {
        name: "Building Square Footage",
        type: "text",
        placeholder: "e.g. 10,000 sq ft"
      },
      {
        name: "Average Weekly Attendance",
        type: "number",
        placeholder: "e.g. 200"
      },
      {
        name: "Has School",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No"
      },
      {
        name: "Has Daycare",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No"
      }
    ]
  },
  "Homeowners": {
    color: "teal",
    icon: Home,
    fields: [
      {
        name: "Home Square Footage",
        type: "text",
        placeholder: "e.g. 2,500 sq ft"
      },
      {
        name: "Year Built",
        type: "number",
        placeholder: "e.g. 2005"
      },
      {
        name: "Has Pool",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No"
      },
      {
        name: "Roof Age",
        type: "number",
        placeholder: "e.g. 10"
      }
    ]
  },
  "Auto": {
    color: "sky",
    icon: Car,
    fields: [
      {
        name: "Vehicle Year",
        type: "number",
        placeholder: "e.g. 2022"
      },
      {
        name: "Vehicle Make",
        type: "text",
        placeholder: "e.g. Toyota"
      },
      {
        name: "Vehicle Model",
        type: "text",
        placeholder: "e.g. Camry"
      },
      {
        name: "Number of Vehicles",
        type: "number",
        placeholder: "e.g. 2"
      }
    ]
  },
  "Workers Compensation": {
    color: "yellow",
    icon: HardHat,
    fields: [
      {
        name: "Number of Employees",
        type: "number",
        placeholder: "e.g. 10"
      },
      {
        name: "Annual Payroll",
        type: "text",
        placeholder: "e.g. $350,000"
      },
      {
        name: "Type of Work Performed",
        type: "text",
        placeholder: "e.g. Retail, Construction, Restaurant..."
      }
    ]
  },
  "Commercial Insurance": {
    color: "rose",
    icon: Building2,
    fields: [
      {
        name: "Type of Business",
        type: "text",
        placeholder: "e.g. Consulting, Retail..."
      },
      {
        name: "Annual Revenue",
        type: "text",
        placeholder: "e.g. $500,000"
      },
      {
        name: "Number of Employees",
        type: "number",
        placeholder: "e.g. 5"
      },
      {
        name: "Years in Business",
        type: "number",
        placeholder: "e.g. 10"
      }
    ]
  }
}

// SEPARATE EXPORT: Just the names for the dropdown menu
// This array is used in BasicInfoFields to populate the "Insurance Type" dropdown
// "as const" means TypeScript will treat this as a fixed list (can't be modified)
export const insuranceTypeNames = [
  "Gas Station",
  "Restaurant",
  "Hotel / Motel",
  "Shopping Center",
  "Convenience Store",
  "Liquor Store",
  "Smoke Shop",
  "Church",
  "Homeowners",
  "Auto",
  "Workers Compensation",
  "Commercial Insurance",
  "Other"  // "Other" has no fields, so DynamicFieldsSection won't show anything for it
] as const
