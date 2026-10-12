"use client";
import AddProduct from "@/components/AddProduct";
import ProductCard from "@/components/Products";
import axios from "axios";
import { useState } from "react";

export default function AdminPage() {
  const [showForm, setShowForm] = useState(false);

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-6xl">
        <header className="mb-8">
          <p className="text-sm font-medium uppercase tracking-widest text-pink-600">
            Fuzzy Kids
          </p>
          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            Admin Dashboard
          </h1>
          <p className="mt-2 text-gray-600">
            Manage your products and store inventory.
          </p>
        </header>

        <section className="rounded-xl border bg-white p-6 shadow-sm">
          <div className="flex justify-between items-center">
                      <h2 className="text-xl font-semibold text-gray-900">Products</h2>

          {showForm ? (
            <AddProduct
              onAddProduct={async (product) => {
                console.log(product, "product");
                const res = await axios({
                  url: "/api/products",
                  method: "POST",
                  data: product,
                });

                // const response = await fetch("/api/products", {
                //   method: "POST",
                //   headers: { "Content-Type": "application/json" },
                //   body: JSON.stringify(product),
                // });

                // if (!response.ok) {
                //   throw new Error("Could not save product");
                // }
              }}
            />
          ) : (
            <button
              type="button"
              className="mt-5 rounded-lg bg-pink-600 px-5 py-3 font-medium text-white hover:bg-pink-700"
              onClick={() => {
                setShowForm(true);
              }}
            >
              Add New Product
            </button>
          )}
          </div>

           <section>
          <ProductCard isAdmin={true}/>
        </section>
        </section>
       
      </div>
    </main>
  );
}
