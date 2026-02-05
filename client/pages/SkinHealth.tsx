import Layout from "@/components/Layout";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function SkinHealth() {
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
            Skin Health Guide
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Understanding your skin and how to care for it
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-brown-dark transition-colors">Home</Link>
          <ChevronRight size={16} />
          <span className="text-brown-dark font-medium">Skin Health</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div>
          <p className="font-serif text-gold text-sm uppercase tracking-widest mb-4 font-semibold">
            Understanding Your Skin
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-dark mb-6">
            The Three Layers of Skin
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Your skin is composed of three essential layers, each playing a vital role in protecting your body and maintaining overall health. Understanding these layers is key to developing an effective skincare routine.
          </p>

          {/* Epidermis */}
          <div className="bg-gold-light/20 border-l-4 border-gold p-8 rounded-sm mb-8">
            <h3 className="font-display text-2xl font-bold text-brown-dark mb-3">
              The Epidermis (Outer Layer)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The epidermis is your skin's outermost layer and your first line of defense against the environment. It contains melanin, which protects against sun damage, and is constantly shedding and renewing itself. This layer is where most visible skin concerns appear, making it the focus of most skincare treatments.
            </p>
          </div>

          {/* Dermis */}
          <div className="bg-cobalt-light/20 border-l-4 border-cobalt p-8 rounded-sm mb-8">
            <h3 className="font-display text-2xl font-bold text-brown-dark mb-3">
              The Dermis (Middle Layer)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Beneath the epidermis lies the dermis, a thicker layer containing collagen and elastin—the proteins responsible for your skin's firmness and elasticity. This layer also contains blood vessels and nerves, making it crucial for skin health and resilience. Maintaining collagen in this layer is essential for youthful, supple skin.
            </p>
          </div>

          {/* Subcutis */}
          <div className="bg-gold-light/20 border-l-4 border-gold p-8 rounded-sm mb-8">
            <h3 className="font-display text-2xl font-bold text-brown-dark mb-3">
              The Subcutis (Deep Layer)
            </h3>
            <p className="text-gray-600 leading-relaxed">
              The deepest layer, the subcutis, is composed of fatty tissue and connective material. It provides insulation, cushioning, and energy storage for your body. This layer is essential for skin's volume and plumpness, and maintaining its health contributes to overall skin appearance.
            </p>
          </div>
        </div>

        {/* Healthy Skin Section */}
        <div className="mt-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-dark mb-6">
            What Makes Skin Healthy
          </h2>

          <div className="space-y-6">
            <div>
              <h3 className="font-display text-xl font-bold text-brown-dark mb-3 text-gold">
                Proper Hydration
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Hydrated skin is healthy skin. Water maintains the skin barrier and supports all cellular functions. Both internal hydration and topical moisturizers play crucial roles in maintaining skin health.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-brown-dark mb-3 text-gold">
                Nutrient Support
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Your skin requires vitamins, minerals, and antioxidants to function optimally. These nutrients support cell turnover, collagen production, and protection against environmental damage.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-brown-dark mb-3 text-gold">
                Protection from Damage
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sun damage, pollution, and free radicals are major threats to skin health. Using products with antioxidants and SPF protection is essential for maintaining youthful, healthy skin.
              </p>
            </div>

            <div>
              <h3 className="font-display text-xl font-bold text-brown-dark mb-3 text-gold">
                Regular Care Routine
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Consistency is key. A regular skincare routine that cleanses, nourishes, and protects your skin ensures lasting results and prevents premature aging.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16">
          <Link
            to="/shop"
            className="inline-block border-2 border-cobalt text-cobalt px-8 py-3 font-semibold hover:bg-cobalt hover:text-white transition-colors"
          >
            Explore Our Products
          </Link>
        </div>
      </section>
    </Layout>
  );
}
