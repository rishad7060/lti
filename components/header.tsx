"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Home", href: "/" },
  { name: "How It Works", href: "/how-it-works" },
  { name: "Challenges", href: "/challenges" },
  { name: "Affiliates", href: "/affiliates" },
  { name: "About LTI", href: "/about" },
  { name: "FAQ", href: "/faq" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center">
            <span className="sr-only">London Trading Index</span>
            <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center text-white font-bold mr-2">
              LTI
            </div>
            <span className="text-xl font-bold hidden sm:block text-black">London Trading Index</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-600"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 transition-colors ${
                pathname === item.href ? "text-primary border-b-2 border-primary" : "text-black hover:text-primary"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Button asChild variant="default" className="bg-primary hover:bg-primary/90 glow">
            <Link href="/login">Client Portal</Link>
          </Button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 glass-effect">
          <div className="fixed inset-0 flex">
            <div className="relative flex w-full flex-col overflow-y-auto pt-5 pb-4">
              <div className="flex items-center justify-between px-6">
                <Link href="/" className="-m-1.5 p-1.5 flex items-center">
                  <div className="h-10 w-10 rounded-md bg-primary flex items-center justify-center text-white font-bold mr-2">
                    LTI
                  </div>
                  <span className="text-xl font-bold text-black">London Trading Index</span>
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <X className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="space-y-2 py-6 px-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block py-3 text-base font-semibold leading-7 ${
                        pathname === item.href
                          ? "text-primary border-l-4 border-primary pl-2"
                          : "text-black hover:text-primary"
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6 px-6">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 glow">
                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                      Client Portal
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
