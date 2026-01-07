# Stars & Stripes Insurance

A full-stack website I built for my father's commercial insurance agency in Fort Lauderdale, FL. Their old ASP.NET site was clunky, looked outdated, and didn't work well on phones—so I rebuilt it from scratch with a modern stack.

**Live Site:** [starsnstripesins.com](https://starsnstripesins.com)

---

## Why I Built This

The agency's previous website was over a decade old. It wasn't mobile-friendly (a big problem since most visitors come from phones), load times were slow, and the design screamed "2010." There was also no easy way for potential clients to request quotes online—everything went through phone calls.

I rebuilt the entire thing to give them a fast, professional site that actually converts visitors into leads. The quote form is the main feature: it dynamically shows different fields depending on what type of insurance someone needs (gas stations have very different requirements than restaurants, for example).

---

## Tech Stack

![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=for-the-badge&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![AWS](https://img.shields.io/badge/AWS_Amplify-FF9900?style=for-the-badge&logo=aws-amplify&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black)

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 15 (App Router) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS + shadcn/ui |
| **Deployment** | AWS Amplify |
| **Email Service** | Resend |
| **DNS/SSL** | AWS Amplify (migrated from GoDaddy) |

---

## Key Features

### Smart Quote Form
The quote form is probably the most interesting part of this project. When a user selects an insurance type, the form dynamically renders fields specific to that business:

- **Gas stations** → asks about annual gallons sold, convenience store sales, car wash, 24-hour operation
- **Restaurants** → food sales, alcohol sales, number of employees
- **Hotels** → room count, pool, on-site restaurant
- **And 9 more categories...**

Each submission sends a nicely formatted HTML email to the agency with all the details organized and easy to read.

### Serverless Backend
Form submissions hit Next.js API routes that validate the data and send emails via Resend. No separate backend server to maintain, it all runs on AWS Lambda under the hood.

### Actually Responsive
Built mobile-first with Tailwind. The site works well on phones, tablets, and desktop without any weird layout issues.

---

## What I Replaced

The original site hadn't been updated since the early 2010s—no mobile support, slow load times, outdated design.

<img width="1116" height="801" alt="Screenshot 2026-01-05 at 10 52 16 PM" src="https://github.com/user-attachments/assets/4eb40352-7f05-44bc-8c7c-b4a8ecf121a2" />
<img width="1169" height="692" alt="Screenshot 2026-01-05 at 10 52 36 PM" src="https://github.com/user-attachments/assets/d21e89ee-a675-4480-8ff8-b498d8720cad" />
<img width="1059" height="804" alt="Screenshot 2026-01-05 at 10 52 56 PM" src="https://github.com/user-attachments/assets/b0b6ae2b-6531-4d60-8f1a-ec2a31d00aa7" />

See the new site live at [starsnstripesins.com](https://starsnstripesins.com)

---

## Running Locally

### Prerequisites
- Node.js 18+
- npm or yarn

### Setup

```bash
# Clone it
git clone https://github.com/imAryanL/starsnstripes-website.git
cd starsnstripes-website

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
```

Add your Resend API key to `.env.local`:

```env
RESEND_API_KEY=your_key_here
```

You can get a free API key at [resend.com](https://resend.com).

### Development

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

---

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── contact/route.ts    # Contact form endpoint
│   │   └── quote/route.ts      # Quote form endpoint
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── quote/page.tsx          # The dynamic quote form
│   ├── services/page.tsx
│   ├── privacy/page.tsx
│   ├── layout.tsx              # Shared layout (navbar + footer)
│   └── page.tsx                # Homepage
├── components/
│   ├── home/                   # Homepage sections
│   ├── layout/                 # Navbar, Footer
│   └── ui/                     # shadcn/ui components
└── lib/
    └── utils.ts
```

---

## Deployment

The site runs on **AWS Amplify** with CI/CD hooked up to this repo. Every push to `main` triggers an automatic build and deploy—no manual steps needed.

I also migrated their DNS from GoDaddy to Amplify, which simplified SSL certificate management (it's automatic now).

---

## License

Built for my father's insurance agency as a freelance project. Code is viewable for reference; branding and content belong to Stars & Stripes Insurance.

---

🙋‍♂️ Built by [Aryan Lakhani](https://github.com/imAryanL)
