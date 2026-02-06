import Layout from "@/components/Layout";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function NewArrivals() {
  const products = [
    {
      id: 2,
      name: "Jojoba Rich Night Cream",
      description: "Deep nourishment and barrier repair",
      price: "$94",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=600&fit=crop",
      badge: "New",
      launchDate: "Recently Launched",
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
            New Arrivals
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Discover our latest luxury skincare innovations
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-brown-dark transition-colors">Home</Link>
          <ChevronRight size={16} />
          <span className="text-brown-dark font-medium">New Arrivals</span>
        </div>
      </div>

      {/* Products Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-dark mb-2">
              Latest Releases
            </h2>
            <div className="h-1 w-12 bg-gold mb-4 mx-auto" />
            <p className="text-gray-600 text-lg">Be the first to experience our newest formulations</p>
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {products.map((product) => (
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
                  <p className="text-gray-600 text-sm mb-2">
                    {product.description}
                  </p>
                  <p className="text-gold text-xs font-semibold italic mb-3">
                    {product.launchDate}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-cobalt font-semibold">
                      {product.price}
                    </span>
                    <a href="https://buy.stripe.com/test_dRm9ATeGd8Scd0Iciya3u00">
                    <button className="bg-cobalt text-white px-4 py-2 text-sm font-medium hover:bg-cobalt-dark transition-colors">
                      Buy Now
                    </button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Info Section */}
          <div className="bg-white border border-gray-200 rounded-sm p-8">
            <h3 className="font-display text-2xl font-bold text-brown-dark mb-6">
              About Our New Products
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Our new arrivals represent the latest innovations in luxury skincare. Each product is carefully formulated using cutting-edge research combined with time-tested natural ingredients. We're constantly exploring new ways to enhance your skincare experience.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Be among the first to experience these exclusive formulations and see why The Gold Den continues to lead the industry in premium natural skincare.
            </p>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-dark text-center mb-12">
          What's Coming Next
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gold-light/20 border-l-4 border-gold p-8 rounded-sm">
            <h3 className="font-display text-xl font-bold text-brown-dark mb-2">
              Enhanced Formulas
            </h3>
            <p className="text-gray-600 leading-relaxed">
              We're working on upgraded versions of your favorite products with even more potent ingredients and improved textures.
            </p>
          </div>

          <div className="bg-cobalt-light/20 border-l-4 border-cobalt p-8 rounded-sm">
            <h3 className="font-display text-xl font-bold text-brown-dark mb-2">
              Targeted Solutions
            </h3>
            <p className="text-gray-600 leading-relaxed">
              New specialized products addressing specific skin concerns and conditions are in development.
            </p>
          </div>

          <div className="bg-gold-light/20 border-l-4 border-gold p-8 rounded-sm">
            <h3 className="font-display text-xl font-bold text-brown-dark mb-2">
              Luxe Collections
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Curated sets designed for specific routines and concerns, perfect for gifting or trying our complete range.
            </p>
          </div>

          <div className="bg-cobalt-light/20 border-l-4 border-cobalt p-8 rounded-sm">
            <h3 className="font-display text-xl font-bold text-brown-dark mb-2">
              Sustainable Packaging
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Eco-friendly packaging options that align with our commitment to environmental responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cobalt-dark text-white py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Stay Updated
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Subscribe to our newsletter to be the first to hear about new launches
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

      {/* Browse All */}
      <section className="bg-white py-12 text-center">
        <Link
          to="/shop"
          className="inline-block border-2 border-cobalt text-cobalt px-8 py-3 font-semibold hover:bg-cobalt hover:text-white transition-colors"
        >
          Browse All Products
        </Link>
      </section>
    </Layout>
  );
}
