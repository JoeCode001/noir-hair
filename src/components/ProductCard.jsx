import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="group block rounded-2xl overflow-hidden shadow-[0_2px_10px_rgba(18,17,16,0.10)] hover:shadow-[0_10px_30px_rgba(18,17,16,0.18)] transition-shadow duration-300">
      <div className="relative aspect-[4/5] overflow-hidden bg-ink/5">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          loading="lazy"
        />
        <span className="absolute top-4 left-4 bg-gold text-ink text-[10px] font-semibold uppercase tracking-wide px-3 py-1.5 rounded-full">
          {product.category}
        </span>
        <div className="absolute inset-x-0 bottom-0 bg-ink px-5 py-4">
          <h3 className="font-display font-semibold text-lg text-cream leading-snug">{product.name}</h3>
          <div className="flex items-center justify-between mt-1.5">
            <p className="text-xs text-cream/50">{product.length}</p>
            <p className="font-body font-semibold text-gold-light">${product.price}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}