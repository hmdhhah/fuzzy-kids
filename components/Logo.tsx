import Link from 'next/link'
import React from 'react'

const Logo = () => {
  return (
    <div>
         <Link className="wordmark" href={"/"} aria-label="Fuzzy Kids home">
          <span>fuzzy</span> kids <b>·</b>
        </Link>
    </div>
  )
}

export default Logo