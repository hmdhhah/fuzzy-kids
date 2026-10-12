import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient()
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      where: {
        available: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 },
    );
  }
}
export async function POST(request: Request) {
  const body = await request.json();

  console.log(body, "body");
  const saved1 = await prisma.product.create({
    data: {
      name: body.name,
      price: body.price,
      available: body.available,
      image: body.image,
      category: body.category,
    },
  });
  return Response.json({
    message: "Product created successfully",
    data: saved1,
  });
}
