# Admin Dashboard

This is a modern admin dashboard built with [Next.js](https://nextjs.org) and [shadcn/ui](https://ui.shadcn.com) components.

## Features

- 📊 Interactive charts and data visualization
- 🎨 Modern UI with dark/light theme support
- 📱 Responsive design
- 🔧 Built with TypeScript and Tailwind CSS
- 📋 Task management with calendar integration

## shadcn/ui Components Used

This project utilizes the following shadcn/ui components:

### Layout & Navigation
- **Sidebar** - Collapsible sidebar with navigation menu
- **Button** - Various button variants and sizes
- **Separator** - Visual dividers between content sections

### Data Display
- **Card** - Content containers with header, content, and footer
- **Badge** - Status indicators and labels
- **Avatar** - User profile images with fallbacks
- **Chart** - Data visualization components (Bar, Area, Pie charts)
- **Tooltip** - Interactive hover information

### Form & Input
- **Calendar** - Date picker with navigation
- **Checkbox** - Form checkboxes for task lists
- **Popover** - Floating content containers
- **Dropdown Menu** - Context menus and action lists

### Utility
- **Scroll Area** - Custom scrollable containers
- **Collapsible** - Expandable/collapsible content sections
- **Theme Provider** - Dark/light mode management

### Configuration
- **Style**: New York
- **Base Color**: Neutral
- **Icon Library**: Lucide React
- **CSS Variables**: Enabled
- **TypeScript**: Full support

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (New York style)
- **Icons**: Lucide React
- **Charts**: Recharts
- **Theme**: next-themes for dark/light mode
- **Date Handling**: date-fns

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with providers
│   └── page.tsx           # Dashboard home page
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   ├── AppSidebar.tsx    # Navigation sidebar
│   ├── Navbar.tsx        # Top navigation bar
│   ├── *Chart.tsx        # Chart components
│   └── ...               # Other custom components
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions
└── public/               # Static assets
```

## Learn More

To learn more about the technologies used:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API
- [shadcn/ui Documentation](https://ui.shadcn.com) - beautiful and accessible components
- [Tailwind CSS](https://tailwindcss.com/docs) - utility-first CSS framework
- [Recharts](https://recharts.org/) - composable charting library

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
