# Portfolio

A modern React portfolio website built with Vite and Tailwind CSS.

## Features

- ⚡ **Vite** - Lightning fast build tool
- ⚛️ **React 18** with TypeScript
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🌙 **Dark Mode** - Toggle between light and dark themes
- 📱 **Responsive Design** - Mobile-first approach
- ✨ **Smooth Scrolling** - Enhanced user experience
- 🔧 **ESLint** - Code linting for consistency

## Setup Instructions

### Prerequisites

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

4. **Open your browser:**
   - Navigate to `http://localhost:5173`
   - The app will automatically reload when you make changes

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Configuration

### Tailwind CSS

The project is configured with:
- **Dark mode**: `class` strategy enabled
- **Content scanning**: Includes `index.html` and all files in `src/**`
- **Smooth scrolling**: Added via CSS (`html { scroll-behavior: smooth; }`)

### Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles with Tailwind directives
├── index.html           # HTML template
├── package.json         # Dependencies and scripts
├── tailwind.config.js   # Tailwind configuration
├── postcss.config.js    # PostCSS configuration
├── tsconfig.json        # TypeScript configuration
├── vite.config.ts       # Vite configuration
└── .eslintrc.cjs        # ESLint configuration
```

## Dark Mode

The dark mode implementation uses Tailwind's `class` strategy:
- Click the toggle button in the header to switch themes
- The theme persists during the session
- Uses CSS transitions for smooth theme changes

## Customization

You can customize the portfolio by:
1. Editing the content in `src/App.tsx`
2. Modifying colors and styles in `tailwind.config.js`
3. Adding new components in the `src/` directory
4. Updating the global styles in `src/index.css`

## Building for Production

```bash
npm run build
```

This will create a `dist/` folder with optimized files ready for deployment.

## License

This project is open source and available under the MIT License.
