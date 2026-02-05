import Layout from "@/components/Layout";
import { ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Index() {
  const [activeCategory, setActiveCategory] = useState("serums");

  const categories = [
    {
      id: "serums",
      name: "All Products",
      count: 3,
    },
  ];

  const products = {
    serums: [
      {
        id: 1,
        name: "Pumpkin Seed Renewal Oil",
        description: "Healing essence for KP and damaged skin",
        price: "$89",
        image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=600&fit=crop",
        badge: "Best Seller",
      },
      {
        id: 2,
        name: "Jojoba Rich Night Cream",
        description: "Deep nourishment and barrier repair",
        price: "$94",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=600&fit=crop",
        badge: "New",
      },
      {
        id: 3,
        name: "KP Correcting Serum",
        description: "Targets keratosis pilaris with natural ingredients",
        price: "$95",
        image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&h=600&fit=crop",
        badge: null,
      },
    ],
  };

  const currentProducts =
    products[activeCategory as keyof typeof products] || products.serums;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-96 md:h-screen bg-gradient-to-b from-gray-50 to-white overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(var(--cobalt)) 100%)`,
            }}
          />
        </div>

        <div className="relative z-10 text-center max-w-3xl px-4 md:px-0">
          <p className="font-serif text-gold text-lg md:text-2xl mb-4 tracking-widest uppercase font-semibold">
            Discover Luxury
          </p>
          <h1 className="font-display text-4xl md:text-7xl font-bold text-brown-dark mb-6 tracking-tight">
            The Season of Elegance
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-8 leading-relaxed">
            Immerse yourself in our curated collection of premium skincare and
            wellness essentials. Each product crafted with natural ingredients for
            those who appreciate the finer things.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-cobalt text-white px-8 md:px-12 py-3 md:py-4 font-semibold text-lg hover:bg-cobalt-dark transition-colors"
          >
            Explore Collection
          </Link>
        </div>
      </section>

      {/* Editorial Blocks */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Block 1 */}
          <Link
            to="/shop"
            className="group cursor-pointer overflow-hidden"
          >
            <div className="h-64 md:h-80 bg-gradient-to-br from-gold-light to-gold rounded-sm overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=500&fit=crop"
                alt="Serums and Treatments"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            </div>
            <div className="mt-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-brown-dark mb-2">
                Signature Serums & Oils
              </h2>
              <p className="text-gray-600 flex items-center gap-2 group-hover:gap-4 transition-all">
                Explore our most potent formulations
                <ChevronRight size={20} className="text-gold" />
              </p>
            </div>
          </Link>

          {/* Block 2 */}
          <Link
            to="/shop"
            className="group cursor-pointer overflow-hidden"
          >
            <div className="h-64 md:h-80 bg-gradient-to-br from-cobalt-light to-cobalt rounded-sm overflow-hidden relative">
              <img
                src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=500&fit=crop"
                alt="Skincare Collections"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
            </div>
            <div className="mt-4">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-brown-dark mb-2">
                Skincare Kits & Sets
              </h2>
              <p className="text-gray-600 flex items-center gap-2 group-hover:gap-4 transition-all">
                Complete routines for every skin type
                <ChevronRight size={20} className="text-gold" />
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-dark mb-2">
              Signature Skincare
            </h2>
            <div className="h-1 w-12 bg-gold mb-4 mx-auto" />
            <p className="text-gray-600 text-lg">Three essential products for complete skin wellness</p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {currentProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                <div className="relative overflow-hidden bg-white rounded-sm mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  {product.badge && (
                    <div className="absolute top-3 right-3">
                      <span className="bg-gold text-brown-dark px-3 py-1 text-xs font-semibold uppercase tracking-wider">
                        {product.badge}
                      </span>
                    </div>
                  )}
                </div>
                <div>
                  <h3 className="font-display font-bold text-brown-dark text-lg mb-1 group-hover:text-gold transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-cobalt font-semibold">
                      {product.price}
                    </span>
                    <button className="bg-cobalt text-white px-4 py-2 text-sm font-medium hover:bg-cobalt-dark transition-colors">
                      Add to Bag
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/shop"
              className="inline-block border-2 border-cobalt text-cobalt px-8 py-3 font-semibold hover:bg-cobalt hover:text-white transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* Editorial Section - Our Vision */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="font-serif text-gold text-sm uppercase tracking-widest mb-4 font-semibold">
              Our Vision
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-dark mb-6">
              Healing and Renewing
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The Gold Den is founded on a passion for healing and renewing the skin—your body's largest and most expressive organ. Composed of three essential layers—the epidermis, dermis, and subcutis—your skin tells the story of your internal health and vitality.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We believe that great skin is one of the ultimate confidence boosters. When your skin feels nourished and healed, you feel good. And when you feel good, it radiates through how you move through the world. This isn't merely about aesthetics; it's about wellness, self-care, and the profound connection between skin health and overall happiness.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Every product we craft is designed with this philosophy at its heart—to support your skin's natural healing and renewal process using nature's finest ingredients.
            </p>
            <button className="border-2 border-brown-dark text-brown-dark px-8 py-3 font-semibold hover:bg-brown-dark hover:text-white transition-colors">
              Learn More
            </button>
          </div>
          <div className="overflow-hidden rounded-sm">
            <img
              src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=700&fit=crop"
              alt="The Gold Den - Skin Healing"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Keratosis Pilaris Focus Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="font-serif text-gold text-sm uppercase tracking-widest mb-4 font-semibold">
              Our Specialty
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-dark mb-6">
              Addressing Keratosis Pilaris
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              Keratosis pilaris is a common, harmless skin condition that causes dry, rough patches and tiny bumps—often appearing on the upper arms, thighs, cheeks, or buttocks. It affects more people than you might think.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="font-display text-2xl font-bold text-brown-dark mb-4">
                What Causes It
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Keratosis pilaris occurs when too much keratin—a natural skin protein—builds up and blocks hair follicles and pores. This buildup leads to the characteristic small, hard bumps and rough texture. While harmless, it can be uncomfortable and affect how you feel in your own skin.
              </p>
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-brown-dark mb-4">
                Our Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We've formulated our products specifically to help repair, heal, and prevent keratosis pilaris using nature's most potent remedies. By combining carefully selected natural and herbal ingredients, we work to support your skin's natural healing process and restore its smoothness and vitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Natural Ingredients Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="font-serif text-gold text-sm uppercase tracking-widest mb-4 font-semibold">
            Ingredient Philosophy
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-dark mb-6">
            Nature's Finest Remedies
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Every ingredient in our Gold Den collection is thoughtfully selected for its healing properties and efficacy. We believe in harnessing the power of nature to support your skin's wellness.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-gray-200 rounded-sm p-8">
            <h3 className="font-display text-xl font-bold text-brown-dark mb-3">
              Botanical Oils
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">
              Pumpkin seed, jojoba, olive, and hempseed oils are rich in antioxidants and essential fatty acids that nourish and repair the skin barrier.
            </p>
            <p className="text-gold font-semibold text-sm uppercase tracking-wider">
              Deep Nourishment
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-sm p-8">
            <h3 className="font-display text-xl font-bold text-brown-dark mb-3">
              Vitamin E
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">
              A powerful antioxidant that protects skin from environmental stressors and supports the skin's natural healing and renewal processes.
            </p>
            <p className="text-gold font-semibold text-sm uppercase tracking-wider">
              Protective Care
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-sm p-8">
            <h3 className="font-display text-xl font-bold text-brown-dark mb-3">
              Herbal Infusions
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm mb-4">
              Chamomile and calendula flowers are medicinal powerhouses that calm, soothe, and promote healing of the skin barrier.
            </p>
            <p className="text-gold font-semibold text-sm uppercase tracking-wider">
              Gentle Healing
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-cobalt-dark text-white py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Inspired by Luxury
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Subscribe to receive exclusive offers, product launches, and beauty
            tips.
          </p>
          <div className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-sm text-brown-dark focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button className="bg-gold text-brown-dark px-8 py-3 font-semibold hover:bg-gold-light transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
