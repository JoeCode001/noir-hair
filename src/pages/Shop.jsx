import { useMemo, useState } from "react";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";

const categories = ["All", "Bundles", "Wigs", "Closures", "Care"];

export default function Shop() {
  const [active, setActive] = useState("All");

  const filtered = useMemo(
    () => (active === "All" ? products : products.filter((p) => p.category === active)),
    [active]
  );

  return (
    <div className="container-px mx-auto py-16">
      <div className="mb-10 max-w-xl">
        <h1 className="font-display font-semibold text-4xl md:text-5xl text-ink mb-4">Shop the Collection</h1>
        <p className="text-ink/60 leading-relaxed">
          Bundles, closures, install-ready wigs and the care products to keep them looking studio-fresh.
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-colors ${
              active === c ? "bg-ink text-cream" : "bg-ink/5 text-ink/70 hover:bg-ink/10"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
      </div>
    </div>
  );
}