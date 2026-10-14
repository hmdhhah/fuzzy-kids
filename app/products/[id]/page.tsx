"use client";

import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type Product = {
  id: number;
  name: string;
  price: number | string;
  available: boolean;
  image: string | null;
  category: string | null;
};

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadProduct() {
      try {
        const response = await axios.get(`/api/products/${params.id}`);
        setProduct(response.data);
      } catch {
        setError("We couldn’t find this product.");
      } finally {
        setLoading(false);
      }
    }

    if (params.id) void loadProduct();
  }, [params.id]);

  if (loading) {
    return <main className="grid min-h-screen place-items-center text-stone-500">Loading product…</main>;
  }

  if (error || !product) {
    return (
      <main className="grid min-h-screen place-items-center bg-[#faf8f5] px-6 text-center">
        <div>
          <p className="text-lg font-medium text-stone-800">{error || "Product not found."}</p>
          <Link href="/" className="mt-4 inline-block text-sm underline underline-offset-4">
            Back to shop
          </Link>
        </div>
      </main>
    );
  }

  const price = Number(product.price);

  return (
    <main className="min-h-screen bg-[#faf8f5] text-stone-900">
      <header className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          fuzzy<span className="font-normal"> kids</span>
          <span className="text-rose-500">.</span>
        </Link>
        <Link href="/" className="text-sm text-stone-500 transition hover:text-stone-900">
          ← Back to shop
        </Link>
      </header>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 pb-20 pt-6 md:grid-cols-2 md:gap-16 md:pt-10">
        <div className="relative  overflow-hidden rounded-[2rem] bg-[#f0e9df]">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          ) : (
            <div className="grid h-full place-items-center text-sm text-stone-400">
              Product image coming soon
            </div>
          )}
          <span className="absolute left-5 top-5 rounded-full bg-white/85 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] backdrop-blur">
            {product.category || "Made for cuddles"}
          </span>
        </div>

        <div className="flex flex-col justify-center py-2 md:py-8">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#b23b5c]">
            A little friend for big adventures
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {product.name}
          </h1>

          <p className="mt-5 text-2xl font-medium">₹{price.toFixed(2)}</p>

          <p className="mt-6 max-w-lg leading-7 text-stone-600">
            Soft, sweet, and ready for a cuddle. This special friend makes
            playtime a little warmer and bedtime a little cozier.
          </p>

          <div className="mt-8 flex items-center gap-3 text-sm">
            <span className={`size-2 rounded-full ${product.available ? "bg-emerald-500" : "bg-stone-300"}`} />
            <span className="text-stone-600">
              {product.available ? "Ready for a new home" : "Currently out of stock"}
            </span>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="flex h-14 items-center rounded-full border border-stone-200 bg-white">
              <button
                type="button"
                aria-label="Decrease quantity"
                onClick={() => setQuantity((value) => Math.max(1, value - 1))}
                className="grid size-12 place-items-center text-lg text-stone-500 hover:text-stone-900"
              >
                −
              </button>
              <span className="w-6 text-center text-sm">{quantity}</span>
              <button
                type="button"
                aria-label="Increase quantity"
                onClick={() => setQuantity((value) => value + 1)}
                className="grid size-12 place-items-center text-lg text-stone-500 hover:text-stone-900"
              >
                +
              </button>
            </div>

            <button
              type="button"
              disabled={!product.available}
              className="h-14 flex-1 cursor-pointer rounded-full bg-[#f0e9df]  px-8 text-sm font-medium text-white transition hover:bg-[#b23b5c]  disabled:cursor-not-allowed disabled:bg-stone-300"
            >
              {product.available ? `Add ${quantity} to bag` : "Out of stock"}
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 border-t border-stone-200 pt-6 text-center text-xs text-stone-500">
            <div>Soft to hug</div>
            <div className="border-x border-stone-200">Gift-ready</div>
            <div>Made with care</div>
          </div>
        </div>
      </section>
    </main>
  );
}