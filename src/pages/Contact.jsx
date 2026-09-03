import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="container-px mx-auto py-16">
      <div className="mb-14 max-w-xl">
        <h1 className="font-display font-semibold text-4xl md:text-5xl text-ink mb-4">Get in Touch</h1>
        <p className="text-ink/60 leading-relaxed">
          Need help picking a texture, tracking an order, or setting up a wholesale account? We reply within a day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div className="space-y-4">
          {[[Mail, "Email", "hello@noirhairco.com"], [Phone, "Phone", "+234 700 000 0000"], [MapPin, "Studio", "Lagos, Nigeria — by appointment"]].map(([Icon, label, val]) => (
            <div key={label} className="flex gap-4 items-start bg-ink/[0.04] rounded-2xl p-5">
              <Icon size={20} className="text-gold-dark mt-1" strokeWidth={2} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-ink/40">{label}</p>
                <p className="text-ink mt-1">{val}</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-ink/40 block mb-2">Name</label>
            <input required className="w-full bg-ink/[0.05] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold transition-shadow" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-ink/40 block mb-2">Email</label>
            <input required type="email" className="w-full bg-ink/[0.05] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold transition-shadow" />
          </div>
          <div>
            <label className="text-xs font-semibold uppercase tracking-wide text-ink/40 block mb-2">Message</label>
            <textarea required rows={4} className="w-full bg-ink/[0.05] rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-gold transition-shadow resize-none" />
          </div>
          <button type="submit" className="bg-gold text-ink font-semibold px-9 py-3.5 rounded-full text-sm hover:bg-gold-light transition-colors">
            {sent ? "Message Sent" : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
}