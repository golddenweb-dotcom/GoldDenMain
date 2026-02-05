import Layout from "@/components/Layout";
import { ChevronRight, Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function CustomerStories() {
  const stories = [
    {
      name: "Sarah M.",
      location: "London, UK",
      rating: 5,
      title: "Finally Found Relief!",
      quote: "I've struggled with KP on my arms for years. Within just three weeks of using The Gold Den products, I noticed a dramatic improvement. My skin is smoother, softer, and I actually feel confident wearing sleeveless tops again. Highly recommend!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    },
    {
      name: "Emma R.",
      location: "New York, USA",
      rating: 5,
      title: "Better Than I Expected",
      quote: "The quality of these products is exceptional. They're luxurious, they smell amazing, and they actually work. I've tried so many treatments for my KP, and nothing compares to what The Gold Den offers. Worth every penny.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    },
    {
      name: "Jessica L.",
      location: "Sydney, Australia",
      rating: 5,
      title: "Life-Changing",
      quote: "I was skeptical at first, but these products changed my life. My daughter has KP on her legs, and within a month of consistent use, the bumps have nearly disappeared. We're both now loyal customers. Thank you, The Gold Den!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    },
    {
      name: "Michael T.",
      location: "Toronto, Canada",
      rating: 5,
      title: "Impressed with Results",
      quote: "As a guy with KP on my legs and shoulders, I was looking for something that actually works without being too feminine. These products are unisex, effective, and feel luxurious. My skin has never felt better. Ordering again!",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    },
    {
      name: "Lisa P.",
      location: "Los Angeles, USA",
      rating: 5,
      title: "Professional Quality",
      quote: "I work in the beauty industry, and I'm picky about products. The Gold Den's formulations are professional-grade and their ingredients are genuinely premium. I've recommended it to all my clients with KP.",
      image: "https://images.unsplash.com/photo-1489227211591-7dca89df66ca?w=100&h=100&fit=crop",
    },
    {
      name: "David K.",
      location: "Berlin, Germany",
      rating: 5,
      title: "Exactly What I Needed",
      quote: "The natural ingredients were a big draw for me, and the results speak for themselves. My KP is nearly gone, and my skin feels incredibly healthy. This is the only skincare line I'll use now.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
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
            Customer Stories
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
            Real results from real people
          </p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 py-6 border-b border-gray-200">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Link to="/" className="hover:text-brown-dark transition-colors">Home</Link>
          <ChevronRight size={16} />
          <span className="text-brown-dark font-medium">Customer Stories</span>
        </div>
      </div>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center">
          <p className="font-serif text-gold text-sm uppercase tracking-widest mb-4 font-semibold">
            Testimonials
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-brown-dark mb-6">
            See What Our Customers Are Saying
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            From dramatic transformations to subtle but meaningful improvements, our customers have experienced the power of The Gold Den. These are their real stories.
          </p>
        </div>
      </section>

      {/* Stories Grid */}
      <section className="bg-gray-50 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {stories.map((story, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-gray-200"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-display font-bold text-brown-dark">
                      {story.name}
                    </h3>
                    <p className="text-sm text-gray-600">{story.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: story.rating }).map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-gold text-gold"
                    />
                  ))}
                </div>

                <h4 className="font-display text-lg font-bold text-brown-dark mb-3">
                  {story.title}
                </h4>

                <p className="text-gray-600 leading-relaxed italic">
                  "{story.quote}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-cobalt-dark text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-gold mb-2">
                98%
              </p>
              <p className="text-blue-100">Customer Satisfaction Rate</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-gold mb-2">
                4,500+
              </p>
              <p className="text-blue-100">Happy Customers</p>
            </div>
            <div>
              <p className="font-display text-4xl md:text-5xl font-bold text-gold mb-2">
                ⭐ 4.9/5
              </p>
              <p className="text-blue-100">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="max-w-2xl mx-auto text-center px-4">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-brown-dark mb-6">
            Join Thousands of Satisfied Customers
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">
            Your story could be next. Experience the transformation that thousands have already discovered.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-cobalt text-white px-8 py-3 font-semibold hover:bg-cobalt-dark transition-colors text-lg"
          >
            Start Your Journey Today
          </Link>
        </div>
      </section>
    </Layout>
  );
}
