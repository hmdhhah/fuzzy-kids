
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  available: boolean;
  image: string;
  category?: string;
};

export default function ProductCard() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProducts() {
      try {
        const response = await fetch("/api/products");

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Product loading error:", err);
        setError("Unable to load products. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    loadProducts();
  }, []);

  if (loading) {
    return <p className="mt-10 text-center">Loading products...</p>;
  }

  if (error) {
    return <p className="mt-10 text-center text-red-600">{error}</p>;
  }

  if (products.length === 0) {
    return <p className="mt-10 text-center">No products available.</p>;
  }

  return (
    <div className="p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="group relative mx-2 mt-8 rounded-[20px] border border-gray-200 bg-[#FBF5E6] p-4 shadow-sm transition-shadow hover:shadow-md"
        >
          <div className="relative h-48 w-full overflow-hidden rounded-md bg-gray-100">
            <Image
              src={product.image || "/images/placeholder.jpg"}
              alt={product.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
            />
          </div>

          <div className="mt-4 flex flex-col gap-1">
            {product.category && (
              <p className="text-xs uppercase tracking-wider text-gray-500">
                {product.category}
              </p>
            )}

            <h3 className="text-sm font-semibold text-gray-900">
              <Link href={`/products/${product.id}`}>
                {product.name}
              </Link>
            </h3>

            <div className="mt-2 flex items-center justify-between gap-3">
              {/* <p className="text-sm font-bold text-gray-900">
                ₹{product.price.toFixed(2)}
              </p> */}

              <button
                type="button"
                disabled={!product.available}
                className="addtobag px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
              >
                {product.available ? "Add to Bag" : "Out of Stock"}
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
