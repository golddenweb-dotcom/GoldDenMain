import Layout from "@/components/Layout";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Shop() {
  const products = [
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
            Our Collection
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Discover our curated selection of luxury skincare products
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-brown-dark transition-colors">Home</Link>
          <ChevronRight size={16} />
          <span className="text-brown-dark font-medium">Shop</span>
        </div>
      </div>

      {/* Products Section */}
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
        </div>
      </section>
    </Layout>
  );
}
