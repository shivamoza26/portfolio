import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [darkMode, setDarkMode] = useState(false)

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
        <header className="p-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Portfolio</h1>
          <button
            onClick={toggleDarkMode}
            className="px-4 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </header>

        <main className="container mx-auto px-6 py-12">
          <section className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Welcome to My Portfolio
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Built with React, Vite, and Tailwind CSS
            </p>
            
            <div className="flex justify-center items-center gap-4 mb-8">
              <button
                onClick={() => setCount((count) => count + 1)}
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Count is {count}
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-semibold mb-2">Vite</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Lightning fast build tool for modern web development
                </p>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">⚛️</div>
                <h3 className="text-xl font-semibold mb-2">React</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A JavaScript library for building user interfaces
                </p>
              </div>

              <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-semibold mb-2">Tailwind CSS</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A utility-first CSS framework for rapid UI development
                </p>
              </div>
            </div>
          </section>

          <section id="features" className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8">Features</h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8">
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Dark mode support with class-based toggle</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Smooth scrolling enabled</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Tailwind CSS configured for all src files and index.html</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>TypeScript support</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Responsive design</span>
                </li>
              </ul>
            </div>
          </section>
        </main>

        <footer className="text-center py-8 text-gray-600 dark:text-gray-400">
          <p>&copy; 2025 Portfolio. Built with ❤️ using React + Vite + Tailwind CSS</p>
        </footer>
      </div>
    </div>
  )
}

export default App
