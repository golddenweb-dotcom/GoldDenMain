import { Link } from "react-router-dom";
import { Search, ShoppingCart, Menu, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

interface LayoutProps {
  children: React.ReactNode;
}

const navMenus = {
  shop: {
    title: "Shop Skincare",
    categories: [
      {
        name: "Featured",
        items: [
          { label: "All Products", href: "/shop" },
          { label: "Best Sellers", href: "/best-sellers" },
          { label: "New Arrivals", href: "/new-arrivals" },
        ],
      },
    ],
  },
  vision: {
    title: "Our Vision",
    categories: [
      {
        name: "Learn",
        items: [
          { label: "Our Story", href: "/our-story" },
          { label: "Skin Health", href: "/skin-health" },
          { label: "Why Natural Ingredients", href: "/natural-ingredients" },
        ],
      },
    ],
  },
  kp: {
    title: "KP Solutions",
    categories: [
      {
        name: "KP Resources",
        items: [
          { label: "What is KP?", href: "/what-is-kp" },
          { label: "Our Treatment", href: "/our-treatment" },
          { label: "Customer Stories", href: "/customer-stories" },
        ],
      },
    ],
  },
};

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

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const headerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const [headerHeight, setHeaderHeight] = useState(176);
  const [headerOffset, setHeaderOffset] = useState(0);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    if (searchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [searchOpen]);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    updateHeaderHeight();
    const timer = setTimeout(updateHeaderHeight, 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    });

    resizeObserver.observe(headerRef.current);
    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">

      {/* Header */}
      <header className="border-b border-gray-200 sticky top-0 z-30 bg-white" ref={headerRef}>

        {/* Main Header */}
        <div className="px-4 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X size={24} className="text-brown-dark" />
              ) : (
                <Menu size={24} className="text-brown-dark" />
              )}
            </button>

            {/* Logo - Centered on desktop */}
            <Link
              to="/"
              className="flex-1 md:flex-none text-center"
            >
              <h1 className="font-script text-3xl md:text-4xl text-brown-dark font-light tracking-widest italic">
                The Gold Den
              </h1>
              <p className="text-xs text-gold uppercase tracking-widest font-semibold hidden md:block">
                Luxury Beauty & Wellness
              </p>
            </Link>

            {/* Right icons */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 hover:text-gold transition-colors hidden md:block"
                aria-label="Search"
              >
                <Search size={20} className="text-brown-dark" />
              </button>
              <button
                className="p-2 hover:text-gold transition-colors hidden md:block"
                aria-label="Shopping cart"
              >
                <ShoppingCart size={20} className="text-brown-dark" />
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Main Navigation */}
        <nav className="hidden md:block relative border-t border-gray-200" onMouseLeave={() => setActiveDropdown(null)}>
          <div className="flex justify-center items-center gap-8 px-4 py-4 text-sm">
            {(Object.entries(navMenus) as Array<[string, typeof navMenus.gifts]>).map(
              ([key, menu]) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setActiveDropdown(key)}
                >
                  <button className={`text-brown-dark font-medium transition-colors py-4 px-2 border-b-2 border-transparent ${activeDropdown === key ? "border-gold text-gold" : "hover:text-gold hover:border-gold"}`}>
                    {menu.title}
                  </button>

                  {/* Full-width Dropdown Menu */}
                  {activeDropdown === key && (
                    <div className="fixed left-0 right-0 opacity-100 visible transition-all duration-200 z-40" style={{ top: `${headerHeight}px` }} onMouseEnter={() => setActiveDropdown(key)} onMouseLeave={() => setActiveDropdown(null)}>
                      <div className="bg-white border-t border-gray-200 shadow-lg">
                        <div className="max-w-7xl mx-auto px-8 py-12">
                          <div className="grid grid-cols-4 gap-12 items-start">
                            <div className="col-span-1">
                              {menu.categories.map((category, idx) => (
                                <div key={idx}>
                                  <h3 className="text-brown-dark font-semibold text-xs uppercase tracking-wider mb-4">
                                    {category.name}
                                  </h3>
                                  <ul className="space-y-3">
                                    {category.items.map((item, itemIdx) => (
                                      <li key={itemIdx}>
                                        <Link
                                          to={item.href}
                                          className="text-gray-600 text-sm hover:text-gold transition-colors"
                                          onClick={() => setActiveDropdown(null)}
                                        >
                                          {item.label}
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>

                            {/* Image Grid on the Right */}
                            <div className="col-span-3">
                              <div className="grid grid-cols-3 gap-4">
                                {[
                                  "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop",
                                  "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=300&h=300&fit=crop",
                                  "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=300&h=300&fit=crop",
                                ].map((img, idx) => (
                                  <div
                                    key={idx}
                                    className="relative overflow-hidden rounded-sm h-32 cursor-pointer group"
                                  >
                                    <img
                                      src={img}
                                      alt={`Product ${idx + 1}`}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-2 pt-4 border-t border-gray-200 flex flex-col gap-3 pb-4 px-4">
            <Link
              to="/shop"
              className="text-brown-dark font-medium hover:text-gold transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Shop Skincare
            </Link>
            <Link
              to="/vision"
              className="text-brown-dark font-medium hover:text-gold transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Vision
            </Link>
            <Link
              to="/kp-solutions"
              className="text-brown-dark font-medium hover:text-gold transition-colors text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              KP Solutions
            </Link>
          </nav>
        )}
      </header>

      {/* Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/40 z-50 flex items-start justify-center pt-20">
          <div className="bg-white w-full max-w-2xl rounded-sm shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="p-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <Search size={20} className="text-gold" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 text-lg outline-none text-brown-dark placeholder-gray-400"
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      setSearchOpen(false);
                      setSearchQuery("");
                    }
                  }}
                />
                <button
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchQuery("");
                  }}
                  className="p-1 hover:bg-gray-100 rounded transition-colors"
                  aria-label="Close search"
                >
                  <X size={20} className="text-gray-500" />
                </button>
              </div>
            </div>

            {/* Search Results */}
            <div className="max-h-96 overflow-y-auto">
              {searchQuery && filteredProducts.length > 0 ? (
                <div className="p-6">
                  <p className="text-sm text-gray-500 mb-4">
                    {filteredProducts.length} product{filteredProducts.length !== 1 ? "s" : ""} found
                  </p>
                  <div className="space-y-4">
                    {filteredProducts.map((product) => (
                      <div
                        key={product.id}
                        className="flex gap-4 p-4 border border-gray-200 rounded-sm hover:border-gold hover:bg-gray-50 transition-colors cursor-pointer group"
                        onClick={() => {
                          setSearchOpen(false);
                          setSearchQuery("");
                        }}
                      >
                        <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-sm">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start gap-2 mb-1">
                            <h3 className="font-semibold text-brown-dark group-hover:text-gold transition-colors truncate">
                              {product.name}
                            </h3>
                            {product.badge && (
                              <span className="text-xs bg-gold text-brown-dark px-2 py-1 font-semibold uppercase whitespace-nowrap">
                                {product.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                            {product.description}
                          </p>
                          <p className="text-cobalt font-semibold">{product.price}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : searchQuery ? (
                <div className="p-12 text-center">
                  <p className="text-gray-500">No products found matching "{searchQuery}"</p>
                </div>
              ) : (
                <div className="p-12 text-center">
                  <p className="text-gray-500 text-lg mb-2">Start typing to search</p>
                  <p className="text-gray-400 text-sm">Search by product name or description</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Overlay for search modal */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setSearchOpen(false);
            setSearchQuery("");
          }}
        />
      )}

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-cobalt-dark text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-display text-gold text-xl font-bold mb-4">
                The Gold Den
              </h3>
              <p className="text-gray-300 text-sm">
                Luxury beauty and wellness products curated for the discerning
                individual.
              </p>
            </div>
            <div>
              <h4 className="text-gold font-semibold mb-4">Shop</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>
                  <Link
                    to="/fragrances"
                    className="hover:text-gold transition-colors"
                  >
                    Fragrances
                  </Link>
                </li>
                <li>
                  <Link
                    to="/collections"
                    className="hover:text-gold transition-colors"
                  >
                    Collections
                  </Link>
                </li>
                <li>
                  <Link
                    to="/bestsellers"
                    className="hover:text-gold transition-colors"
                  >
                    Bestsellers
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold font-semibold mb-4">Company</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-gold transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-gold transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-gold transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold font-semibold mb-4">Connect</h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-gold transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gold transition-colors"
                  >
                    Facebook
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-gold transition-colors"
                  >
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cobalt pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2024 The Gold Den. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
