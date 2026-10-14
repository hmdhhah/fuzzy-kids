import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-t border-gray-200 bg-[#30261c] text-[#a2a09c]">
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid justify-items-center grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Column */}
          <div className="space-y-4">
            <a className="wordmark2" href="#home" aria-label="Fuzzy Kids home">
              <span>fuzzy</span> kids <b>·</b>
            </a>
            <p className="text-sm py-2 pr-6 text-[#f9f7f08c]">
              Natural organic beeswax candles, hand-poured in small numbered
              batches at our apiary. Pure wax, cotton wicks, raw honey — nothing
              else.
            </p>
          </div>

          {/* Links Column 1 */}
          <div>
            <h3 className="text-sm font-light text-[#b23b5c] uppercase tracking-widest ">
              Product
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#f9f7f0b3]">
              <li>
                <Link href="/features" className="hover:text-[gray-900]">
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
            <h3 className="text-sm  font-light text-[#b23b5c] uppercase tracking-widest">
              Company
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[#f9f7f0b3]">
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
        <div className="mt-12 border-t border-[#f9f7f066] pt-8 pb-6 text-center text-xs">
          <p>&copy; {currentYear} MyCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
