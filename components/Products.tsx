// components/ProductCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
}



export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className=" mt-14 mx-7 group relative rounded-lg border border-gray-200 bg-[#FBF5E6] p-4 shadow-sm transition-hover hover:shadow-md">
      {/* Product Image Wrapper */}
      <div className="relative h-48 w-full overflow-hidden rounded-md bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product Details */}
      <div className="mt-4 flex flex-col gap-1">
        <p className="text-xs text-gray-500 uppercase tracking-wider">{product.category}</p>
        <h3 className="text-sm font-semibold text-gray-900">
          <Link href={`/products/${product.id}`}>
            <span aria-hidden="true" className="absolute inset-0" />
            {product.name}
          </Link>
        </h3>
        <div className='flex justify-between items-center'>
        <p className="mt-1 text-sm font-bold text-gray-900">${product.price.toFixed(2)}</p>
        <button className='addtobag px-4 py-3 text-[14px] '>Add to Bag</button>
        </div>
      </div>
    </div>
  );
}
