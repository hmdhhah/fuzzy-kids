import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

type Context = {
  params: Promise<{ id: string }>;
};

export async function PATCH(request: Request, { params }: Context) {
  const { id: rawId } = await params;
  const id = Number(rawId);

  if (!Number.isInteger(id) || id <= 0) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
  }

  try {
    const body = await request.json();
    const name = typeof body.name === "string" ? body.name.trim() : "";
    const price = Number(body.price);
    const image = typeof body.image === "string" ? body.image.trim() : "";
    const category =
      typeof body.category === "string" ? body.category.trim() : "";

    if (!name || !Number.isFinite(price) || price <= 0) {
      return NextResponse.json(
        { error: "Name and a price greater than zero are required" },
        { status: 400 },
      );
    }

    const product = await prisma.product.update({
      where: { id },
      data: {
        name,
        price,
        image,
        category,
        available: Boolean(body.available),
      },
    });

    return NextResponse.json(product);
  } catch {
    return NextResponse.json(
      { error: "Could not update product. It may not exist." },
      { status: 404 },
    );
  }
}

export async function DELETE(_request: Request, { params }: Context) {
  const { id: rawId } = await params;
  const id = Number(rawId);

  if (!Number.isInteger(id) || id <= 0) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
  }

  try {
    await prisma.product.delete({ where: { id } });
    return NextResponse.json({ message: "Product deleted" });
  } catch {
    return NextResponse.json(
      { error: "Could not delete product. It may not exist." },
      { status: 404 },
    );
  }
}

export async function GET(_request: Request, { params }: Context) {
  const { id: rawId } = await params;
  const id = Number(rawId);

  if (!Number.isInteger(id) || id <= 0) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
  }

  try {
    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 });
    }

    return NextResponse.json(product);
  } catch (error) {
    console.error("Failed to fetch product:", error);

    return NextResponse.json(
      { error: "Failed to fetch product" },
      { status: 500 },
    );
  }
}
