import { IMAGES } from "../data/products";

export default function About() {
  return (
    <div>
      <section className="container-px mx-auto pt-14 pb-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <img src={IMAGES.wigDisplay} alt="Noir Hair Co. studio" className="aspect-[4/5] object-cover rounded-2xl shadow-[0_2px_10px_rgba(18,17,16,0.10)] order-2 md:order-1" />
        <div className="order-1 md:order-2">
          <p className="text-xs font-semibold tracking-wide uppercase text-gold-dark mb-4">Our Story</p>
          <h1 className="font-display font-semibold text-4xl md:text-5xl text-ink leading-tight mb-6">
            Built by braiders,<br /> for braiders.
          </h1>
          <p className="text-ink/60 leading-relaxed mb-4">
            Noir Hair Co. started as a side table at a Lagos hair market, where our founder sold the bundles she couldn't find anywhere else — hair that actually matched what stylists asked for.
          </p>
          <p className="text-ink/60 leading-relaxed">
            Today we work directly with a small network of vetted suppliers, cut and colour every piece in-house, and quality-check every single bundle before it ships.
          </p>
        </div>
      </section>

      <section className="bg-espresso text-cream">
        <div className="container-px mx-auto py-16 grid grid-cols-1 sm:grid-cols-3 gap-10 text-center">
          {[["2021", "Founded in Lagos"], ["100%", "Single-donor remy hair"], ["9k+", "Installs shipped"]].map(([n, l]) => (
            <div key={l}>
              <p className="font-display font-semibold text-4xl">{n}</p>
              <p className="text-xs tracking-wide uppercase text-cream/60 mt-2">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="container-px mx-auto py-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[["Single-donor only", "No mixed bundles — every piece is traced to one donor, so it behaves consistently from root to end."], ["Salon-finished", "Cut, coloured and steamed before it ships, so it's install-ready straight out of the pack."], ["Direct sourcing", "We work with a small, vetted supplier network instead of anonymous wholesalers."]].map(([title, body]) => (
          <div key={title} className="bg-white rounded-2xl shadow-[0_2px_10px_rgba(18,17,16,0.08)] p-7">
            <h3 className="font-display font-semibold text-xl text-ink mb-3">{title}</h3>
            <p className="text-sm text-ink/60 leading-relaxed">{body}</p>
          </div>
        ))}
      </section>
    </div>
  );
}