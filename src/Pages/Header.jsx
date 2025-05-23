import React from 'react'

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Glass Effect Background */}
      <div className="relative backdrop-blur-md bg-white/10 border-b border-white/20 shadow-lg">
        {/* Gradient Overlay matching Option 1 */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 via-blue-700/20 to-indigo-800/30"></div>
        
        {/* Header Content */}
        <div className="relative max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo/Brand */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <h1 className="text-white text-xl font-bold tracking-tight">
                  Aapla Sevek
                </h1>
                <p className="text-blue-100 text-xs">Online Services</p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
                Home
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
                Services
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
                About
              </a>
              <a href="#" className="text-white/90 hover:text-white transition-colors duration-200 font-medium">
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <div className="flex items-center space-x-4">
              <button className="hidden sm:block bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-lg backdrop-blur-sm border border-white/30 transition-all duration-200 hover:scale-105 font-medium">
                Sign In
              </button>
              <button className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white px-6 py-2 rounded-lg shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl font-medium">
                Get Started
              </button>
              
              {/* Mobile Menu Button */}
              <button className="md:hidden text-white/90 hover:text-white">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Glow Effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
      </div>
    </header>
  )
}

export default Header