import Layout from "@/components/Layout";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NaturalIngredients() {
  const ingredients = [
    {
      name: "Botanical Oils",
      description: "Pumpkin seed, jojoba, olive, and hempseed oils are rich in antioxidants and essential fatty acids that nourish and repair the skin barrier.",
      benefit: "Deep Nourishment",
      details: "These oils penetrate deeply into the skin, providing long-lasting hydration and protection against environmental stressors.",
    },
    {
      name: "Vitamin E",
      description: "A powerful antioxidant that protects skin from environmental stressors and supports the skin's natural healing and renewal processes.",
      benefit: "Protective Care",
      details: "Vitamin E strengthens the skin's natural defense system and helps reduce the appearance of scars and blemishes.",
    },
    {
      name: "Herbal Infusions",
      description: "Chamomile and calendula flowers are medicinal powerhouses that calm, soothe, and promote healing of the skin barrier.",
      benefit: "Gentle Healing",
      details: "These natural botanicals have been used for centuries to treat various skin conditions with proven efficacy.",
    },
  ];

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
            Why Natural Ingredients
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            The power of nature in luxury skincare
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-brown-dark transition-colors">Home</Link>
          <ChevronRight size={16} />
          <span className="text-brown-dark font-medium">Why Natural Ingredients</span>
        </div>
      </div>

      {/* Introduction */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div className="mb-12">
          <p className="font-serif text-gold text-sm uppercase tracking-widest mb-4 font-semibold">
            Ingredient Philosophy
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-dark mb-6">
            Nature's Finest Remedies
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Every ingredient in our Gold Den collection is thoughtfully selected for its healing properties and efficacy. We believe in harnessing the power of nature to support your skin's wellness. Unlike synthetic alternatives, natural ingredients work in harmony with your skin's biology to deliver results that are both visible and sustainable.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our commitment to natural ingredients reflects our belief that true luxury means respecting your skin and the environment. We source responsibly, formulate carefully, and test rigorously to ensure every product exceeds expectations.
          </p>
        </div>
      </section>

      {/* Ingredients Grid */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-dark text-center mb-12">
            Our Key Ingredients
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ingredients.map((ingredient, idx) => (
              <div key={idx} className="bg-white border border-gray-200 rounded-sm p-8 hover:shadow-lg transition-shadow">
                <h3 className="font-display text-2xl font-bold text-brown-dark mb-3">
                  {ingredient.name}
                </h3>
                <p className="text-gold font-semibold text-sm uppercase tracking-wider mb-4">
                  {ingredient.benefit}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {ingredient.description}
                </p>
                <div className="border-t border-gray-200 pt-4">
                  <p className="text-gray-600 text-sm">
                    {ingredient.details}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Natural Section */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-dark mb-8">
          The Natural Advantage
        </h2>

        <div className="space-y-8">
          <div className="bg-gold-light/20 border-l-4 border-gold p-8 rounded-sm">
            <h3 className="font-display text-xl font-bold text-brown-dark mb-2">
              Proven Efficacy
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Natural ingredients have been used for centuries and are backed by modern scientific research. We combine traditional wisdom with contemporary skincare science.
            </p>
          </div>

          <div className="bg-cobalt-light/20 border-l-4 border-cobalt p-8 rounded-sm">
            <h3 className="font-display text-xl font-bold text-brown-dark mb-2">
              Better for Your Skin
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Natural ingredients are gentler and more biocompatible with your skin. They work with your skin's natural processes rather than against them, leading to better long-term results.
            </p>
          </div>

          <div className="bg-gold-light/20 border-l-4 border-gold p-8 rounded-sm">
            <h3 className="font-display text-xl font-bold text-brown-dark mb-2">
              Environmental Responsibility
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We source sustainably and ethically to ensure our beauty doesn't come at the cost of the planet. Natural ingredients are biodegradable and have minimal environmental impact.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cobalt-dark text-white py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Experience the Difference
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Discover our full collection of natural, luxury skincare products.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold text-brown-dark px-8 py-3 font-semibold hover:bg-gold-light transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </section>
    </Layout>
  );
}
