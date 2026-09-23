import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProductOptions from "../../../components/ProductOptions";
import SiteHeader from "../../../components/SiteHeader";
import { products } from "../../../data/products";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((item) => item.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f4f5f7] text-[#111111]">
      <SiteHeader />

      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <Link
          href="/products"
          className="text-sm text-black/50 transition hover:text-black"
        >
          ← Back to products
        </Link>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="flex min-h-[400px] items-center justify-center rounded-[2rem] border border-white/80 bg-white/60 p-8 shadow-[0_16px_50px_rgba(30,50,90,0.05)] backdrop-blur-xl">
            <Image
              src={product.imageSrc}
              alt={product.imageAlt}
              width={800}
              height={800}
              className="max-h-[500px] w-auto max-w-full object-contain"
            />
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-black/45">
              {product.category}
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.05em] md:text-6xl">
              {product.name}
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
              {product.description}
            </p>

            <ProductOptions product={product} />
          </div>
        </div>
      </div>
    </main>
  );
}