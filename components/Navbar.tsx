import React from 'react'
const SearchIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">

    <circle cx="10.8" cy="10.8" r="7.2" />
    <path d="m16.2 16.2 5 5" />
  </svg>
);

const BagIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M4 8.5h16l1 12H3l1-12Z" />
    <path d="M8 9V6a4 4 0 0 1 8 0v3M9 12c.5 1.2 1.5 1.8 3 1.8s2.5-.6 3-1.8" />
  </svg>
);

export default function Navbar() {
  return (
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Fuzzy Kids home">
          <span>fuzzy</span> kids <b>·</b>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#shop">Shop</a>
          <a href="#collections">Collections</a>
          <a href="#about">About</a>
          <a href="#gift-guide">Gift Guide</a>
        </nav>
        <div className="header-actions">
          <button aria-label="Search" >
            <SearchIcon  />
          </button>
          <button aria-label="Shopping bag">
            <BagIcon/>
          </button>
        </div>
      </header>
  )
}

