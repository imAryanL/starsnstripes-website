import {
  Fuel,
  Utensils,
  Hotel,
  Store,
  ShoppingBasket,
  Wine,
  Cigarette,
  Church,
  Home,
  Car,
  HardHat,
  Building2
} from 'lucide-react'
import { InsuranceTypesConfig } from './types'

export const insuranceTypes: InsuranceTypesConfig = {
  "Gas Station": {
    color: "red",
    icon: Fuel,
    fields: [
      {
        name: "Annual Gallons Sold",
        type: "text",
        placeholder: "e.g. 1,000,000"
      },
      {
        name: "Convenience Store Sales",
        type: "text",
        placeholder: "e.g. $500,000"
      },
      {
        name: "Car Wash",
        type: "select",
        options: ["No", "Yes"],
        defaultValue: "No"
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

// Export just the insurance type names for the dropdown
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
