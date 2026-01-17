// ============================================
// WHAT THIS FILE DOES:
// ============================================
// This file contains ALL the data for the 13 insurance types
// Instead of having 13 hardcoded if/else blocks in your component,
// we store the data here and the component looks it up dynamically
//
// BENEFITS:
// 1. To add a new insurance type, just add an entry here (no component changes needed)
// 2. Easy to update fields without touching any React code
// 3. All insurance data in one place instead of scattered across 400+ lines
//
// STRUCTURE:
// Each insurance type has:
//   - color: used to style the form section (red, blue, etc.)
//   - icon: the icon to show next to the type name
//   - fields: array of form fields specific to this insurance type
// ============================================

// Import icons from lucide-react library
import {
  Fuel,         // Gas pump icon
  Utensils,     // Restaurant/food icon
  Hotel,        // Hotel building icon
  Store,        // Store/shop icon
  ShoppingBasket,  // Shopping basket icon
  Wine,         // Wine/liquor icon
  Cigarette,    // Smoke/tobacco icon
  Church,       // Church icon
  Home,         // House icon
  Car,          // Car/auto icon
  HardHat,      // Worker/construction icon
  Building2     // Commercial building icon
} from 'lucide-react'
import { InsuranceTypesConfig } from './types'

// MAIN DATA OBJECT: All 13 insurance types and their fields
// Think of this as a giant lookup table
// Example: insuranceTypes["Gas Station"] → gives you color, icon, and 4 fields
export const insuranceTypes: InsuranceTypesConfig = {
  // INSURANCE TYPE #1: Gas Station
  "Gas Station": {
    color: "red",      // Form section will be red-themed
    icon: Fuel,        // Shows gas pump icon
    fields: [          // 4 fields specific to gas stations
      {
        name: "Annual Gallons Sold",     // Field label
        type: "text",                    // Text input
        placeholder: "e.g. 1,000,000"    // Hint text
      },
      {
        name: "Convenience Store Sales",
        type: "text",
        placeholder: "e.g. $500,000"
      },
      {
        name: "Car Wash",
        type: "select",              // Dropdown
        options: ["No", "Yes"],      // Two choices
        defaultValue: "No"           // Pre-selected option
      },
      {
        name: "24 Hour Operation",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No"
      }
    ]
  },

  // INSURANCE TYPE #2: Restaurant
  // Same structure: color, icon, fields array
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

// Insurance type names for dropdown
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
  "Other"
] as const
