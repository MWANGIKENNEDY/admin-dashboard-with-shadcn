# Admin Dashboard

This is a modern admin dashboard built with [Next.js](https://nextjs.org) and [shadcn/ui](https://ui.shadcn.com) components.

## Features

- 📊 Interactive charts and data visualization (Bar, Area, Pie, Line charts)
- 👥 User management system with detailed profiles
- 🎨 Modern UI with dark/light theme support
- 📱 Responsive design for all screen sizes
- 🔧 Built with TypeScript and Tailwind CSS
- 📋 Task management with calendar integration
- 🏷️ User badges and role management
- 📝 Form validation with Zod and React Hook Form
- 🔍 Hover cards for detailed information display
- 📈 Progress tracking and completion indicators
- 🧭 Breadcrumb navigation for better UX

## shadcn/ui Components Used

This project utilizes the following shadcn/ui components:

### Layout & Navigation
- **Sidebar** - Collapsible sidebar with navigation menu and nested items
- **Button** - Various button variants (default, outline, ghost, destructive) and sizes
- **Separator** - Visual dividers between content sections
- **Breadcrumb** - Navigation breadcrumbs for page hierarchy
- **Sheet** - Slide-out panels for forms and additional content

### Data Display
- **Card** - Content containers with header, content, and footer sections
- **Badge** - Status indicators and labels for roles and categories
- **Avatar** - User profile images with fallback initials
- **Chart** - Comprehensive data visualization (Bar, Area, Pie, Line charts)
- **Tooltip** - Interactive hover information and help text
- **HoverCard** - Rich hover content with detailed information
- **Progress** - Progress bars for completion tracking

### Form & Input
- **Form** - Complete form system with validation and error handling
- **Input** - Text input fields with various states
- **Label** - Form field labels with proper accessibility
- **Select** - Dropdown selection components with search
- **Calendar** - Date picker with navigation and selection
- **Checkbox** - Form checkboxes for task lists and selections

### Interactive Elements
- **Popover** - Floating content containers for additional information
- **Dropdown Menu** - Context menus and action lists with separators
- **Collapsible** - Expandable/collapsible content sections

### Utility & Layout
- **Scroll Area** - Custom scrollable containers with styled scrollbars
- **Skeleton** - Loading state placeholders matching content structure
- **Theme Provider** - Dark/light mode management system

### Configuration
- **Style**: New York
- **Base Color**: Neutral
- **Icon Library**: Lucide React
- **CSS Variables**: Enabled
- **TypeScript**: Full support
- **Form Validation**: Zod integration with React Hook Form

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
- **UI Components**: shadcn/ui (New York style) - 22+ components
- **Icons**: Lucide React
- **Charts**: Recharts
- **Theme**: next-themes for dark/light mode
- **Date Handling**: date-fns with react-day-picker
- **Form Management**: React Hook Form with Zod validation
- **State Management**: React hooks and context
- **Animation**: CSS transitions and transforms

## Project Structure

```
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Dashboard home page
│   ├── not-found.tsx      # Custom 404 error page
│   ├── error.tsx          # Error boundary page
│   ├── global-error.tsx   # Global error handler
│   ├── loading.tsx        # Loading state page
│   └── users/             # User management pages
│       ├── page.tsx       # Users listing page
│       └── [username]/    # Dynamic user profile pages
├── components/            # React components
│   ├── ui/               # shadcn/ui components (22+ components)
│   ├── AppSidebar.tsx    # Navigation sidebar with collapsible menu
│   ├── Navbar.tsx        # Top navigation bar with user menu
│   ├── EditUser.tsx      # User editing form with validation
│   ├── *Chart.tsx        # Chart components (Bar, Area, Pie, Line)
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
