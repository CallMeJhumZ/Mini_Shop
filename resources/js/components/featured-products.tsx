import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Urban Classic Sneaker",
    price: 129,
    originalPrice: 159,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop&crop=center",
    badge: "Bestseller"
  },
  {
    id: 2,
    name: "Elegant Oxford",
    price: 199,
    image: "https://images.unsplash.com/photo-1614252369475-531eba835eb1?w=400&h=400&fit=crop&crop=center",
    badge: "Premium"
  },
  {
    id: 3,
    name: "Comfort Running",
    price: 89,
    originalPrice: 110,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop&crop=center",
    badge: "Sale"
  },
  {
    id: 4,
    name: "Casual Loafer",
    price: 149,
    image: "https://images.unsplash.com/photo-1582897085656-c636d006a246?w=400&h=400&fit=crop&crop=center",
    badge: "New"
  }
];

export const FeaturedProducts = () => {
  return (
    <section id="collection" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Featured Collection
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Handpicked styles that define modern elegance and comfort
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-smooth">
                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    product.badge === 'Sale' ? 'bg-accent text-accent-foreground' :
                    product.badge === 'New' ? 'bg-primary text-primary-foreground' :
                    product.badge === 'Premium' ? 'hero-gradient text-white' :
                    'bg-secondary text-secondary-foreground'
                  }`}>
                    {product.badge}
                  </span>
                </div>

                {/* Wishlist */}
                <button className="absolute top-4 right-4 z-10 p-2 bg-background/80 backdrop-blur-sm rounded-full opacity-0 group-hover:opacity-100 transition-smooth hover:bg-background">
                  <Heart className="h-4 w-4 text-muted-foreground hover:text-accent transition-smooth" />
                </button>

                {/* Image */}
                <div className="aspect-square overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-smooth"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-primary mb-2 group-hover:text-accent transition-smooth">
                    {product.name}
                  </h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-accent">
                        ${product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-sm text-muted-foreground line-through">
                          ${product.originalPrice}
                        </span>
                      )}
                    </div>
                  </div>

                  <Button variant="default" className="w-full group">
                    <ShoppingCart className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="minimal" size="lg">
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};