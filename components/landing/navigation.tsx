"use client"

import { useState } from "react"
import { Bot, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-xl flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              BotForge AI
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
              Features
            </a>
            <a href="#demos" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
              Demos
            </a>
            <a href="#pricing" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
              Pricing
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
              Contact
            </a>
          </div>
          
          <div className="flex items-center gap-4">
            <Button 
              className="hidden sm:flex bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Live Demo
            </Button>
            <button
              className="md:hidden p-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <a href="#features" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
                Features
              </a>
              <a href="#demos" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
                Demos
              </a>
              <a href="#pricing" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
                Pricing
              </a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground font-medium transition-colors">
                Contact
              </a>
              <Button 
                className="w-full bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl"
              >
                Live Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
