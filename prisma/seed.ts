import "dotenv/config";
import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({
  adapter,
});

async function main() {
  await prisma.product.createMany({
    data: [
      {
        name: "Kids T-Shirt",
        price: 499,
        available: true,
      },
      {
        name: "Kids Hoodie",
        price: 899,
        available: true,
      },
      {
        name: "Kids Jeans",
        price: 999,
        available: true,
      },
    ],
  });

  console.log("Products seeded successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


