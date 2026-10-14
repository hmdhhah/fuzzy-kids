"use client";

import axios from "axios";
import { useEffect, useState } from "react";

type Product = {
  id: number;
  name: string;
  price: number | string;
  available: boolean;
  image: string | null;
  category: string | null;
};

type ProductFormData = {
  name: string;
  price: number;
  available: boolean;
  image: string;
  category: string;
};
type EditProductProps = {
  onEditProduct: (product: ProductFormData) => void | Promise<void>;
};
export default function AdminProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [error, setError] = useState("");

  async function loadProducts() {
    try {
      const response = await axios.get("/api/products");
      setProducts(response.data);
    } catch {
      setError("Could not load products.");
    }
  }

  useEffect(() => {
    void loadProducts();
  }, []);

  async function saveProduct(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (editingId === null) return;

    const form = new FormData(event.currentTarget);

    try {
      await axios.patch(`/api/products/${editingId}`, {
        name: form.get("name"),
        price: form.get("price"),
        image: form.get("image"),
        category: form.get("category"),
        available: form.get("available") === "on",
      });

      setEditingId(null);
      setError("");
      await loadProducts();
      
    } catch {
      setError("Could not save changes.");
    }
  }

  async function deleteProduct(product: Product) {
    const confirmed = window.confirm(
      `Permanently delete "${product.name}"?`,
    );
    if (!confirmed) return;

    try {
      await axios.delete(`/api/products/${product.id}`);
      setProducts((current) =>
        current.filter((item) => item.id !== product.id),
      );
      setError("");
    } catch {
      setError("Could not delete the product.");
    }
  }

  if (products.length === 0 && !error) {
    return <p className="mt-6 text-gray-600">No products found.</p>;
  }

  return (
    <div className="mt-6 space-y-4">
      {error && <p className="text-sm text-red-600">{error}</p>}

      {products.map((product) =>
        editingId === product.id ? (
          <form
            key={product.id}
            onSubmit={saveProduct}
            className="space-y-3 rounded-lg border p-4"
          >
            <input
              name="name"
              defaultValue={product.name}
              required
              className="w-full rounded border p-2"
              aria-label="Product name"
            />
            <input
              name="price"
              type="number"
              min="0.01"
              step="0.01"
              defaultValue={Number(product.price)}
              required
              className="w-full rounded border p-2"
              aria-label="Price"
            />
            <input
              name="category"
              defaultValue={product.category ?? ""}
              className="w-full rounded border p-2"
              aria-label="Category"
            />
            <input
              name="image"
              type="url"
              defaultValue={product.image ?? ""}
              className="w-full rounded border p-2"
              aria-label="Image URL"
            />
            <label className="flex items-center gap-2">
              <input
                name="available"
                type="checkbox"
                defaultChecked={product.available}
              />
              Available for sale
            </label>

            <button className="rounded bg-pink-600 px-4 py-2 text-white" >
              Save
            </button>
            <button
              type="button"
              onClick={() => setEditingId(null)}
              className="ml-2 rounded border px-4 py-2"
            >
              Cancel
            </button>
          </form>
        ) : (
          <div
            key={product.id}
            className="flex flex-wrap items-center justify-between gap-3 rounded-lg border p-4"
          >
            <div>
              <p className="font-medium">{product.name}</p>
              <p className="text-sm text-gray-600">
                ₹{Number(product.price).toFixed(2)} ·{" "}
                {product.available ? "Available" : "Unavailable"}
              </p>
            </div>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setEditingId(product.id)}
                className="rounded border px-3 py-2"
              >
                Edit
              </button>
              <button
                type="button"
                onClick={() => void deleteProduct(product)}
                className="rounded border border-red-300 px-3 py-2 text-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        ),
      )}
    </div>
  );
}