# Nicholas T. Munson - Portfolio Website

A modern, responsive portfolio website showcasing my professional journey, projects, and technical skills. Built with Next.js 15, TypeScript, and Tailwind CSS.

## 🌟 Features

### **Responsive Design**

- **Mobile-First**: Optimized for all screen sizes with responsive layouts
- **Slide-Out Navigation**: Clean mobile menu with hamburger icon
- **Adaptive Timeline**: Timeline cards adjust width and positioning based on screen size
- **Dynamic Grid Layouts**: Project cards and technology tags adapt to available space

### **Modern UI/UX**

- **Dark/Light Theme**: Toggle between themes with persistent user preference
- **Smooth Animations**: Parallax scrolling and hover effects
- **Interactive Components**: Dynamic project cards with modal details
- **Professional Typography**: Clean, readable fonts with proper hierarchy

### **Performance Optimized**

- **Next.js 15**: Latest framework features and optimizations
- **TypeScript**: Full type safety throughout the application
- **Tailwind CSS**: Utility-first styling with custom design system
- **Optimized Images**: Next.js Image component for fast loading

## 🚀 Tech Stack

### **Frontend**

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS 4** - Utility-first CSS framework
- **React 19** - Latest React features

### **UI Components**

- **Custom Button System** - Reusable, configurable button component
- **Icon Library** - SVG icons for consistent design
- **Mobile Menu** - Slide-out navigation for mobile devices
- **Theme Provider** - Context-based theme management

### **Timeline & Data**

- **React Vertical Timeline** - Professional experience timeline
- **Dynamic Project Cards** - Showcase portfolio projects
- **Technology Tags** - Responsive grid of skills and tools

## 📁 Project Structure

```
src/
├── app/
│   ├── components/ui/          # Reusable UI components
│   │   ├── Button.tsx         # Generic button component
│   │   ├── icons.tsx          # SVG icon library
│   │   └── MobileMenu.tsx     # Mobile navigation
│   ├── providers/             # React context providers
│   │   └── ThemeProvider.tsx  # Theme management
│   ├── views/                 # Page components
│   │   ├── header/            # Header and navigation
│   │   ├── introPage/         # Landing section
│   │   ├── timelinePage/      # Professional timeline
│   │   ├── projectsPage/      # Portfolio projects
│   │   └── technolgyPage/     # Skills and technologies
│   ├── hooks/                 # Custom React hooks
│   ├── utils/                 # Utility functions
│   └── globals.css            # Global styles and CSS variables
```

## 🎨 Design System

### **Color Palette**

- **Primary Green Scale**: 50-500 range from light to dark
- **Custom Grays**: Light to medium gray variations
- **Brand Colors**: Teal and sky blue accents
- **Theme Support**: Dark and light mode variants

### **Typography**

- **Headings**: Clamp-based responsive sizing
- **Body Text**: Optimized line heights and spacing
- **Font Loading**: Next.js font optimization

### **Components**

- **Buttons**: Multiple variants (primary, secondary, ghost, outline)
- **Cards**: Consistent surface styling with hover effects
- **Timeline**: Responsive vertical timeline with custom styling
- **Navigation**: Desktop and mobile-optimized layouts

## 🛠️ Development

### **Getting Started**

1. **Clone the repository**

   ```bash
   git clone https://github.com/NicholasMunson/ntmdevdotcom.git
   cd ntmdevdotcom
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### **Available Scripts**

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### **Code Quality**

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting (if configured)
- **Component Architecture**: Reusable, maintainable components

## 📱 Responsive Breakpoints

- **Mobile**: < 768px (single column layouts)
- **Tablet**: 768px - 1024px (adjusted grid layouts)
- **Desktop**: > 1024px (full multi-column layouts)

## 🎯 Key Features Explained

### **Timeline Component**

- **Mobile**: Centered timeline with full-width cards
- **Desktop**: Two-column alternating layout
- **Custom Styling**: Override default timeline package styles
- **Responsive Dots**: Properly positioned timeline indicators

### **Project Cards**

- **Dynamic Layout**: Cards center based on quantity
- **Consistent Buttons**: Website, Info, and GitHub links
- **Modal Details**: Detailed project information
- **Image Support**: Optimized project screenshots

### **Technology Grid**

- **Responsive Columns**: 2-5 columns based on screen size
- **Tag System**: Rounded technology badges
- **Categorized**: Frontend, Backend, and Tools sections

## 🚀 Deployment

This project is optimized for deployment on Vercel:

1. **Connect Repository**: Link your GitHub repository to Vercel
2. **Automatic Deployments**: Push to main branch triggers deployment
3. **Environment Variables**: Configure any required environment variables
4. **Custom Domain**: Add your custom domain in Vercel dashboard

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Website**: [ntmdev.com](https://ntmdev.com)
- **GitHub**: [@NicholasMunson](https://github.com/NicholasMunson)
- **LinkedIn**: [Nicholas T. Munson](https://www.linkedin.com/in/nicholastmunson/)

---

Built with ❤️ by Nicholas T. Munson
