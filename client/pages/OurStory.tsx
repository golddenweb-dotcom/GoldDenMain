import Layout from "@/components/Layout";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function OurStory() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-64 md:h-96 bg-gradient-to-b from-gray-50 to-white overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--cobalt)) 100%)`,
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-brown-dark mb-4 tracking-tight">
            Our Story
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            The journey behind The Gold Den
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-brown-dark transition-colors">Home</Link>
          <ChevronRight size={16} />
          <span className="text-brown-dark font-medium">Our Story</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="prose prose-lg text-gray-600 space-y-8">
          <div>
            <p className="font-serif text-gold text-sm uppercase tracking-widest mb-4 font-semibold">
              Our Vision
            </p>
            <h2 className="font-display text-4xl font-bold text-brown-dark mb-6">
              Healing and Renewing
            </h2>
            <p className="leading-relaxed mb-6 text-lg">
              The Gold Den is founded on a passion for healing and renewing the skin—your body's largest and most expressive organ. Composed of three essential layers—the epidermis, dermis, and subcutis—your skin tells the story of your internal health and vitality.
            </p>
          </div>

          <div>
            <p className="leading-relaxed mb-6 text-lg">
              We believe that great skin is one of the ultimate confidence boosters. When your skin feels nourished and healed, you feel good. And when you feel good, it radiates through how you move through the world. This isn't merely about aesthetics; it's about wellness, self-care, and the profound connection between skin health and overall happiness.
            </p>
          </div>

          <div>
            <p className="leading-relaxed mb-6 text-lg">
              Every product we craft is designed with this philosophy at its heart—to support your skin's natural healing and renewal process using nature's finest ingredients. Our commitment to quality, sustainability, and efficacy sets us apart in the luxury beauty industry.
            </p>
          </div>

          <div className="bg-gold-light/20 border-l-4 border-gold p-8 rounded-sm">
            <p className="text-lg italic text-brown-dark">
              "We don't just create skincare products—we create moments of self-care that transform how you feel in your own skin."
            </p>
          </div>

          <div>
            <h3 className="font-display text-2xl font-bold text-brown-dark mb-4">
              Our Commitment
            </h3>
            <p className="leading-relaxed mb-6 text-lg">
              Our mission is to provide the discerning individual with luxury beauty products that deliver real results. We source the finest natural ingredients, combine them with scientific research, and craft every formulation with meticulous attention to detail.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            to="/shop"
            className="inline-block border-2 border-cobalt text-cobalt px-8 py-3 font-semibold hover:bg-cobalt hover:text-white transition-colors"
          >
            Explore Our Products
          </Link>
        </div>
      </section>

      {/* Image Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="overflow-hidden rounded-sm">
          <img
            src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=1200&h=600&fit=crop"
            alt="The Gold Den - Our Story"
            className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      </section>
    </Layout>
  );
}
