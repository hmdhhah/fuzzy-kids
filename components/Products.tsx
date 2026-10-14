"use client";

import axios from "axios";
import { SquarePen, Trash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number;
  available: boolean;
  image?: string;
  category?: string;
};
type ProductCardProps = {
  isAdmin?: boolean;
  onEdit?: (product: Product) => void;
  onDelete?: (id: string) => void;
};

export default function ProductCard({
  isAdmin,
  onEdit,
  onDelete,
}: ProductCardProps) {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editingId, setEditingId] = useState<number | null>(null);
  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await axios({
          url: "/api/products",
          method: "GET",
        });
        const data: Product[] = res.data;
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
    <div className="p-4 grid grid-cols-3 ">
      {products.map((product) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <div
            key={product.id}
            className="group relative mx-2 mt-8 rounded-[20px] border border-gray-200 bg-[#FBF5E6] p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="relative h-48 w-full overflow-hidden rounded-md bg-gray-100">
              <Image
                src={product.image || "/images/plush-hero.png"}
                alt={product.name}
                fill
                unoptimized
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
                <p>{product.name}</p>
              </h3>

              <div className="mt-2 flex items-center justify-between gap-3">
                <p className="price">₹{Number(product.price).toFixed(2)}</p>
                {isAdmin ? (
                  <div>
                    <button
                      className="bg-[#b23b5c]   rounded-4xl font-light  px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer"
                      onClick={() => setEditingId(product.id)}
                    >
                      <SquarePen />
                    </button>
                    <button className="bg-[#b23b5c]   rounded-4xl font-light  px-4 py-3 mx-2 text-sm disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer ">
                      <Trash />
                    </button>
                  </div>
                ) : (
                  <button
                    type="button"
                    disabled={!product.available}
                    className="addtobag px-4 py-3 text-sm disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {product.available ? "Add to Bag" : "Out of Stock"}
                  </button>
                )}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
