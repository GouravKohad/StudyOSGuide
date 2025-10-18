"use client"

import { useState, useEffect } from "react"
import { ChevronDown, Zap, Clock, Target, Shield, BookOpen, Monitor, Power, Menu, X } from "lucide-react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-white text-slate-900 overflow-hidden">
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md border-b border-blue-200 shadow-lg" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2 animate-fade-in">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white">
              J
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              JEE Hub
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#features" className="hover:text-blue-600 transition-colors font-medium">
              Features
            </a>
            <a href="#how-to-use" className="hover:text-blue-600 transition-colors font-medium">
              How to Use
            </a>
            <a href="#kiosk-setup" className="hover:text-blue-600 transition-colors font-medium">
              Kiosk Setup
            </a>
            <a href="#faq" className="hover:text-blue-600 transition-colors font-medium">
              FAQ
            </a>
            <a
              href="https://jeehub.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg hover:shadow-blue-400/50 transition-all transform hover:scale-105"
            >
              Launch App
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-blue-200 p-4 space-y-4 animate-slide-in-left">
            <a href="#features" className="block hover:text-blue-600 transition-colors font-medium">
              Features
            </a>
            <a href="#how-to-use" className="block hover:text-blue-600 transition-colors font-medium">
              How to Use
            </a>
            <a href="#kiosk-setup" className="block hover:text-blue-600 transition-colors font-medium">
              Kiosk Setup
            </a>
            <a href="#faq" className="block hover:text-blue-600 transition-colors font-medium">
              FAQ
            </a>
            <a
              href="https://jeehub.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-center hover:shadow-lg hover:shadow-blue-400/50 transition-all"
            >
              Launch App
            </a>
          </div>
        )}
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl animate-float"></div>
          <div
            className="absolute bottom-20 right-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-200/15 rounded-full blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-100 border border-blue-300 rounded-full text-sm text-blue-700 animate-fade-in font-semibold">
            The Ultimate Study OS for JEE Aspirants
          </div>

          <h1
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight animate-fade-in text-slate-900"
            style={{ animationDelay: "0.2s" }}
          >
            Master Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              JEE Preparation
            </span>
          </h1>

          <p
            className="text-xl md:text-2xl text-slate-600 mb-8 max-w-2xl mx-auto animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            A distraction-free study environment with intelligent task management, time tracking, and Windows kiosk mode
            for ultimate focus
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="https://jeehub.onrender.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-400/50 transition-all transform hover:scale-105 animate-glow-pulse"
            >
              Start Studying Now
            </a>
            <a
              href="#features"
              className="px-8 py-4 border-2 border-blue-500 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105"
            >
              Explore Features
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce-slow mt-12">
            <ChevronDown className="mx-auto text-blue-600" size={32} />
          </div>
        </div>
      </section>

      <section
        id="features"
        className="py-20 px-4 relative bg-gradient-to-b from-transparent via-blue-50/50 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in text-slate-900">
            Powerful Features
          </h2>
          <p
            className="text-center text-slate-600 mb-16 animate-fade-in font-medium"
            style={{ animationDelay: "0.2s" }}
          >
            Everything you need to ace your JEE preparation
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Target,
                title: "Smart Task Management",
                description: "Create, organize, and track tasks by subject with priority levels and deadlines",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Clock,
                title: "Advanced Time Tracking",
                description: "Built-in Pomodoro timer with customizable intervals and study session analytics",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Shield,
                title: "Distraction-Free Mode",
                description: "Block distracting websites and apps to maintain complete focus during study sessions",
                color: "from-pink-500 to-pink-600",
              },
              {
                icon: BookOpen,
                title: "Subject Organization",
                description: "Organize tasks by Physics, Chemistry, Mathematics with progress tracking",
                color: "from-green-500 to-green-600",
              },
              {
                icon: Monitor,
                title: "Windows Kiosk Mode",
                description: "Lock your computer to JEE Hub only - perfect for focused study sessions",
                color: "from-orange-500 to-orange-600",
              },
              {
                icon: Zap,
                title: "Real-time Analytics",
                description: "Track your progress, study streaks, and performance metrics in real-time",
                color: "from-yellow-500 to-yellow-600",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-xl bg-white border-2 border-blue-100 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-200/50 animate-scale-in"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <div
                  className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform group-hover:rotate-12`}
                >
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-slate-900">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-to-use" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in text-slate-900">
            How to Use JEE Hub
          </h2>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Create Your Profile",
                description:
                  "Sign up and personalize your study experience. Enter your name and select your target subjects (Physics, Chemistry, Mathematics).",
                details: [
                  "Visit jeehub.onrender.com",
                  'Click "Get Started"',
                  "Enter your name",
                  "Select your subjects",
                ],
              },
              {
                step: "02",
                title: "Add Tasks & Schedule",
                description:
                  "Create study tasks with deadlines and priorities. Organize them by subject and difficulty level.",
                details: [
                  'Click "Add New Task"',
                  "Enter task details",
                  "Set priority and deadline",
                  "Assign to subject",
                ],
              },
              {
                step: "03",
                title: "Start Study Session",
                description:
                  "Begin your focused study session with the built-in timer. Choose between 25min, 45min, or 60min sessions.",
                details: ["Select a task", "Choose session duration", 'Click "Start Study"', "Stay focused!"],
              },
              {
                step: "04",
                title: "Track Progress",
                description: "Monitor your daily progress, study streaks, and subject-wise performance in real-time.",
                details: ["View dashboard", "Check subject progress", "Review study history", "Celebrate milestones"],
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group grid md:grid-cols-2 gap-8 items-center p-8 rounded-xl bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 ${idx % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right"}`}
                style={{ animationDelay: `${0.15 * idx}s` }}
              >
                <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                  <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-slate-900">{item.title}</h3>
                  <p className="text-slate-600 mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.details.map((detail, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700 font-medium">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                <div
                  className={`h-64 rounded-lg bg-gradient-to-br from-blue-200/30 to-purple-200/30 border-2 border-blue-300 flex items-center justify-center transform transition-transform group-hover:scale-105 ${idx % 2 === 1 ? "md:order-1" : ""}`}
                >
                  <div className="text-center">
                    <div className="text-6xl mb-2 animate-float">
                      {idx === 0 && "📋"}
                      {idx === 1 && "✓"}
                      {idx === 2 && "⏱"}
                      {idx === 3 && "📈"}
                    </div>
                    <p className="text-slate-600 font-semibold">Step {item.step}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="kiosk-setup"
        className="py-20 px-4 relative bg-gradient-to-b from-transparent via-blue-50/50 to-transparent"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fade-in text-slate-900">
            Windows Kiosk Mode Setup
          </h2>
          <p
            className="text-center text-slate-600 mb-16 animate-fade-in font-medium"
            style={{ animationDelay: "0.2s" }}
          >
            Lock your computer to JEE Hub for ultimate focus and distraction-free studying
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Setup Instructions */}
            <div className="space-y-6 animate-slide-in-left" style={{ animationDelay: "0.3s" }}>
              <div className="p-6 rounded-xl bg-white border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900">
                  <Monitor className="text-blue-600" size={28} />
                  Setup Instructions
                </h3>

                <div className="space-y-4">
                  {[
                    {
                      num: "1",
                      title: "Open Settings",
                      desc: "Press Windows + I to open Settings",
                    },
                    {
                      num: "2",
                      title: "Navigate to Accounts",
                      desc: "Go to Accounts → Sign-in options",
                    },
                    {
                      num: "3",
                      title: "Enable Kiosk Mode",
                      desc: 'Scroll down and click "Set up a kiosk or digital sign"',
                    },
                    {
                      num: "4",
                      title: "Choose Account",
                      desc: "Select the account to use for kiosk mode",
                    },
                    {
                      num: "5",
                      title: "Select App",
                      desc: 'Choose "Microsoft Edge" or your browser',
                    },
                    {
                      num: "6",
                      title: "Enter URL",
                      desc: "Paste: https://jeehub.onrender.com/",
                    },
                    {
                      num: "7",
                      title: "Configure Settings",
                      desc: "Set idle timeout and other preferences",
                    },
                    {
                      num: "8",
                      title: "Finish Setup",
                      desc: 'Click "Next" and then "Close" to complete',
                    },
                  ].map((step, idx) => (
                    <div
                      key={idx}
                      className="flex gap-4 pb-4 border-b border-blue-200 last:border-0 animate-fade-in"
                      style={{ animationDelay: `${0.05 * idx}s` }}
                    >
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center font-bold flex-shrink-0 text-white font-semibold">
                        {step.num}
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-700">{step.title}</h4>
                        <p className="text-sm text-slate-600">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Shutdown Instructions */}
            <div className="space-y-6 animate-slide-in-right" style={{ animationDelay: "0.4s" }}>
              <div className="p-6 rounded-xl bg-white border-2 border-blue-200 hover:border-blue-400 transition-all hover:shadow-lg">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-slate-900">
                  <Power className="text-red-600" size={28} />
                  Exit Kiosk Mode
                </h3>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-red-50 border-2 border-red-300">
                    <h4 className="font-semibold text-red-700 mb-2">Important</h4>
                    <p className="text-sm text-red-600">
                      You need admin access to exit kiosk mode. Make sure you have the admin password ready.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg text-slate-900">Method 1: Using Settings</h4>
                    <ol className="space-y-2 text-slate-700">
                      <li className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
                        <span className="text-blue-600 font-bold">•</span>
                        <span>
                          Press{" "}
                          <kbd className="bg-slate-200 px-2 py-1 rounded text-sm font-mono">Ctrl + Alt + Delete</kbd>
                        </span>
                      </li>
                      <li className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.15s" }}>
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Click "Sign out" or "Switch user"</span>
                      </li>
                      <li className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.2s" }}>
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Sign in with admin account</span>
                      </li>
                      <li className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.25s" }}>
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Go to Settings → Accounts → Sign-in options</span>
                      </li>
                      <li className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Click "Set up a kiosk or digital sign" → "Exit kiosk"</span>
                      </li>
                    </ol>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-blue-200">
                    <h4 className="font-semibold text-lg text-slate-900">Method 2: Quick Exit</h4>
                    <ol className="space-y-2 text-slate-700">
                      <li className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.35s" }}>
                        <span className="text-blue-600 font-bold">•</span>
                        <span>
                          Press <kbd className="bg-slate-200 px-2 py-1 rounded text-sm font-mono">Windows + L</kbd> to
                          lock
                        </span>
                      </li>
                      <li className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Enter admin credentials</span>
                      </li>
                      <li className="flex gap-3 animate-fade-in" style={{ animationDelay: "0.45s" }}>
                        <span className="text-blue-600 font-bold">•</span>
                        <span>Kiosk mode will be disabled</span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in text-slate-900">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {[
              {
                q: "Is JEE Hub completely free?",
                a: "Yes! JEE Hub is completely free to use. All features including task management, timer, and analytics are available at no cost.",
              },
              {
                q: "Can I use JEE Hub on mobile devices?",
                a: "JEE Hub is optimized for desktop and laptop use. While it works on mobile, the kiosk mode feature is only available on Windows computers.",
              },
              {
                q: "How do I backup my data?",
                a: "Your data is stored locally in your browser. We recommend exporting your tasks regularly. You can also use browser sync features to backup across devices.",
              },
              {
                q: "What if I forget my password?",
                a: "Since data is stored locally, there's no password. Your data is tied to your browser. Clear browser data will reset everything, so be careful!",
              },
              {
                q: "Can I use JEE Hub offline?",
                a: "JEE Hub requires an internet connection to load initially, but once loaded, most features work offline. Your data syncs when you reconnect.",
              },
              {
                q: "How do I contact support?",
                a: "You can reach out through the app or visit our GitHub repository for issues and feature requests. We're always happy to help!",
              },
            ].map((item, idx) => (
              <details
                key={idx}
                className="group p-6 rounded-xl bg-white border-2 border-blue-200 hover:border-blue-400 transition-all duration-300 cursor-pointer animate-scale-in hover:shadow-lg"
                style={{ animationDelay: `${0.1 * idx}s` }}
              >
                <summary className="flex items-center justify-between font-semibold text-lg text-slate-900">
                  <span>{item.q}</span>
                  <ChevronDown className="group-open:rotate-180 transition-transform text-blue-600" size={24} />
                </summary>
                <p className="mt-4 text-slate-600">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative bg-gradient-to-r from-blue-100 to-purple-100">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in text-slate-900">
            Ready to Master Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              JEE Preparation?
            </span>
          </h2>
          <p className="text-xl text-slate-700 mb-8 animate-fade-in font-medium" style={{ animationDelay: "0.2s" }}>
            Join thousands of JEE aspirants using JEE Hub to achieve their dreams
          </p>
          <a
            href="https://jeehub.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-blue-400/50 transition-all transform hover:scale-105 animate-fade-in animate-glow-pulse"
            style={{ animationDelay: "0.4s" }}
          >
            Start Your Journey Now
          </a>
        </div>
      </section>

      <footer className="border-t-2 border-blue-200 py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="animate-fade-in">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center font-bold text-white">
                  J
                </div>
                <span className="font-bold text-slate-900">JEE Hub</span>
              </div>
              <p className="text-slate-600 text-sm">Your ultimate study companion for JEE preparation</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <h4 className="font-semibold mb-4 text-slate-900">Quick Links</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <a href="#features" className="hover:text-blue-600 transition-colors">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#how-to-use" className="hover:text-blue-600 transition-colors">
                    How to Use
                  </a>
                </li>
                <li>
                  <a href="#kiosk-setup" className="hover:text-blue-600 transition-colors">
                    Kiosk Setup
                  </a>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h4 className="font-semibold mb-4 text-slate-900">Resources</h4>
              <ul className="space-y-2 text-slate-600 text-sm">
                <li>
                  <a
                    href="https://jeehub.onrender.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600 transition-colors"
                  >
                    Launch App
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-blue-600 transition-colors">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <h4 className="font-semibold mb-4 text-slate-900">Connect</h4>
              <p className="text-slate-600 text-sm">Built with passion for JEE aspirants</p>
            </div>
          </div>
          <div className="border-t border-blue-200 pt-8 text-center text-slate-600 text-sm">
            <p>&copy; 2025 JEE Hub. All rights reserved. | Helping you ace your JEE preparation</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
