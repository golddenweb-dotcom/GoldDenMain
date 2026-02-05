import Layout from "@/components/Layout";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function WhatIsKP() {
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
            What is Keratosis Pilaris?
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Understanding KP and how to treat it
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-brown-dark transition-colors">Home</Link>
          <ChevronRight size={16} />
          <span className="text-brown-dark font-medium">What is KP</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div>
          <p className="font-serif text-gold text-sm uppercase tracking-widest mb-4 font-semibold">
            Addressing Keratosis Pilaris
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-dark mb-6">
            Understanding the Condition
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Keratosis pilaris (KP) is a common, harmless skin condition that causes dry, rough patches and tiny bumps—often appearing on the upper arms, thighs, cheeks, or buttocks. It affects more people than you might think, and while not dangerous, it can be uncomfortable and affect how you feel in your own skin.
          </p>

          {/* What Causes It */}
          <div className="bg-gold-light/20 border-l-4 border-gold p-8 rounded-sm mb-8">
            <h3 className="font-display text-2xl font-bold text-brown-dark mb-3">
              What Causes Keratosis Pilaris?
            </h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              Keratosis pilaris occurs when too much keratin—a natural skin protein—builds up and blocks hair follicles and pores. This buildup leads to the characteristic small, hard bumps and rough texture.
            </p>
            <p className="text-gray-600 leading-relaxed">
              The exact cause isn't fully understood, but it's often linked to genetic predisposition and can worsen in dry, cold climates or during winter months. It's more common in those with dry skin, eczema, or other inflammatory skin conditions.
            </p>
          </div>

          {/* Common Locations */}
          <div className="mb-8">
            <h3 className="font-display text-2xl font-bold text-brown-dark mb-4">
              Common Locations
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              While KP can appear anywhere on the body, it's most commonly found in these areas:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-1">•</span>
                <div>
                  <p className="font-semibold text-brown-dark">Upper Arms</p>
                  <p className="text-gray-600 text-sm">The most common location for KP bumps</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-1">•</span>
                <div>
                  <p className="font-semibold text-brown-dark">Thighs</p>
                  <p className="text-gray-600 text-sm">Often affected on the outer or back portions</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-1">•</span>
                <div>
                  <p className="font-semibold text-brown-dark">Cheeks</p>
                  <p className="text-gray-600 text-sm">Can affect facial skin and appear as bumpy texture</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gold font-bold mt-1">•</span>
                <div>
                  <p className="font-semibold text-brown-dark">Buttocks</p>
                  <p className="text-gray-600 text-sm">Another common area of occurrence</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Important to Know */}
          <div className="bg-cobalt-light/20 border-l-4 border-cobalt p-8 rounded-sm mb-8">
            <h3 className="font-display text-2xl font-bold text-brown-dark mb-3">
              Important Things to Know
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-cobalt font-bold">✓</span>
                <p className="text-gray-600">KP is NOT contagious</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cobalt font-bold">✓</span>
                <p className="text-gray-600">It's NOT a sign of poor hygiene</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cobalt font-bold">✓</span>
                <p className="text-gray-600">It can be managed and improved with proper treatment</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-cobalt font-bold">✓</span>
                <p className="text-gray-600">You're not alone—millions of people have KP</p>
              </li>
            </ul>
          </div>

          {/* Our Approach */}
          <div className="mt-12">
            <h2 className="font-display text-3xl font-bold text-brown-dark mb-6">
              Our Treatment Approach
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We've formulated our products specifically to help repair, heal, and prevent keratosis pilaris using nature's most potent remedies. By combining carefully selected natural and herbal ingredients, we work to support your skin's natural healing process and restore its smoothness and vitality.
            </p>
            <Link
              to="/our-treatment"
              className="inline-block border-2 border-cobalt text-cobalt px-8 py-3 font-semibold hover:bg-cobalt hover:text-white transition-colors"
            >
              Learn About Our Treatment
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
