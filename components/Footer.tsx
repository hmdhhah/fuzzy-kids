import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-t border-gray-200 bg-[#3A2415] text-[#a2a09c]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <a className="wordmark2 " href="#home" aria-label="Fuzzy Kids home">
              <span>fuzzy</span> kids <b>·</b>
            </a>
            <p className="text-sm">
              Building beautiful digital experiences with Next.js.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-55 uppercase tracking-wider">
              Product
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/features" className="hover:text-gray-900">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-gray-900">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-gray-900">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-900">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-gray-200 pt-6 text-center text-xs">
          <p>&copy; {currentYear} MyCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
