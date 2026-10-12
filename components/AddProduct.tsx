"use client";

import { useState, type FormEvent } from "react";

type ProductFormData = {
  name: string;
  price: number;
  available: boolean;
  image: string;
  category: string;
};

type AddProductProps = {
  onAddProduct: (product: ProductFormData) => void | Promise<void>;
};

export default function AddProduct({ onAddProduct }: AddProductProps) {
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSaving(true);

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "").trim();
    const price = Number(formData.get("price"));
    const image = String(formData.get("image") ?? "").trim();
    const category = String(formData.get("category") ?? "").trim();
    const available = formData.get("available") === "on";

    if (!name || !image || !category || !Number.isFinite(price) || price <= 0) {
      setError("Enter a name, valid price, image URL, and category.");
      setIsSaving(false);
      return;
    }

    try {
      await onAddProduct({ name, price, available, image, category });
      event.currentTarget.reset();

    } catch {
      setError("Could not add the product. Please try again.");
    } finally {
      setIsSaving(false);
    }
  }

  const fieldClass =
    "mt-1 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-100";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Product name
        </label>
        <input id="name" name="name" required className={fieldClass} />
      </div>

      <div>
        <label htmlFor="price" className="block text-sm font-medium text-gray-700">
          Price (₹)
        </label>
        <input
          id="price"
          name="price"
          type="number"
          min="0.01"
          step="0.01"
          required
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="category" className="block text-sm font-medium text-gray-700">
          Category
        </label>
        <input id="category" name="category" required className={fieldClass} />
      </div>

      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Image URL
        </label>
        <input id="image" name="image" type="url" required className={fieldClass} />
      </div>

      <label className="flex items-center gap-2 text-sm text-gray-700">
        <input
          name="available"
          type="checkbox"
          defaultChecked
          className="size-4 accent-pink-600"
        />
        Available for sale
      </label>

      {error && <p className="text-sm text-red-600">{error}</p>}
      

      <button
        type="submit"
        disabled={isSaving}
        className="rounded-lg bg-pink-600 px-5 py-3 font-medium text-white hover:bg-pink-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSaving ? "Adding product…" : "Add product"}
      </button>
    </form>
  );
}