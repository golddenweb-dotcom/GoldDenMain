import Layout from "@/components/Layout";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function BestSellers() {
  const products = [
    {
      id: 1,
      name: "Pumpkin Seed Renewal Oil",
      description: "Healing essence for KP and damaged skin",
      price: "$89",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&h=600&fit=crop",
      badge: "Best Seller",
      reason: "Our top-selling product with exceptional healing properties",
    },
    {
      id: 2,
      name: "Jojoba Rich Night Cream",
      description: "Deep nourishment and barrier repair",
      price: "$94",
      image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=500&h=600&fit=crop",
      badge: "New",
      reason: "Recently launched bestseller loved for its luxurious texture",
    },
    {
      id: 3,
      name: "KP Correcting Serum",
      description: "Targets keratosis pilaris with natural ingredients",
      price: "$95",
      image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&h=600&fit=crop",
      badge: null,
      reason: "Customers rave about visible results within weeks",
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
            Best Sellers
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Our most loved and trusted products
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-brown-dark transition-colors">Home</Link>
          <ChevronRight size={16} />
          <span className="text-brown-dark font-medium">Best Sellers</span>
        </div>
      </div>

      {/* Products Section */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-dark mb-2">
              Customer Favorites
            </h2>
            <div className="h-1 w-12 bg-gold mb-4 mx-auto" />
            <p className="text-gray-600 text-lg">Tried and trusted by thousands of customers worldwide</p>
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
                    "{product.reason}"
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

          {/* Why These Products Section */}
          <div className="bg-white border border-gray-200 rounded-sm p-8 mt-12">
            <h3 className="font-display text-2xl font-bold text-brown-dark mb-6">
              Why Are These Our Best Sellers?
            </h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-brown-dark flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-brown-dark mb-1">
                    Proven Results
                  </h4>
                  <p className="text-gray-600">
                    Customers see visible improvements in their skin within weeks of use
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-brown-dark flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-brown-dark mb-1">
                    Premium Ingredients
                  </h4>
                  <p className="text-gray-600">
                    Made with the finest natural ingredients sourced responsibly
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-brown-dark flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-brown-dark mb-1">
                    Long-Lasting Results
                  </h4>
                  <p className="text-gray-600">
                    Users report sustained improvements with consistent application
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gold text-brown-dark flex items-center justify-center font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="font-semibold text-brown-dark mb-1">
                    Luxury Experience
                  </h4>
                  <p className="text-gray-600">
                    Premium packaging and sensory experience make skincare feel like a ritual
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-cobalt-dark text-white py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Join Thousands of Happy Customers
          </h2>
          <p className="text-blue-100 mb-8 text-lg">
            Discover why these products are customer favorites
          </p>
          <Link
            to="/shop"
            className="inline-block bg-gold text-brown-dark px-8 py-3 font-semibold hover:bg-gold-light transition-colors text-lg"
          >
            Explore All Products
          </Link>
        </div>
      </section>
    </Layout>
  );
}
