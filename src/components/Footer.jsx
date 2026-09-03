import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink text-cream">
      <div className="container-px mx-auto py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <p className="font-display font-semibold text-3xl mb-4">Noir Hair Co.</p>
          <p className="text-cream/60 max-w-sm text-sm leading-relaxed">
            Premium remy human hair — bundles, closures and install-ready wigs, cut and coloured for bold everyday wear.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-gold uppercase mb-4">Shop</p>
          <ul className="space-y-3 text-sm text-cream/70">
            <li><Link to="/shop" className="hover:text-cream">All Products</Link></li>
            <li><Link to="/about" className="hover:text-cream">Our Story</Link></li>
            <li><Link to="/contact" className="hover:text-cream">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold tracking-wide text-gold uppercase mb-4">Follow</p>
          <div className="flex gap-4 text-sm text-cream/70">
            <a href="#" className="hover:text-cream">Instagram</a>
            <a href="#" className="hover:text-cream">TikTok</a>
          </div>
        </div>
      </div>
      <div className="border-t border-cream/10 py-6 text-center text-xs text-cream/40">
        <p>© {new Date().getFullYear()} Noir Hair Co. All rights reserved.</p>
        <p className="mt-1.5">
          Created by:{" "}
          <a
            href="https://wa.me/qr/7AQDB3GTR3MOB1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold hover:text-gold-light underline underline-offset-2"
          >
            JoeCode
          </a>
        </p>
      </div>
    </footer>
  );
}