import Layout from "@/components/Layout";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function OurTreatment() {
  const steps = [
    {
      number: 1,
      title: "Cleanse & Exfoliate",
      description: "Gently remove dead skin and buildup without irritating sensitive areas with KP",
    },
    {
      number: 2,
      title: "Nourish & Hydrate",
      description: "Apply our nutrient-rich oils and creams to deeply moisturize the affected areas",
    },
    {
      number: 3,
      title: "Heal & Repair",
      description: "Use targeted serums with natural ingredients to promote skin barrier repair",
    },
    {
      number: 4,
      title: "Protect & Maintain",
      description: "Daily maintenance with protective products to prevent recurrence",
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
            Our Treatment
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            A comprehensive approach to treating keratosis pilaris
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-brown-dark transition-colors">Home</Link>
          <ChevronRight size={16} />
          <span className="text-brown-dark font-medium">Our Treatment</span>
        </div>
      </div>

      {/* Main Content */}
      <section className="max-w-4xl mx-auto px-4 py-16 md:py-24">
        <div>
          <p className="font-serif text-gold text-sm uppercase tracking-widest mb-4 font-semibold">
            Our Methodology
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-dark mb-6">
            The Gold Den Approach
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Our treatment approach combines natural ingredients with proven skincare science to address keratosis pilaris from multiple angles. Rather than a quick fix, we offer a comprehensive system designed to deliver lasting results.
          </p>
        </div>

        {/* Treatment Steps */}
        <div className="my-16">
          <h3 className="font-display text-2xl font-bold text-brown-dark mb-12">
            Our Four-Step Process
          </h3>

          <div className="space-y-8">
            {steps.map((step) => (
              <div key={step.number} className="flex gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gold text-brown-dark font-display font-bold text-2xl">
                    {step.number}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-display text-xl font-bold text-brown-dark mb-2">
                    {step.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Ingredients */}
        <div className="bg-gold-light/20 border-l-4 border-gold p-8 rounded-sm my-12">
          <h3 className="font-display text-2xl font-bold text-brown-dark mb-4">
            Why Our Products Work
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-gold font-bold mt-1">•</span>
              <p className="text-gray-600"><strong>Natural Ingredients:</strong> Sourced for their proven effectiveness in treating rough, bumpy skin</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold font-bold mt-1">•</span>
              <p className="text-gray-600"><strong>Gentle Formula:</strong> Designed not to irritate sensitive areas while still being effective</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold font-bold mt-1">•</span>
              <p className="text-gray-600"><strong>Deep Nourishment:</strong> Works on all three skin layers for comprehensive healing</p>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gold font-bold mt-1">•</span>
              <p className="text-gray-600"><strong>Long-Term Results:</strong> Focused on sustained improvement rather than temporary relief</p>
            </li>
          </ul>
        </div>

        {/* Expected Results */}
        <div className="my-12">
          <h3 className="font-display text-2xl font-bold text-brown-dark mb-4">
            What to Expect
          </h3>
          <div className="space-y-4">
            <div className="p-4 border border-gray-200 rounded-sm">
              <p className="font-semibold text-brown-dark mb-2">Week 1-2</p>
              <p className="text-gray-600">You'll notice softer, smoother skin with improved texture</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-sm">
              <p className="font-semibold text-brown-dark mb-2">Week 3-4</p>
              <p className="text-gray-600">Visible reduction in bumps and redness begins to appear</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-sm">
              <p className="font-semibold text-brown-dark mb-2">Week 5-8</p>
              <p className="text-gray-600">Significant improvement in appearance and skin health</p>
            </div>
            <div className="p-4 border border-gray-200 rounded-sm">
              <p className="font-semibold text-brown-dark mb-2">Ongoing</p>
              <p className="text-gray-600">Continued use prevents recurrence and maintains beautiful skin</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4 mt-12">
          <Link
            to="/shop"
            className="inline-block bg-cobalt text-white px-8 py-3 font-semibold hover:bg-cobalt-dark transition-colors"
          >
            Shop Treatment Products
          </Link>
          <Link
            to="/customer-stories"
            className="inline-block border-2 border-cobalt text-cobalt px-8 py-3 font-semibold hover:bg-cobalt hover:text-white transition-colors"
          >
            See Customer Stories
          </Link>
        </div>
      </section>
    </Layout>
  );
}
