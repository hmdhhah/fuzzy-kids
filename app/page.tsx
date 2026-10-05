import ProductCard from '@/components/Products';
import { Product } from '@/types/product';

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
async function getProducts(): Promise<Product[]> {
  return [
    { id: '1', name: 'Minimalist Leather Wallet', price: 45.00, category: 'Accessories', image: '/images/wallet.jpg', description: 'Sleek design.' },
    { id: '2', name: 'Anodized Aluminum Pen', price: 28.50, category: 'Stationery', image: '/images/pen.jpg', description: 'Smooth writing.' },
    { id: '3', name: 'Canvas Everyday Backpack', price: 89.00, category: 'Bags', image: '/images/backpack.jpg', description: 'Durable materials.' },
  ];
}

export default async function Home() {
    const products = await getProducts();

  return (

    
    <main className="storefront">
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
            <BagIcon />
          </button>
        </div>
      </header>

      <section className="hero" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <span className="season-pill">
            NEW SEASON <i>✦</i> 2026
          </span>
          <span className="decor-dot decor-dot-top" />
          <h1 id="hero-title">
            Soft toys,
            <br />
            big smiles.
          </h1>
          <p>
            Handpicked plushies and gift sets crafted with
            <br className="desktop-break" /> love for little ones everywhere.
          </p>
          <div className="hero-actions">
            <a className="button button-light" href="#shop">
              Shop Now
            </a>
            <a className="button button-soft" href="#gift-guide">
              Gift Guide
            </a>
          </div>
          <span className="decor-ring" />
          <span className="decor-dot decor-dot-bottom" />
        </div>
        <div
          className="hero-photo"
          role="img"
          aria-label="A colorful collection of cuddly plush toys"
        >
          <div className="product-card">
            <div className="product-thumb">
              <span>☁</span>
              <span>🐻</span>
              <span>🐰</span>
            </div>
            <div className="product-info">
              <strong>Polar Bear Pals</strong>
              <div className="rating">
                <span aria-label="5 out of 5 stars">★★★★★</span>
                <small>4.9 · 284 reviews</small>
              </div>
            </div>
            <span className="price">$34</span>
          </div>
        </div>
      </section>

      <section
        className="category-peek"
        id="collections"
        aria-label="Shop our collections"
      >
        <a href="#shop">
          <div className="bg-[#FAE0E8] w-fit p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d4547a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=" lucide lucide-truck preview-icon"
            >
              <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
              <path d="M15 18H9" />
              <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
              <circle cx="17" cy="18" r="2" />
              <circle cx="7" cy="18" r="2" />
            </svg>
          </div>
          Best-loved friends
        </a>
        <a href="#shop">
          <div className="bg-[#FAE0E8] w-fit p-3 rounded-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#d4547a"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-refresh-cw color: rgb(212, 84, 122);"
              data-fg-d3bl125="0.8:2009.30674:/src/app/App.tsx:495:17:16956:42:e:Icon"
              data-fgid-d3bl125=":r1s:"
            >
              <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path>
              <path d="M21 3v5h-5"></path>
              <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path>
              <path d="M8 16H3v5"></path>
            </svg>{" "}
          </div>
          Gifts for little ones
        </a>
        <a href="#shop">
          <span>🌼</span> Made for cuddles
        </a>
      </section>

      <span className="help-button" aria-label="Help">
        ?
      </span>

    <section>
  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
    </section>
    </main>
  );
}
