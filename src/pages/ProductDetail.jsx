import { useParams, Link, Navigate } from "react-router-dom";
import { getProduct, products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Check } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const product = getProduct(id);

  if (!product) return <Navigate to="/shop" replace />;

  const related = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <div className="container-px mx-auto py-14">
      <nav className="text-xs text-ink/50 mb-10">
        <Link to="/" className="hover:text-ink">Home</Link>
        <span className="mx-2">/</span>
        <Link to="/shop" className="hover:text-ink">Shop</Link>
        <span className="mx-2">/</span>
        <span className="text-ink/80">{product.name}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
        <div className="aspect-square overflow-hidden rounded-2xl shadow-[0_2px_10px_rgba(18,17,16,0.10)]">
          <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        </div>

        <div className="md:pt-2">
          <p className="text-xs font-semibold tracking-wide uppercase text-gold-dark mb-3">{product.category}</p>
          <h1 className="font-display font-semibold text-4xl text-ink mb-3">{product.name}</h1>
          <p className="text-2xl font-semibold text-ink mb-6">${product.price}</p>
          <p className="text-ink/60 leading-relaxed mb-8">{product.description}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8 text-sm bg-ink/[0.04] rounded-2xl p-6">
            <div>
              <p className="text-ink/40 mb-1">Length</p>
              <p className="text-ink font-medium">{product.length}</p>
            </div>
            <div>
              <p className="text-ink/40 mb-1">Texture</p>
              <p className="text-ink font-medium">{product.texture}</p>
            </div>
            <div>
              <p className="text-ink/40 mb-1">Origin</p>
              <p className="text-ink font-medium">{product.origin}</p>
            </div>
          </div>

          <ul className="space-y-2.5 mb-10">
            {product.details.map((d) => (
              <li key={d} className="flex items-start gap-2.5 text-sm text-ink/70">
                <Check size={16} className="text-gold-dark mt-0.5 shrink-0" />
                {d}
              </li>
            ))}
          </ul>

          <button className="w-full sm:w-auto bg-gold text-ink font-semibold px-10 py-4 rounded-full text-sm hover:bg-gold-light transition-colors">
            Add to Bag — ${product.price}
          </button>
        </div>
      </div>

      <section className="mt-24">
        <h2 className="font-display font-semibold text-2xl text-ink mb-8">Complete the look</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {related.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>
    </div>
  );
}