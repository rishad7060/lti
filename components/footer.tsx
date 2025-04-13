import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="#" className="text-gray-400 hover:text-primary">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-primary">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-primary">
            <span className="sr-only">Instagram</span>
            <Instagram className="h-6 w-6" aria-hidden="true" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-primary">
            <span className="sr-only">LinkedIn</span>
            <Linkedin className="h-6 w-6" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-8 md:order-1 md:mt-0">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; {new Date().getFullYear()} London Trading Index. All rights reserved.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-8 lg:px-8">
        <div className="border-t border-gray-200 pt-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold leading-6 text-black">Company</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/about" className="text-sm leading-6 text-gray-600 hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-black">Trading</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/challenges" className="text-sm leading-6 text-gray-600 hover:text-primary">
                  Challenges
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-primary">
                  Platforms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-primary">
                  Markets
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-black">Support</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="/faq" className="text-sm leading-6 text-gray-600 hover:text-primary">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-primary">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold leading-6 text-black">Legal</h3>
            <ul className="mt-6 space-y-4">
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-primary">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-primary">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm leading-6 text-gray-600 hover:text-primary">
                  Risk Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
