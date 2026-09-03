import { Link } from "react-router-dom";
import { products, IMAGES } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Star, MapPin, Mail } from "lucide-react";

const testimonials = [
  { quote: "Three washes in and it still holds the wave. Never had that with mixed-donor hair before.", name: "Bisola K.", role: "Verified customer" },
  { quote: "The lace front looked like my own hairline out of the box. Barely had to pluck it.", name: "Ngozi E.", role: "Verified customer" },
  { quote: "Ordered on a Tuesday, installed by Friday. Fastest shipping I've had from a Lagos supplier.", name: "Funke A.", role: "Verified customer" },
];

const steps = [
  ["Source", "We work with a small, vetted network of suppliers — no anonymous wholesalers."],
  ["Cut & colour", "Every piece is finished in-house before it's photographed or listed."],
  ["Quality check", "Each bundle is steamed and checked for shedding before it's packed."],
  ["Ship", "Orders leave our Lagos studio within 48 hours, tracked door to door."],
];

export default function Home() {
  const featured = products.slice(0, 4);

  return (
    <div>
      {/* 1. Full-bleed hero */}
      <section className="relative h-[78vh] min-h-[520px] overflow-hidden">
        <img src={IMAGES.hero} alt="Noir Hair Co." className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
        <div className="relative h-full container-px mx-auto flex flex-col justify-end pb-16">
          <h1 className="font-display font-semibold text-cream text-5xl md:text-7xl leading-[0.95] max-w-2xl">
            Texture that holds. Colour that lasts.
          </h1>
          <p className="text-cream/80 max-w-md mt-5 leading-relaxed">
            Single-donor remy bundles, closures and install-ready wigs — cut, coloured and quality-checked before they ever leave the studio.
          </p>
          <div className="mt-8 flex gap-4">
            <Link to="/shop" className="bg-gold text-ink px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-gold-light transition-colors">Shop Bundles &amp; Wigs</Link>
            <Link to="/about" className="border border-cream text-cream px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-cream hover:text-ink transition-colors">Our Story</Link>
          </div>
        </div>
      </section>

      {/* 2. Feature strip */}
      <section className="bg-espresso text-cream">
        <div className="container-px mx-auto py-7 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          {[["100% Remy", "Single-donor human hair, always"], ["Cut & Coloured", "Salon-finished before shipping"], ["Install-Ready", "No pre-styling required"]].map(([t, s]) => (
            <div key={t}>
              <p className="font-display font-semibold text-lg">{t}</p>
              <p className="text-xs text-cream/60 mt-1">{s}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Featured */}
      <section className="container-px mx-auto py-20">
        <div className="flex items-end justify-between mb-10 gap-4">
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink">This Week's Picks</h2>
          <Link to="/shop" className="text-sm font-semibold text-ink border-b-2 border-gold pb-0.5">Shop all →</Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* 4. Editorial band */}
      <section className="container-px mx-auto pb-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <img src={IMAGES.silhouette} alt="Noir Hair Co. texture" className="aspect-[4/5] object-cover rounded-2xl shadow-[0_2px_10px_rgba(18,17,16,0.10)]" />
        <div>
          <p className="text-xs font-semibold tracking-wide uppercase text-gold-dark mb-4">How We Source</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink leading-tight mb-5">Every bundle traced to one donor.</h2>
          <p className="text-ink/60 leading-relaxed max-w-md mb-7">
            Mixed-donor hair tangles and sheds unevenly because the cuticles run in different directions. We only sell single-donor hair, so every bundle behaves the same way from root to end.
          </p>
          <Link to="/shop" className="inline-block bg-ink text-cream px-8 py-3.5 rounded-full font-semibold text-sm hover:bg-espresso transition-colors">Browse the Collection</Link>
        </div>
      </section>

      {/* 5. Testimonials */}
      <section className="bg-ink/[0.03]">
        <div className="container-px mx-auto py-20">
          <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink text-center mb-12">Real installs, real reviews</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-cream rounded-2xl shadow-[0_2px_10px_rgba(18,17,16,0.08)] p-7">
                <div className="flex gap-0.5 mb-4 text-gold">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" strokeWidth={0} />)}
                </div>
                <p className="text-ink/70 leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
                <p className="text-sm text-ink font-semibold">{t.name}</p>
                <p className="text-xs text-ink/40">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Process */}
      <section className="container-px mx-auto py-20">
        <p className="text-xs font-semibold tracking-wide uppercase text-gold-dark text-center mb-3">From Source to Studio</p>
        <h2 className="font-display font-semibold text-3xl md:text-4xl text-ink text-center mb-14">How every install starts</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(([title, body], i) => (
            <div key={title} className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(18,17,16,0.08)] p-6">
              <p className="font-display font-semibold text-3xl text-gold-dark mb-3">0{i + 1}</p>
              <p className="font-display font-semibold text-lg text-ink mb-2">{title}</p>
              <p className="text-sm text-ink/55 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 7. Gallery */}
      <section className="bg-espresso text-cream py-20">
        <div className="container-px mx-auto mb-10 text-center">
          <p className="text-xs font-semibold tracking-wide uppercase text-gold mb-3">@noirhairco</p>
          <h2 className="font-display font-semibold text-3xl md:text-4xl">Tag us in your install</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 container-px mx-auto">
          {[IMAGES.hero, IMAGES.wigDisplay, IMAGES.silhouette, IMAGES.hero].map((src, i) => (
            <div key={i} className="aspect-square overflow-hidden rounded-2xl">
              <img src={src} alt="Noir Hair Co. community" className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* 8. Newsletter + location */}
      <section className="container-px mx-auto py-24">
        <div className="bg-ink text-cream rounded-3xl p-10 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-xs font-semibold tracking-wide uppercase text-gold mb-4">Stay in the loop</p>
            <h2 className="font-display font-semibold text-3xl mb-4">First look at new textures.</h2>
            <p className="text-cream/60 mb-6 max-w-sm">Restocks, new arrivals, and the occasional discount code — no spam, unsubscribe any time.</p>
            <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
              <input type="email" required placeholder="you@email.com" className="flex-1 bg-cream/10 rounded-full px-5 py-3 text-sm text-cream placeholder:text-cream/40 focus:outline-none focus:ring-2 focus:ring-gold" />
              <button className="bg-gold text-ink rounded-full px-7 py-3 text-sm font-semibold hover:bg-gold-light transition-colors">Subscribe</button>
            </form>
          </div>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-gold mt-0.5" strokeWidth={2} />
              <div>
                <p className="text-sm text-cream">Studio</p>
                <p className="text-sm text-cream/60">Lagos, Nigeria — by appointment</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail size={18} className="text-gold mt-0.5" strokeWidth={2} />
              <div>
                <p className="text-sm text-cream">Email</p>
                <p className="text-sm text-cream/60">hello@noirhairco.com</p>
              </div>
            </div>
            <Link to="/contact" className="inline-block mt-2 text-sm text-gold border-b border-gold/40 pb-0.5 hover:border-gold">Get in touch →</Link>
          </div>
        </div>
      </section>
    </div>
  );
}